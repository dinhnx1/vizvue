<template>
  <div class="gdp-1">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="pa-2">
            <h3 class="pb-2">Countries with the highest GDP in 2018</h3>
            <p>
              Gross domestic product by country allows you to compare the
              economies of the nations. It measures everything produced by
              everyone in the country whether they are citizens or foreigners.
              The data has been taken from
              <a href="https://www.thebalance.com/gdp-by-country-3-ways-to-compare-3306012">The Balance</a>.
            </p>
          </div>
        </div>
        <div class="col-md-6" id="arc"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as d3 from "d3";
import { Gdp } from "@/interfaces/gdp";
import Vue from "vue";
import Component from "vue-class-component";

@Component
class GdpVisualization1 extends Vue {
  gdp: Array<Gdp> = [
    { country: "USA", value: 20.5 },
    { country: "China", value: 13.4 },
    { country: "Germany", value: 4.0 },
    { country: "Japan", value: 4.9 },
    { country: "France", value: 2.8 }
  ];
  mounted(): void {
    this.generateArc();
  }
  generateArc(): void {
    console.log("generateArc() is called!!!");
    const WIDTH = 500;
    const HEIGHT = 500;
    const svg = d3
      .select("#arc")
      .append("svg")
      .attr("width", WIDTH)
      .attr("height", HEIGHT);
      
    const sortedGDP = this.gdp.sort((a, b) =>
      a === undefined ? -1 : b === undefined ? 1 : a.value > b.value ? 1 : -1
    );
    const color = d3.scaleOrdinal(sortedGDP.map(g => g.country), d3.schemeDark2);

    const calcMax = d3.max(sortedGDP, o => o.value);
    const maxGDP = calcMax === undefined ? 0 : calcMax;

    const angleScale = d3
      .scaleLinear()
      .domain([0, maxGDP])
      .range([0, 1.5 * Math.PI]);

    const arc = d3
      .arc<any>()
      .innerRadius((d, i) => (i + 1) * 25)
      .outerRadius((d, i) => (i + 2) * 25)
      .startAngle(angleScale(0))
      .endAngle(d => angleScale(d.value));

    const g = svg.append("g");

    g.selectAll("path")
      .data(sortedGDP)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.country))
      .attr("stroke", "#FFF")
      .attr("stroke-width", "1px")
      .on("mouseenter", function() {
        d3
          .select(this)
          .transition()
          .duration(200)
          .attr("opacity", 0.5)
      })
      .on("mouseout", function() {
        d3
          .select(this)
          .transition()
          .duration(200)
          .attr("opacity", 1)
      });

    g.selectAll("text")
      .data(this.gdp)
      .enter()
      .append("text")
      .text(d => d.country + " - " + d.value + " Trillions")
      .attr("x", -150)
      .attr("dy", -8)
      .attr("y", (d, i) => -(i + 1) * 25);

    g.attr("transform", "translate(200, 300)");
  }
}
export default GdpVisualization1;
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
