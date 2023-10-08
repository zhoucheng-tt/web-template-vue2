<!--
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-02-24 14:41:58
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="title">{{ contentName }} </div>
    <div class="content">
      <div class="item">
        <span class="num"
              :style="`transform: translate(-50%, -${number * 10}%)`">0123456789</span>
        <span class="num"
              :style="`transform: translate(-50%, -${number * 100}%)`">0123456789</span>
        <span class="num"
              :style="`transform: translate(-50%, -${number * 1000}%)`">0123456789</span>
      </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    contentName () {
      String
    }
  },
  data () {
    // 这里存放数据
    return {
      number: 8
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
    // setInterval(() => {
    //   this.number--
    // }, 1000)
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
  overflow: hidden;
  .title {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    letter-spacing: 2px;
  }
  .content {
    width: 100%;
    height: 90%;
    display: flex;
    .item {
      width: 54px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      background-color: #149373;
      border-radius: 10px;
      overflow: hidden;
      margin-right: 5px;

      position: relative;
      writing-mode: vertical-lr;
      text-orientation: upright;
      .num {
        position: absolute;
        left: 50%;
        top: 10px;
        font-size: 63px;
        color: #ffffff;
        transition: all 2.5s;
      }
    }
  }
}
</style>