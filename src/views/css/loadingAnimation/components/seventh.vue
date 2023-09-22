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
      <div class="loader">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="wineglass left">
          <div class="top"></div>
        </div>
        <div class="wineglass right">
          <div class="top"></div>
        </div>
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
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: #c4d9eb;
    }
    .wineglass {
      height: 36px;
      position: relative;
    }
    .wineglass:after {
      content: '';
      position: absolute;
      top: 47px;
      left: 5px;
      width: 20px;
      height: 5px;
      background: red;
      box-shadow: 0 0 1px red;
    }
    .top {
      background: red;
      width: 30px;
      height: 36px;
      border-radius: 0 0 36px 36px;
      box-shadow: 0 0 1px red;
    }
    .top:before {
      content: '';
      position: absolute;
      left: 4px;
      bottom: 4px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: linear-gradient(transparent 50%, #f36e3e 50%);
    }
    .left .top:before {
      animation: rotate2 2s linear infinite;
    }
    .right .top:before {
      animation: rotate1 2s linear infinite;
    }
    .top:after {
      content: '';
      position: absolute;
      top: 35px;
      left: 12px;
      width: 6px;
      height: 13px;
      background: red;
      box-shadow: 0 0 1px red;
    }
    .left {
      display: inline-block;
      margin-right: 10px;
      animation: rotate1 2s cubic-bezier(0.39, 1.52, 0.46, 0.92) infinite;
    }
    .right {
      display: inline-block;
      animation: rotate2 2s cubic-bezier(0.39, 1.52, 0.46, 0.92) infinite;
    }
    @keyframes rotate1 {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(22deg);
      }
    }
    @keyframes rotate2 {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(-22deg);
      }
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 70px;
      height: 25px;
      position: relative;
      opacity: 0;
      animation: 2s fadeInUp infinite linear 2s;
    }
    li {
      width: 6px;
      height: 15px;
      background: red;
      position: absolute;
      box-shadow: 0 0 1px red;
      transform-origin: bottom;
    }
    li:nth-child(1) {
      left: 26px;
      bottom: 5px;
      transform: rotate(-35deg);
    }
    li:nth-child(2) {
      left: 34px;
      bottom: 8px;
    }
    li:nth-child(3) {
      left: 42px;
      bottom: 5px;
      transform: rotate(35deg);
    }
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: scaleY(1);
      }

      33% {
        opacity: 1;
        transform: scaleY(1.4);
      }
      64% {
        opacity: 0.1;
        transform: scaleY(1);
      }
      100% {
        opacity: 0;
        transform: scaleY(0.3);
      }
    }
  }
}
</style>