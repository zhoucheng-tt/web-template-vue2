<!--
 * @Description: 加载动画
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-11-29 14:27:24
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="lineOne">
      <el-row class="item">
        <div class="firstLoading"></div>
      </el-row>
      <el-row class="item">
        <div class="secondLoading"></div>
      </el-row>
      <el-row class="item">
        <div class="forthLoading">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </el-row>
    </el-row>
    <el-row class="lineTwo">
      <el-row class="item">
        <div class='thirdLoading'></div>
      </el-row>
      <el-row class="item">
        <div class="fifthLoading">
          <span>努力加载中.....</span>
        </div>
      </el-row>
      <el-row class="item">
      </el-row>
    </el-row>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
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
  .lineOne {
    width: 100%;
    height: 32%;
    display: flex;
    .item {
      width: 32%;
      height: 100%;
      margin-left: 1%;
      margin-top: 1%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      .firstLoading {
        font-size: 20px;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        text-indent: -9999em;
        animation: first-load-effect 1s infinite linear;
      }
      @keyframes first-load-effect {
        0% {
          box-shadow: 0 0.2em #4158d0, /*上*/ 2em -2em 0 0 #4158d0,
            /*右上*/ 3em 0 0 -0.5em #4158d0, /*右*/ 2em 2em 0 -0.5em #4158d0,
            /*右下*/ 0 3em 0 -0.5em #4158d0, /*下*/ -2em 2em 0 -0.5em #4158d0,
            /*左下*/ -3em 0 0 -0.5em #4158d0, /*左*/ -2em -2em 0 0 #4158d0; /*左上*/
        }
        12.5% {
          box-shadow: 0 -3em 0 0 #4158d0, 2em -2em 0 0.2em #4158d0,
            3em 0 0 0 #4158d0, 2em 2em 0 -0.5em #4158d0, 0 3em 0 -0.5em #4158d0,
            -2em 2em 0 -0.5em #4158d0, -3em 0 0 -0.5em #4158d0,
            -2em -2em 0 -0.5em #4158d0;
        }
        25% {
          box-shadow: 0 -3em 0 -0.5em #4158d0, 2em -2em 0 0 #4158d0,
            3em 0 0 0.2em #4158d0, 2em 2em 0 0 #4158d0, 0 3em 0 -0.5em #4158d0,
            -2em 2em 0 -0.5em #4158d0, -3em 0 0 -0.5em #4158d0,
            -2em -2em 0 -0.5em #4158d0;
        }
        37.5% {
          box-shadow: 0 -3em 0 -0.5em #4158d0, 2em -2em 0 -0.5em #4158d0,
            3em 0 0 0 #4158d0, 2em 2em 0 0.2em #4158d0, 0 3em 0 0 #4158d0,
            -2em 2em 0 -0.5em #4158d0, -3em 0 0 -0.5em #4158d0,
            -2em -2em 0 -0.5em #4158d0;
        }
        50% {
          box-shadow: 0 -3em 0 -0.5em #4158d0, 2em -2em 0 -0.5em #4158d0,
            3em 0 0 -0.5em #4158d0, 2em 2em 0 0 #4158d0, 0 3em 0 0.2em #4158d0,
            -2em 2em 0 0 #4158d0, -3em 0 0 -0.5em #4158d0,
            -2em -2em 0 -0.5em #4158d0;
        }
        62.5% {
          box-shadow: 0 -3em 0 -0.5em #4158d0, 2em -2em 0 -0.5em #4158d0,
            3em 0 0 -0.5em #4158d0, 2em 2em 0 -0.5em #4158d0, 0 3em 0 0 #4158d0,
            -2em 2em 0 0.2em #4158d0, -3em 0 0 0 #4158d0,
            -2em -2em 0 -0.5em #4158d0;
        }
        75% {
          box-shadow: 0 -3em 0 -0.5em #4158d0, 2em -2em 0 -0.5em #4158d0,
            3em 0 0 -0.5em #4158d0, 2em 2em 0 -0.5em #4158d0,
            0 3em 0 -0.5em #4158d0, -2em 2em 0 0 #4158d0, -3em 0 0 0.2em #4158d0,
            -2em -2em 0 0 #4158d0;
        }
        87.5% {
          box-shadow: 0 -3em 0 0 #4158d0, 2em -2em 0 -0.5em #4158d0,
            3em 0 0 -0.5em #4158d0, 2em 2em 0 -0.5em #4158d0,
            0 3em 0 -0.5em #4158d0, -2em 2em 0 0 #4158d0, -3em 0 0 0 #4158d0,
            -2em -2em 0 0.2em #4158d0;
        }
        100% {
          box-shadow: 0 -3em 0 0.2em #4158d0, 2em -2em 0 0 #4158d0,
            3em 0 0 -0.5em #4158d0, 2em 2em 0 -0.5em #4158d0,
            0 3em 0 -0.5em #4158d0, -2em 2em 0 -0.5em #4158d0,
            -3em 0 0 -0.5em #4158d0, -2em -2em 0 0 #4158d0;
        }
      }
      .secondLoading {
        width: 1em;
        height: 1em;
        border-radius: 50%;
        position: relative;
        font-size: 20px;
        animation: second-load-effect 1s infinite linear;
      }
      @keyframes second-load-effect {
        0% {
          box-shadow: -3em 2em 0 0.5em #4158d0, 0 2em 0 0 #4158d0,
            3em 2em 0 -0.5em #4158d0;
        }
        25% {
          box-shadow: -3em 2em 0 0 #4158d0, 0 2em 0 -0.5em #4158d0,
            3em 2em 0 0 #4158d0;
        }
        50% {
          box-shadow: -3em 2em 0 -0.5em #4158d0, 0 2em 0 0 #4158d0,
            3em 2em 0 0.5em #4158d0;
        }
        75% {
          box-shadow: -3em 2em 0 0 #4158d0, 0 2em 0 0.5em #4158d0,
            3em 2em 0 0 #4158d0;
        }
        100% {
          box-shadow: -3em 2em 0 0.5em #4158d0, 0 2em 0 0 #4158d0,
            3em 2em 0 -0.5em #4158d0;
        }
      }
      .forthLoading i {
        display: inline-block;
        width: 8px;
        height: 80px;
        border-radius: 2px;
        margin: 0 5px;
        background-color: #4158d0;
      }
      .forthLoading i:nth-child(1) {
        -webkit-animation: forthLoading 1s linear 0.1s infinite;
        -moz-animation: forthLoading 1s linear 0.1s infinite;
        -o-animation: forthLoading 1s linear 0.1s infinite;
        animation: forthLoading 1s linear 0.1s infinite;
      }
      .forthLoading i:nth-child(2) {
        -webkit-animation: forthLoading 1s linear 0.2s infinite;
        -moz-animation: forthLoading 1s linear 0.2s infinite;
        -o-animation: forthLoading 1s linear 0.2s infinite;
        animation: forthLoading 1s linear 0.2s infinite;
      }
      .forthLoading i:nth-child(3) {
        -webkit-animation: forthLoading 1s linear 0.3s infinite;
        -moz-animation: forthLoading 1s linear 0.3s infinite;
        -o-animation: forthLoading 1s linear 0.3s infinite;
        animation: forthLoading 1s linear 0.3s infinite;
      }
      .forthLoading i:nth-child(4) {
        -webkit-animation: forthLoading 1s linear 0.4s infinite;
        -moz-animation: forthLoading 1s linear 0.4s infinite;
        -o-animation: forthLoading 1s linear 0.4s infinite;
        animation: forthLoading 1s linear 0.4s infinite;
      }
      .forthLoading i:nth-child(5) {
        -webkit-animation: forthLoading 1s linear 0.5s infinite;
        -moz-animation: forthLoading 1s linear 0.5s infinite;
        -o-animation: forthLoading 1s linear 0.5s infinite;
        animation: forthLoading 1s linear 0.5s infinite;
      }
      @-webkit-keyframes forthLoading {
        0% {
          transform: scaleY(1);
        }
        50% {
          transform: scaleY(0.4);
        }
        100% {
          transform: scaleY(1);
        }
      }
      @-moz-keyframes forthLoading {
        0% {
          transform: scaleY(1);
        }
        50% {
          transform: scaleY(0.4);
        }
        100% {
          transform: scaleY(1);
        }
      }
      @-o-keyframes forthLoading {
        0% {
          transform: scaleY(1);
        }
        50% {
          transform: scaleY(0.4);
        }
        100% {
          transform: scaleY(1);
        }
      }
      @keyframes forthLoading {
        0% {
          transform: scaleY(1);
        }
        50% {
          transform: scaleY(0.4);
        }
        100% {
          transform: scaleY(1);
        }
      }
    }
  }
  .lineTwo {
    width: 100%;
    height: 32%;
    display: flex;
    margin-top: 1%;
    .item {
      width: 32%;
      height: 100%;
      margin-left: 1%;
      margin-top: 1%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      .thirdLoading {
        width: 100%;
        height: 100%;
      }
      .thirdLoading.fixed {
        position: fixed;
      }
      .thirdLoading:before {
        content: '';
        width: 150px;
        height: 150px;
        background-color: rgba(0, 0, 0, 0);
        opacity: 0.9;
        margin: 0 auto;
        position: absolute;
        left: 35%;
        top: 25%;
        border-radius: 50%;
        border: 5px solid #4158d0;
        border-right: 5px solid rgba(0, 0, 0, 0);
        border-left: 5px solid rgba(0, 0, 0, 0);
        box-shadow: 0 0 35px #4158d0;
        -moz-animation: spinPulse 1s infinite ease-in-out;
        -webkit-animation: spinPulse 1s infinite linear;
      }
      .thirdLoading:after {
        content: '';
        width: 80px;
        height: 80px;
        margin: 0 auto;
        position: absolute;
        left: 41.5%;
        top: 37%;
        background-color: rgba(0, 0, 0, 0);
        opacity: 0.9;
        border: 5px solid #4158d0;
        border-radius: 50%;
        border-left: 5px solid rgba(0, 0, 0, 0);
        border-right: 5px solid rgba(0, 0, 0, 0);
        box-shadow: 0 0 15px #4158d0;
        -moz-animation: spinoffPulse 1s infinite linear;
        -webkit-animation: spinoffPulse 1s infinite linear;
      }
      @keyframes spinPulse {
        0% {
          -webkit-transform: rotate(160deg);
          opacity: 0;
          box-shadow: 0 0 1px #4158d0;
        }
        50% {
          -webkit-transform: rotate(145deg);
          opacity: 1;
        }
        100% {
          -webkit-transform: rotate(-320deg);
          opacity: 0;
        }
      }
      @keyframes spinoffPulse {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @-moz-keyframes spinPulse {
        0% {
          -moz-transform: rotate(160deg);
          opacity: 0;
          box-shadow: 0 0 1px #4158d0;
        }
        50% {
          -moz-transform: rotate(145deg);
          opacity: 1;
        }
        100% {
          -moz-transform: rotate(-320deg);
          opacity: 0;
        }
      }
      @-moz-keyframes spinoffPulse {
        0% {
          -moz-transform: rotate(0deg);
        }
        100% {
          -moz-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spinPulse {
        0% {
          -webkit-transform: rotate(160deg);
          opacity: 0;
          box-shadow: 0 0 1px #4158d0;
        }
        50% {
          -webkit-transform: rotate(145deg);
          opacity: 1;
        }
        100% {
          -webkit-transform: rotate(-320deg);
          opacity: 0;
        }
      }
      @-webkit-keyframes spinoffPulse {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      .fifthLoading {
        width: 200px;
        height: 200px;
        box-sizing: border-box;
        border-radius: 50%;
        border-top: 10px solid #4158d0;
        position: relative;
        animation: fifthLoadingIn 2s linear infinite;
      }
      .fifthLoading::before,
      .fifthLoading::after {
        content: '';
        width: 200px;
        height: 200px;
        position: absolute;
        left: 0;
        top: -10px;
        box-sizing: border-box;
        border-radius: 50%;
      }
      .fifthLoading::before {
        border-top: 10px solid #fbc2eb;
        transform: rotate(120deg);
      }
      .fifthLoading::after {
        border-top: 10px solid #a6c1ee;
        transform: rotate(240deg);
      }
      .fifthLoading span {
        position: absolute;
        width: 200px;
        height: 200px;
        text-align: center;
        line-height: 200px;
        animation: fifthLoadingOut 2s linear infinite;
      }
      @keyframes fifthLoadingIn {
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes fifthLoadingOut {
        to {
          transform: rotate(-360deg);
        }
      }
    }
  }
}
</style>