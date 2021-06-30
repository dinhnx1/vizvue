<template>
  <div class="container">
    <div class="row">
      <SunburstChart :data="data" :width="1024" :height="1024"></SunburstChart>
    </div>
  </div>
</template>

<script lang="ts">
import jsonData from "@/data/data.json"
import SunburstChart from "@/components/SunburstChart.vue"
import MenuTooltip from "@/components/MenuTooltip.vue"
import { SunburstData } from "@/interfaces/sunburstData";
import { Vue, Component } from "vue-property-decorator";
import { ZMenu } from "@/interfaces/menu";

@Component({
  components: { SunburstChart, MenuTooltip}
})
class SunburstChartView extends Vue {
  data: SunburstData;
  constructor() {
    super();
    this.data = JSON.parse(JSON.stringify(jsonData));
  }
}
export default SunburstChartView;
</script>
<style scoped>
</style>