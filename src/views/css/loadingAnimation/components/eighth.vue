<!--
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-07-31 15:23:45
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="title">{{ contentName }} </div>
    <div class="content">
      <div class="wave">
        <div class="wave1"></div>
        <div class="wave2"></div>
        <div class="wave3"></div>
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
  beforeCreate () {
  }, // 生命周期 - 创建之前
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
    justify-content: center;
    align-items: center;
    .wave {
      position: relative;
      border: 1px solid silver;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      line-height: 50px;
      margin: 0 auto;
      font-size: 14px;
      text-align: center;
      overflow: hidden;
      animation: water-wave linear infinite;
    }
    .wave1 {
      position: absolute;
      top: 40%;
      left: -25%;
      background: #33cfff;
      opacity: 0.7;
      width: 200%;
      height: 200%;
      border-radius: 40%;
      animation: inherit;
      animation-duration: 5s;
    }
    .wave2 {
      position: absolute;
      top: 40%;
      left: -35%;
      background: #0eaffe;
      opacity: 0.7;
      width: 200%;
      height: 200%;
      border-radius: 35%;
      animation: inherit;
      animation-duration: 7s;
    }
    .wave3 {
      position: absolute;
      top: 50%;
      left: -35%;
      background: #0f7ea4;
      opacity: 0.3;
      width: 200%;
      height: 200%;
      border-radius: 33%;
      animation: inherit;
      animation-duration: 11s;
    }
    @keyframes water-wave {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>