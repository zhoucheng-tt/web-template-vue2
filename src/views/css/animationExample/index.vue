<!--
 * @Description: 动画样例
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-10-10 15:47:29
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="lineOne">
      <el-row class="item">
        <div class="lineOneLeft"></div>
      </el-row>
      <el-row class="item">
        <div class="lineOneMiddle"></div>
      </el-row>
      <el-row class="item"
              style="background-color:black;">
        <div class="lineOneRight">
          <div class="lineOneRight-in"></div>
        </div>
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
      .lineOneLeft {
        width: 100%;
        height: 100%;
        background: red;
        animation: lineOneLeftAmi 20s infinite;
        -webkit-animation: lineOneLeftAmi 5s infinite;
      }
      @keyframes lineOneLeftAmi {
        0% {
          background-color: red;
        }
        50% {
          background-color: pink;
        }
        100% {
          background-color: red;
        }
      }
      @-webkit-keyframes lineOneLeftAmi {
        0% {
          background-color: red;
        }
        50% {
          background-color: pinkred;
        }
        100% {
          background-color: red;
        }
      }

      .lineOneMiddle {
        width: 100px;
        height: 100px;
        background: paleturquoise;
        position: absolute;
        animation: lineOneMiddleAmi 5s infinite;
      }
      @keyframes lineOneMiddleAmi {
        0% {
          background: pink;
          left: 0px;
          top: 0px;
        }
        25% {
          background: lightpink;
          left: calc(100% - 100px);
          top: 0;
        }
        50% {
          background: hotpink;
          left: calc(100% - 100px);
          top: calc(100% - 100px);
        }
        75% {
          background: deeppink;
          left: 0px;
          top: calc(100% - 100px);
        }
        100% {
          background: lightcoral;
          left: 0px;
          top: 0px;
        }
      }

      .lineOneRight {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        position: absolute;
        z-index: 2;
        left: 140px;
        -webkit-animation: lineOneRightAmi 5s linear infinite;
      }
      @keyframes lineOneRightAmi {
        0% {
          transform: rotate(0deg);
          box-shadow: 0px 0px 10px #fff;
        }
        50% {
          transform: rotate(180deg);
          box-shadow: 0px 0px 45px #fff;
        }
        100% {
          transform: rotate(360deg);

          box-shadow: 0px 0px 10px #fff;
        }
      }
      @-webkit-keyframes lineOneRightAmi {
        0% {
          transform: rotate(0deg);
          box-shadow: 0px 0px 10px #fff;
        }
        50% {
          transform: rotate(180deg);
          box-shadow: 0px 0px 45px #fff;
        }
        100% {
          transform: rotate(360deg);

          box-shadow: 0px 0px 10px #fff;
        }
      }
      .lineOneRight-in {
        width: 10px;
        height: 10px;
        border: 4px solid #ddd;
        border-radius: 20px;
        left: 45px;
        top: 5px;
        position: absolute;
        z-index: 2;
        overflow: hidden;
        background-color: #ddd;
        box-shadow: 0px 0px 5px #fff;
      }
    }
  }
}
</style>