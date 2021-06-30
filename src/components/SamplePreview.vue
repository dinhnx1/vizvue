<template>
  <div class="row">
    <router-link :to="sampleLink" class="preview-link">
      <h1 v-text="sample.title" />
      <p v-text="sample.description" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { Sample } from "@/interfaces/sample";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
class SamplePreview extends Vue {
  @Prop() sample: Sample | undefined;
  get sampleLink(): string {
    return this.sample === undefined ? "" : this.sample.name;
  }
}
export default SamplePreview;
</script>
