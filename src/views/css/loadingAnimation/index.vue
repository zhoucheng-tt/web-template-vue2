<!--
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-11-29 14:27:24
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="lineOne">
      <el-row class="item">
        <section>
          <div class="firstLonding">
            <span style="--i:1"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
            <span style="--i:4;"></span>
            <span style="--i:5;"></span>
            <span style="--i:6;"></span>
            <span style="--i:7;"></span>
            <span style="--i:8;"></span>
            <span style="--i:9;"></span>
            <span style="--i:10;"></span>
            <span style="--i:11;"></span>
            <span style="--i:12;"></span>
            <span style="--i:13;"></span>
            <span style="--i:14;"></span>
            <span style="--i:15;"></span>
            <span style="--i:16;"></span>
            <span style="--i:17;"></span>
            <span style="--i:18;"></span>
            <span style="--i:19;"></span>
            <span style="--i:20;"></span>
          </div>
        </section>
      </el-row>
      <el-row class="item">
        <div class="secondLoading"></div>
      </el-row>
      <el-row class="item">
        <div class="thirdLoading"></div>
      </el-row>
    </el-row>
    <el-row class="lineTwo">
      <el-row class="item">
        <div class="forthLoading">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </el-row>
      <el-row class="item">
        <div class="fifthLoading"><i></i></div>
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
      section {
        display: flex;
        align-items: center;
        justify-content: center;
        animation: animateBackground 10s linear infinite;
      }
      @keyframes animateBackground {
        0% {
          filter: hue-rotate(0deg);
        }
        100% {
          filter: hue-rotate(360deg);
        }
      }
      section .firstLonding {
        position: relative;
        width: 120px;
        height: 120px;
      }
      section .firstLonding span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: rotate(calc(18deg * var(--i)));
      }
      section .firstLonding span::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        background: #00ff0a;
        border-radius: 50%;
        box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a,
          0 0 80px #00ff0a, 0 0 100px #00ff0a;
        animation: animate 2s linear infinite;
        animation-delay: calc(0.1s * var(--i));
      }
      @keyframes animate {
        0% {
          transform: scale(1);
        }
        80%,
        100% {
          transform: scale(0);
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
      .thirdLoading {
        font-size: 20px;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        text-indent: -9999em;
        animation: third-load-effect 1s infinite linear;
      }
      @keyframes third-load-effect {
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
      .forthLoading i {
        display: inline-block;
        width: 4px;
        height: 35px;
        border-radius: 2px;
        margin: 0 2px;
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
      .fifthLoading {
        width: 35px;
        height: 35px;
        position: relative;
      }
      .fifthLoading i {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: linear-gradient(
          transparent 0%,
          transparent 70%,
          #4158d0 30%,
          #4158d0 100%
        );
        background: -webkit-linear-gradient(
          transparent 0%,
          transparent 70%,
          #4158d0 30%,
          #4158d0 100%
        );
        background: -moz-linear-gradient(
          transparent 0%,
          transparent 70%,
          #4158d0 30%,
          #4158d0 100%
        );
        background: -ms-linear-gradient(
          transparent 0%,
          transparent 70%,
          #4158d0 30%,
          #4158d0 100%
        );
        background: -o-linear-gradient(
          transparent 0%,
          transparent 70%,
          #4158d0 30%,
          #4158d0 100%
        );
        -webkit-animation: fifthLoading 0.5s linear infinite;
        -moz-animation: fifthLoading 0.5s linear infinite;
        -o-animation: fifthLoading 0.5s linear infinite;
        animation: fifthLoading 0.5s linear infinite;
      }
      @-webkit-keyframes fifthLoading {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(180deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @-moz-keyframes fifthLoading {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(180deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @-o-keyframes fifthLoading {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(180deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @keyframes fifthLoading {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(180deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>