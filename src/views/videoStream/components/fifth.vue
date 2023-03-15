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
      <videoPlayer class="vjs-custom-skin videoPlayer"
                   :options="playerOptions"></videoPlayer>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { videoPlayer } from "vue-video-player";
import 'video.js/dist/video-js.css'
import "videojs-flash";
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { videoPlayer },
  props: {
    contentName () {
      String
    }
  },
  data () {
    // 这里存放数据
    return {
      playerOptions: {
        height: "230",
        sources: [
          {
            type: "rtmp/mp4",
            // 测试流 rtmp://xyrtmp.ys7.com:1935/v3/openlive/33010104992747809152:33011099991327627579_1_2?expire=1709697057&id=554994739615641600&t=b15215e4bc34e3c66397653f412dc531c33187a0232fef44549dda26e3016acc&ev=100&devProto=gb28181
            src: "",
          },
        ],
        techOrder: ["flash"],
        autoplay: false,
        controls: true,
      },
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
    .vjs-custom-skin {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>