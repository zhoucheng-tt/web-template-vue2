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
      <div class="loading"></div>
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
    justify-content: center;
    align-items: center;

    .loading {
      width: 100%;
      height: 100%;
    }
    .loading.fixed {
      position: fixed;
    }
    .loading:before {
      content: '';
      width: 150px;
      height: 150px;
      background-color: rgba(0, 0, 0, 0);
      opacity: 0.9;
      margin: 0 auto;
      position: absolute;
      left: 35%;
      top: 27%;
      border-radius: 50%;
      border: 5px solid #4158d0;
      border-right: 5px solid rgba(0, 0, 0, 0);
      border-left: 5px solid rgba(0, 0, 0, 0);
      box-shadow: 0 0 35px #4158d0;
      -moz-animation: outKeyframes 1s infinite ease-in-out;
      -webkit-animation: outKeyframes 1s infinite linear;
    }
    .loading:after {
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
      -moz-animation: inKeyframes 1s infinite linear;
      -webkit-animation: inKeyframes 1s infinite linear;
    }
    @keyframes outKeyframes {
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
    @keyframes inKeyframes {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @-moz-keyframes outKeyframes {
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
    @-moz-keyframes inKeyframes {
      0% {
        -moz-transform: rotate(0deg);
      }
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes outKeyframes {
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
    @-webkit-keyframes inKeyframes {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
  }
}
</style>