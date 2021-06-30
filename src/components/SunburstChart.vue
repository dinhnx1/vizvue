<template>
  <div id="arc"></div>
</template>
<script lang="ts">
import * as d3 from "d3";
import { SunburstData } from "@/interfaces/sunburstData";
import { Vue, Component, Prop } from "vue-property-decorator";
import { HierarchyNode } from "d3";

@Component
class SunburstChart extends Vue {
  root: HierarchyNode<any> | undefined;
  @Prop() data: SunburstData | undefined;
  @Prop() width: number | undefined;
  @Prop() height: number | undefined;
  mounted(): void {
    this.generateArc();
  }
  generateArc(): void {
    if (this.data === undefined || this.width === undefined || this.height === undefined) {
      return;
    }
    this.root = this.hierarchy();
    if (this.root === undefined) {
      return;
    }
    this.root.each((d: any) => (d.current = d));
    const svg = d3
      .select("#arc")
      .append("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
      .attr("width", `${this.width}`)
      .attr("height", `${this.height}`)
      .style("font", "10px sans-serif");
    const g = svg
      .append("g")
      .attr("transform", `translate(${this.width / 2},${this.width / 2})`);
    const color = d3.scaleOrdinal(
      d3.quantize(d3.interpolateRainbow, this.data.children.length + 1)
    );

    const radius = this.width / 6;
    const arc = d3
      .arc<any>()
      .startAngle((d) => d.x0)
      .endAngle((d) => d.x1)
      .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
      .padRadius(radius * 1.5)
      .innerRadius((d) => d.y0 * radius)
      .outerRadius((d) => Math.max(d.y0 * radius, d.y1 * radius - 1));

    const path = g
      .append("g")
      .selectAll("path")
      .data(this.root.descendants().slice(1))
      .join("path")
      .attr("fill", (d) => {
        while (d.depth > 1 && d.parent != undefined) d = d.parent;
        return color(d.data.name);
      })
      .attr("fill-opacity", (d) => this.arcVisible(d) ? (d.children ? 0.6 : 0.4) : 0)
      .attr("d", (d) => arc(d));

    const format = d3.format(",d");
    path.append("title").text(
      (d) =>
        `${d
          .ancestors()
          .map((d) => d.data.name)
          .reverse()
          .join("/")}\n${d.value === undefined ? "" : format(d.value)}`
    );

    const label = g
      .append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .style("user-select", "none")
      .selectAll("text")
      .data(this.root.descendants().slice(1))
      .join("text")
      .attr("dy", "0.35em")
      .attr("fill-opacity", (d: any) => +this.labelVisible(d.current))
      .attr("transform", (d: any) => this.labelTransform(d.current))
      .text((d: any) => d.data.name);

    const parent = g
      .append("circle")
      .datum(this.root)
      .attr("r", radius)
      .attr("fill", "none")
      .attr("pointer-events", "all");

    const self = this;
    const clicked = function (this: any, e, p) {
      if (self.root === undefined) {
        return;
      }
      parent.datum(p.parent || self.root);
      self.root.each(
        (d: any) =>
          (d.target = {
            x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            y0: Math.max(0, d.y0 - p.depth),
            y1: Math.max(0, d.y1 - p.depth)
          })
      );

      path
        .transition()
        .duration(750)
        .tween("data", (d: any) => {
          const i = d3.interpolate(d.current, d.target);
          return (t: number) => (d.current = i(t));
        })
        .filter(function (this: any, d: any) {
          const opa = +this.getAttribute("fill-opacity");
          return opa > 0 || self.arcVisible(d.target);
        })
        .attr("fill-opacity", (d: any) => self.arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
        .attrTween("d", (d: any) => (t: number) => {
          const res = arc(d.current);
          return res == null ? "" : res;
        });

      label
        .filter(function (this: any, d: any) {
          const opa = +this.getAttribute("fill-opacity");
          return opa > 0 || self.labelVisible(d.target);
        })
        .transition()
        .duration(750)
        .attr("fill-opacity", (d: any) => +self.labelVisible(d.target))
        .attrTween("transform", (d: any) => () => self.labelTransform(d.current));
    };
    parent.on("click", clicked);

    path
      .filter((d) => d.children !== undefined && d.children.length > 0)
      .style("cursor", "pointer")
      .on("click", clicked);
  }
  hierarchy(): any {
    this.root = d3
      .hierarchy(this.data)
      .sum((d) => (d === undefined ? 0 : d.size))
      .sort((a, b) =>
        a.value === undefined
          ? 1
          : b.value === undefined
          ? -1
          : b.value - a.value
      );
    return d3.partition().size([2 * Math.PI, this.root.height + 1])(this.root);
  }
  arcVisible(d: any): boolean {
    return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
  }
  labelVisible(d: any): boolean {
    return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
  }
  labelTransform(d: any): string {
    if (this.width === undefined) {
      return "";
    }
    const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
    const y = (((d.y0 + d.y1) / 2) * this.width) / 6;
    return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
  }
}
export default SunburstChart;
</script>

<style scoped>
</style>