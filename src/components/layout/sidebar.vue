<!--
 * @Description: layout布局siderbar
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-11-06 10:43:29
 * @LastEditors: zhoucheng
-->
<template>
  <el-container class="sidebar-style">
    <side-nav class="tac"
              :routes="routes"
              :active-menu="menuValue"></side-nav>
  </el-container>
</template>

<script>
import SideNav from "@/components/layout/SideNav";
export default {
  components: {
    SideNav
  },
  data () {
    return {
      menuValue: "homePage",
      routes: [
        { code: "1", name: "首页预览", routeName: "homePage" },
        {
          code: "2",
          name: "Css",
          children: [
            { code: "2-1", name: "文字背景(动)", routeName: "dynamicBackground" },
            { code: "2-2", name: "移动/转动", routeName: "dynamicEffect" },
            { code: "2-3", name: "页面加载loading", routeName: "loadingAnimation" },
            { code: "2-4", name: "动画样例", routeName: "animationExample", },
            { code: "2-5", name: "文本效果", routeName: "textEffect" },
            { code: "2-6", name: "特殊样式", routeName: "speacialCss" },
          ]
        },
        {
          code: "3",
          name: "JavaScript",
          routeName: "commonJs",
          children: []
        },
        {
          code: "8",
          name: "饿了么组件",
          children: [
            { code: "8-1", name: "表格类", routeName: "elTable" },
          ]
        },
        {
          code: "4",
          name: "HighCharts",
          children: [
            { code: "4-1", name: "饼图", routeName: "highchartsPie" },
          ]
        },
        {
          code: "5",
          name: "ECharts",
          children: [
            { code: "5-1", name: "饼图", routeName: "echartsPie" },
            { code: "5-2", name: "线图", routeName: "echartsLine" },
            { code: "5-3", name: "柱状图", routeName: "echartsColumn" },
          ]
        },
        {
          code: "6",
          name: "高德地图",
          children: [
            { code: "6-1", name: "基本图", routeName: "amapMap" },
            { code: "6-2", name: "热力图", routeName: "thermodynamic" },
          ]
        },
        {
          code: "7",
          name: "百度地图",
          children: [
            { code: "7-1", name: "百度地图", routeName: "baiduMap" },
          ]
        },

        {
          code: "9",
          name: "登陆页设计",
          routeName: "loginShow",
          children: [
            { code: "9-1", name: "产品登录页", routeName: "flashback" },
          ]
        },
        { code: "10", name: "验证码", routeName: "checkTrueCode" },
        { code: "11", name: "视频流", routeName: 'videoStream' },
        { code: "12", name: "接口使用", routeName: 'aixosExample' },

        { code: "1000", name: "测试页面", routeName: "test" },
      ]
    };
  },
  mounted () {
    // 默认进入第一个页面
    this.menuValue = this.$route.path.split("/")[1];
  }
};
</script>

<style lang="scss" scoped>
/deep/.el-scrollbar__wrap {
  overflow-x: hidden;
}
.sidebar-style {
  width: 100%;
  height: 100%;
  .tac {
    width: 100%;
    height: 100%;
    background: #fbc2eb;
  }
}
</style>
