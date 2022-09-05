<!--
 * @Description: 高德地图热力图
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-12-18 16:38:58
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div id="container"></div>
    <div class="input-card"
         style="width: auto;">
      <div class="input-item">
        <button class="btn"
                onclick="heatmap.show()">显示热力图</button>
      </div>
      <div class="input-item">
        <button class="btn"
                onclick="heatmap.hide()">关闭热力图</button>
      </div>
    </div>

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.initMap()
  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
  //方法集合
  methods: {
    initMap () {
      var map = new window.AMap.Map("container", {
        resizeEnable: true,
        center: [116.418261, 39.921984],
        zoom: 11
      });
      var points = [
        { "lng": "116.32497", "lat": "39.96696" },
        { "lng": "116.616", "lat": "40.053016" },
        { "lng": "116.34324", "lat": "39.95056" },
        { "lng": "116.554131", "lat": "39.912131" },
        { "lng": "116.3483", "lat": "39.83151" },
        { "lng": "116.36619", "lat": "39.75298" }
      ];

      var heatmap;
      map.plugin(["AMap.Heatmap"], function () {
        //初始化heatmap对象
        heatmap = new window.AMap.Heatmap(map, {
          radius: 25, //给定半径
          opacity: [0, 0.8]
        });
        //设置数据集：该数据为北京部分“公园”数据
        heatmap.setDataSet({
          data: points,
          max: 100
        });
      });


      heatmap.setDataSet({
        data: points,
        max: 1
      })
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.mainbody {
  width: 100%;
  height: 100%;
  #container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
}
</style>