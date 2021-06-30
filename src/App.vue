<template>
  <div id="app">
    <CustomHeader />
    <router-view></router-view>
    <CustomFooter />
  </div>
</template>

<script lang="ts">
import CustomHeader from "@/components/Header.vue";
import CustomFooter from "@/components/Footer.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    CustomHeader,
    CustomFooter
  }
})
class App extends Vue {}
export default App;
</script>

<style></style>
