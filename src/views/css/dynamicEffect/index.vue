<!--
 * @Description: keyframes 动效
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-10-10 10:09:50
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="lineone">
      <el-row class="topleftImg">
        <img :src="dynamiUp"
             alt="">
      </el-row>
      <el-row class="toprightImg">
        <div class="imagelogotop"></div>
      </el-row>
    </el-row>
    <el-row class="linetwo">
      <el-row class="bottomleftImg">
        <div class="imagelogobottom"></div>
      </el-row>
      <el-row class="bottomrightImg">
        <img class="rotation img"
             :src="dynamiUp" />
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
      dynamiUp: require("@/assets/css/pic.jpeg")
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
  .lineone {
    width: 100%;
    height: 50%;
    display: flex;
    .topleftImg {
      width: 48%;
      height: 98%;
      img {
        width: 100%;
        height: 100%;
        animation: 5s wordsLoop linear infinite normal;
      }
      @keyframes wordsLoop {
        0% {
          transform: translateX(0%);
          -webkit-transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
          -webkit-transform: translateX(-100%);
        }
      }
      @-webkit-keyframes wordsLoop {
        0% {
          transform: translateX(0%);
          -webkit-transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
          -webkit-transform: translateX(-100%);
        }
      }
    }
    .toprightImg {
      width: 48%;
      height: 100%;
      margin-left: 2%;
      @keyframes mylogo {
        from {
          top: 10px;
        }
        to {
          top: -10px;
        }
      }
      @-moz-keyframes mylogo /* Firefox */ {
        from {
          top: 10px;
        }
        to {
          top: -10px;
        }
      }
      @-webkit-keyframes mylogo /* Safari 和 Chrome */ {
        from {
          top: 10px;
        }
        to {
          top: -10px;
        }
      }
      @-o-keyframes mylogo /* Opera */ {
        from {
          top: 10px;
        }
        to {
          top: -10px;
        }
      }
      .imagelogotop {
        width: 100%;
        height: 90%;
        background: url('../../../assets/css/pic.jpeg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin: 20px auto;
        float: left;
        position: relative; // 不加就不动了
        animation: mylogo 1s linear 0s infinite alternate;
        /* Firefox: */
        -moz-animation: mylogo 1s linear 0s infinite alternate;
        /* Safari 和 Chrome: */
        -webkit-animation: mylogo 1s linear 0s infinite alternate;
        /* Opera: */
        -o-animation: mylogo 1s linear 0s infinite alternate;
      }
    }
  }
  .linetwo {
    width: 100%;
    height: 50%;
    display: flex;
    .bottomleftImg {
      width: 45%;
      height: 98%;
      margin-left: 2%;
      @keyframes mylogobottom {
        from {
          left: 20px;
        }
        to {
          left: -20px;
        }
      }
      @-moz-keyframes mylogobottom /* Firefox */ {
        from {
          left: 20px;
        }
        to {
          left: -20px;
        }
      }
      @-webkit-keyframes mylogobottom /* Safari 和 Chrome */ {
        from {
          left: 20px;
        }
        to {
          left: -20px;
        }
      }
      @-o-keyframes mylogobottom /* Opera */ {
        from {
          left: 20px;
        }
        to {
          left: -20px;
        }
      }
      .imagelogobottom {
        width: 100%;
        height: 100%;
        background: url('../../../assets/css/pic.jpeg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        float: left;
        position: relative; // 不加就不动了
        animation: mylogobottom 1s linear 0s infinite alternate;
        /* Firefox: */
        -moz-animation: mylogobottom 1s linear 0s infinite alternate;
        /* Safari 和 Chrome: */
        -webkit-animation: mylogobottom 1s linear 0s infinite alternate;
        /* Opera: */
        -o-animation: mylogobottom 1s linear 0s infinite alternate;
      }
    }
    .bottomrightImg {
      width: 28%;
      height: 80%;
      margin-left: 12%;
      margin-top: 3%;
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      @keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(180deg);
        }
      }
      @-webkit-keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(180deg);
        }
      }
      .rotation {
        -webkit-transform: rotate(360deg);
        animation: rotation 5s linear infinite;
        -moz-animation: rotation 5s linear infinite;
        -webkit-animation: rotation 5s linear infinite;
        -o-animation: rotation 5s linear infinite;
      }
      .img {
        width: 80%;
        height: 100%;
        border-radius: 100% 100%;
      }
    }
  }
}
</style>