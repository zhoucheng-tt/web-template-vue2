<!--
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-03-18 16:38:16
 * @LastEditors: zhoucheng
-->
<template>
  <el-scrollbar class="scrollbar">
    <el-menu :background-color="menuStyle.backgroundColor"
             :active-text-color="menuStyle.activeTextColor"
             :text-color="menuStyle.textColor"
             :default-active="activeMenu"
             :collapse-transition="false"
             :unique-opened="false"
             mode="vertical"
             router>
      <side-nav-item v-for="route in routes"
                     :item="route"
                     :key="route.routeName"
                     :route-name="route.routeName">
      </side-nav-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SideNavItem from "./SideNavItem";
export default {
  name: "index",
  components: {
    SideNavItem
  },
  props: {
    routes: {
      type: Array,
      required: true
    },
    activeMenu: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      menuStyle: {
        backgroundColor: "#a6c1ee",
        activeTextColor: "#434343",
        textColor: "#009efd"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.scrollbar {
  width: 100%;
  height: 100%;
}
</style>
