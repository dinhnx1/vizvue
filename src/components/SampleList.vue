<template>
  <div class="container">
      <SamplePreview
        v-for="(sample, idx) in samples"
        :sample="sample"
        :key="sample.title + idx"
      />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Sample } from "@/interfaces/sample";
import SamplePreview from "@/components/SamplePreview.vue";

@Component({ components: { SamplePreview } })
class SampleList extends Vue {
  samples: Array<Sample> = [
    {
      title: "GDP Visualization",
      description: "Simple sample to visualize top GDP countries",
      name: "gdp1",
    },
    {
      title: "Sunburst Chart",
      description: "Simple Sunburst Chart",
      name: "sunburst",
    }
  ]
}
export default SampleList;
</script>
