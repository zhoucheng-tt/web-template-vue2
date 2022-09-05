<!--
 * @Description: echarts 线图
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-12-31 10:00:51
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="lineOne">
      <el-row class="item">
        <gradient-line />
      </el-row>
      <el-row class="item">
      </el-row>
      <el-row class="item"></el-row>
    </el-row>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import GradientLine from '../../../components/ECharts/EChartsLine/GradientLine'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    GradientLine
  },
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

  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.mainbody {
  width: 100%;
  height: 100%;
  .lineOne {
    width: 100%;
    height: 32%;
    display: flex;
    .item {
      width: 32%;
      height: 100%;
      border: 1px solid black;
      margin-left: 1%;
      margin-top: 1%;
    }
  }
}
</style>