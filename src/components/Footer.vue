<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        VizSample
      </router-link>
      <p class="attribution">A learning project about VueJS, D3JS, SVG</p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
class CustomFooter extends Vue {}
export default CustomFooter;
</script>

<style scoped></style>
