<!--
 * @Description: 高德地图组件
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-12-06 20:05:04
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="containerDiv">
      <div id="container"></div>
    </el-row>
    <div v-show='showWindow===true'>
      <makerIdInfoWindow ref="makerIdInfoWindow"
                         :id="id"
                         :data="makerObj"
                         @detailsClick="detailsClick"
                         @close="infoWindowClose"></makerIdInfoWindow>
    </div>
    <el-button class="button"
               @click="hnd"
               type="primary">设置点标记</el-button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import AMap from '../commons/amap'
import makerIdInfoWindow from '../components/amapWindowInfo/makerIdInfoWindow.vue'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    makerIdInfoWindow
  },
  data () {
    //这里存放数据
    return {
      map: null,
      showWindow: false,
      id: 'makerId',
      makerObj: { longitude: '118.924832', latitude: '31.910907' },
      makerList: [
        { longitude: '118.924832', latitude: '31.910907' }
      ]
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
      this.map = new AMap(
        "container",
        [118.924832, 31.910907],
        {
          makerId: { mapIcon: require("@/assets/icon/amapIcon.png") },
        },
        {
          makerId: this.$refs.makerIdInfoWindow.$el,
        }
      )
    },
    hnd () {
      this.map.setMarker('makerId', this.makerList)
    },
    detailsClick () {
      alert('aaa')
    },
    infoWindowClose () {
      this.map.closeInfoWindow()
    }
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.mainbody {
  width: 100%;
  height: 100%;
  position: relative;
  .containerDiv {
    width: 100%;
    height: 100%;
    #container {
      width: 100%;
      height: 100%;
    }
  }
  .button {
    position: absolute;
    top: 0;
  }
}
</style>