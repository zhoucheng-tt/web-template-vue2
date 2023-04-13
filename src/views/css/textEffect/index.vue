<!--
 * @Description: css 文本效果
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-02-24 14:41:58
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="contentItem"
            v-for="(item,index) in contentList"
            :key="index">
      <!-- is 接收的需要是个变量 -->
      <component :is="item.sequence"
                 :contentName="item.contentName"></component>
    </el-row>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { commonName } from './commons/compImpRegUse'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: commonName(),
  data () {
    // 这里存放数据
    return {
      contentList: [
        { sequence: 'first', contentName: '文本阴影' },
        { sequence: 'second', contentName: '文字渐变色' },
        { sequence: 'third', contentName: '文本悬浮高亮' },
        { sequence: 'fourth', contentName: '数字递增显示' },
        { sequence: 'fifth', contentName: '文字交融展开' },
        { sequence: 'sixth', contentName: '文字底部渐变背景' },
      ]
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  // 方法集合
  methods: {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.mainbody {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  .contentItem {
    width: 32%;
    height: 33vh;
    margin: 1vh 0.6%;
    padding: 0.5%;
    border: 1px solid black;
  }
}
</style>