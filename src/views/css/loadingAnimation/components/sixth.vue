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
      <div class="index_loading">
        <div id="load">
          <div>g</div>
          <div>n</div>
          <div>i</div>
          <div>d</div>
          <div>a</div>
          <div>o</div>
          <div>l</div>
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
    let loadi = document.getElementsByClassName("index_loading")
    // console.log(loading_index.innerText)
    for (let i = 0; i < loadi.length; i++) {
      loadi[i].style.display = "none"
    }
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

    #load {
      position: absolute;
      font-size: 50px;
      width: 100%;
      height: 36px;
      margin-left: -300px;
      overflow: visible;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: default;
    }

    #load div {
      position: absolute;
      width: 20px;
      height: 36px;
      opacity: 0;
      font-family: Helvetica, Arial, sans-serif;
      animation: move 2s linear infinite;
      -o-animation: move 2s linear infinite;
      -moz-animation: move 2s linear infinite;
      -webkit-animation: move 2s linear infinite;
      transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      color: #35c4f0;
    }

    #load div:nth-child(2) {
      animation-delay: 0.2s;
      -o-animation-delay: 0.2s;
      -moz-animation-delay: 0.2s;
      -webkit-animation-delay: 0.2s;
    }

    #load div:nth-child(3) {
      animation-delay: 0.4s;
      -o-animation-delay: 0.4s;
      -webkit-animation-delay: 0.4s;
      -webkit-animation-delay: 0.4s;
    }

    #load div:nth-child(4) {
      animation-delay: 0.6s;
      -o-animation-delay: 0.6s;
      -moz-animation-delay: 0.6s;
      -webkit-animation-delay: 0.6s;
    }

    #load div:nth-child(5) {
      animation-delay: 0.8s;
      -o-animation-delay: 0.8s;
      -moz-animation-delay: 0.8s;
      -webkit-animation-delay: 0.8s;
    }

    #load div:nth-child(6) {
      animation-delay: 1s;
      -o-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -webkit-animation-delay: 1s;
    }

    #load div:nth-child(7) {
      animation-delay: 1.1s;
      -o-animation-delay: 1.1s;
      -moz-animation-delay: 1.1s;
      -webkit-animation-delay: 1.1s;
    }

    @keyframes move {
      0% {
        left: 0;
        opacity: 0;
      }
      35% {
        left: 41%;
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        opacity: 1;
      }
      65% {
        left: 59%;
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        opacity: 1;
      }
      100% {
        left: 100%;
        -moz-transform: rotate(-180deg);
        -webkit-transform: rotate(-180deg);
        -o-transform: rotate(-180deg);
        transform: rotate(-180deg);
        opacity: 0;
      }
    }

    @-moz-keyframes move {
      0% {
        left: 0;
        opacity: 0;
      }
      35% {
        left: 41%;
        -moz-transform: rotate(0deg);
        transform: rotate(0deg);
        opacity: 1;
      }
      65% {
        left: 59%;
        -moz-transform: rotate(0deg);
        transform: rotate(0deg);
        opacity: 1;
      }
      100% {
        left: 100%;
        -moz-transform: rotate(-180deg);
        transform: rotate(-180deg);
        opacity: 0;
      }
    }

    @-webkit-keyframes move {
      0% {
        left: 0;
        opacity: 0;
      }
      35% {
        left: 41%;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        opacity: 1;
      }
      65% {
        left: 59%;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        opacity: 1;
      }
      100% {
        left: 100%;
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
        opacity: 0;
      }
    }

    @-o-keyframes move {
      0% {
        left: 0;
        opacity: 0;
      }
      35% {
        left: 41%;
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        opacity: 1;
      }
      65% {
        left: 59%;
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        opacity: 1;
      }
      100% {
        left: 100%;
        -o-transform: rotate(-180deg);
        transform: rotate(-180deg);
        opacity: 0;
      }
    }
  }
}
</style>