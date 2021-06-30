<template>
  <div class="home-global"><SampleList /></div>
</template>

<script lang="ts">
import SampleList from "@/components/SampleList.vue";
import Vue from "vue";
import Component from "vue-class-component";

@Component({ components: { SampleList } })
class Home extends Vue {}
export default Home;
</script>
