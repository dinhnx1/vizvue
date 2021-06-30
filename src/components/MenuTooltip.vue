<template slot="popover">
  <div>
    <h3>{{ title }}</h3>
    <ul class="dropdown-menu">
      <li v-for="(menu, idx) in menus" :key="menu.display + idx"><a :href="menu.link">{{ menu.display }}</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ZMenu } from "@/interfaces/menu";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
class MenuTooltip extends Vue {
  @Prop() menuTitle: string | undefined;
  @Prop() menus: ZMenu | undefined;
  get title(): string {
    return this.menuTitle === undefined ? "" : this.menuTitle;
  }
}
export default MenuTooltip;
</script>