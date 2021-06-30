<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        VizSample
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
class CustomHeader extends Vue {}
export default CustomHeader;
</script>

<style scoped></style>
