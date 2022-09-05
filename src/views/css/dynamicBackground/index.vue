<!--
 * @Description: css实现动态文字背景图
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-11-18 10:43:34
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="container">
      <div class="scrollTxt">
        <p>人间会一如平常</p>
        <p>好人全都死了</p>
        <p>蟑螂们称霸地球</p>
        <p>机器当了主人公</p>
        <p>他比我纯情太多</p>
        <p>晴天阴天雨天夹着风</p>
        <p>天气多变得像新闻般看不懂</p>
        <p>头发吹不干人发了懵</p>
        <p>who are you looking for</p>
        <p>so dance for now</p>
        <p>请别让世界 bother you</p>
        <p>hold me now</p>
        <p>就算再错也follow you</p>
        <p>怕死的人都盼有个天堂</p>
        <p>那快笑吧</p>
        <p>我们早没救啦</p>
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
  .container {
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    perspective: 500px;
    background: #a6c1ee;
  }
  .scrollTxt {
    position: absolute;
    bottom: -5vw;
    right: 0;
    animation-name: scroll;
    animation-duration: 50s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .scrollTxt p {
    color: red;
    opacity: 0.3;
    font-size: 6vw;
    line-height: 0;
    text-align: center;
  }
  @keyframes scroll {
    from {
      transform: rotateX(20deg) rotateZ(30deg) translateY(66vw);
    }
    to {
      transform: rotateX(20deg) rotateZ(30deg);
    }
  }
}
</style>