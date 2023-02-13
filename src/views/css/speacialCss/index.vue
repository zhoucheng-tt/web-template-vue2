<!--
 * @Description: 特殊样式
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-11-20 17:49:36
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="lineOne">
      <el-row class="item">
        <span class="itemTitle">棱形横幅</span>
        <div class="lineOneLeft">
          <div class="lineOneLeftItem"
               v-for="(item,index) in lineOneLeftList"
               :key="index">
            <img :src=item.img
                 alt="">
          </div>
        </div>
      </el-row>
      <el-row class="item">
        <span class="itemTitle">毛玻璃</span>
        <div class="lineOneMiddle">
          <img :src="require('@/assets/css/pic.jpeg')"
               alt="">
          <div class="lineOneMiddle-div"></div>
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
      lineOneLeftList: [
        { id: 1, img: require("@/assets/css/pic.jpeg") },
        { id: 2, img: require("@/assets/css/pic.jpeg") },
        { id: 3, img: require("@/assets/css/pic.jpeg") },
      ]
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
      position: relative;
      .itemTitle {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .lineOneLeft {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      .lineOneLeftItem {
        clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
        margin: 0 -15px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .lineOneLeftItem:nth-child(1) {
        clip-path: polygon(0 0, 75% 0, 100% 100%, 0% 100%);
      }
      .lineOneLeftItem:nth-last-child(1) {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);
      }
    }
    .lineOneMiddle {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border: 1px solid #000;
      img {
        width: 100%;
        height: 100%;
      }
      .lineOneMiddle-div {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        z-index: 9999;
        /* 主要内容 */
        background: rgba(0, 0, 0, 0.5);
        /* 模糊大小就是靠的blur这个函数中的数值大小 */
        backdrop-filter: blur(10px);
      }
    }
  }
}
</style>