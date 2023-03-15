<!--
 * @Description: hlsM3u8
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-04-01 15:46:17
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <video-player v-if="streamType=='hlsM3u8'"
                  class="video-player vjs-custom-skin"
                  :playsinline="true"
                  :options="hlsM3u8Options">
    </video-player>
  </div>
</template>

<script>
// 使用m3u8 在index.html使用 "//vjs.zencdn.net/7.3.0/video.min.js"
import { videoPlayer } from 'vue-video-player';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    videoPlayer
  },
  props: {
    // 流类型  hls m3u8 
    streamType: {
      type: String
    },
    // 流地址
    streamVideoUrl: {
      type: String
    }
  },
  data () {
    //这里存放数据
    return {
      // 流配制
      hlsM3u8Options: {
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "application/x-mpegURL",
          src: "" //你的m3u8地址（必填）
        }],
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        // poster: "poster.jpg", //你的封面地址
        // controlBar: {
        //   timeDivider: true,
        //   durationDisplay: true,
        //   remainingTimeDisplay: false,
        //   fullscreenToggle: true  //全屏按钮
        // }
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
  //方法集合
  methods: {

  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.mainbody {
  width: 100%;
  height: 100%;
  .video-player {
    width: 100%;
    height: 100%;
  }
}
</style>