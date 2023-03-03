<!--
 * @Description: 视频流组件
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-04-01 15:46:17
 * @LastEditors: zhoucheng
-->
<template>
  <div class='dt-mainbody'>
    <!-- websocket -->
    <canvas v-if="streamType=='websocket'"
            id="websocket-canvas"></canvas>
    <!-- hls -->
    <video-player v-if="streamType=='m3u8'"
                  class="video-player vjs-custom-skin"
                  style="width:100%;height:100%"
                  ref="hlsStream-video"
                  :playsinline="true"
                  :options="hlsStreamVideoOptions">
    </video-player>
    <!-- flv -->
    <video ref="flvVideoElement"
           id="flv-video"
           controls
           autoplay
           muted
           style="width:100%;height:100%"></video>
  </div>
</template>

<script>
// 使用m3u8 在index.html使用 "//vjs.zencdn.net/7.3.0/video.min.js"
import { videoPlayer } from 'vue-video-player';
import flvjs from 'flv.js'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    videoPlayer
  },
  props: {
    // 流类型  websocket m3u8 flvRtmp
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
      // hls流配制
      hlsStreamVideoOptions: {
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
      flvPlayer: null
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    streamVideoUrl () {
      // 使用websocket转流
      if (this.streamType == 'websocket') {
        this.queryWebSocketStream()
      }
      // 使用flv播放视频rtmp
      else if (this.streamType == 'flvRtmp') {
        this.destoryVideo(this.flvPlayer)
        this.createVideo()
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    // 使用flv播放视频rtmp
    this.createVideo()
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
    // 使用websocket转流
    queryWebSocketStream () {
      let canvas = document.getElementById('websocket-canvas');
      new window.JSMpeg.Player(this.streamVideoUrl, { canvas: canvas });
    },
    // 使用flv播放视频rtmp
    createVideo () {
      this.flvPlayer = null
      let that = this
      if (flvjs.isSupported()) {
        var videoElement = document.getElementById("flv-video");
        flvjs.LoggingControl.enableError = false
        flvjs.LoggingControl.enableVerbose = false
        this.flvPlayer = flvjs.createPlayer(
          {
            type: "flv",
            cors: false,
            isLive: true,
            hasAudio: false,
            url: this.streamVideoUrl
          },
          {
            enableWorker: false, //不启用分离线程
            enableStashBuffer: false, //关闭IO隐藏缓冲区
            reuseRedirectedURL: true, //重用301/302重定向url，用于随后的请求，如查找、重新连接等。
            autoCleanupSourceBuffer: true //自动清除缓存
          },
        );
        this.flvPlayer.attachMediaElement(videoElement);
        if (that.flvPlayer) {
          if (that.streamVideoUrl !== "" && that.streamVideoUrl !== null) {
            that.flvPlayer.load();
          }
        }
      }
      this.flvPlayer.on(flvjs.Events.SCRIPTDATA_ARRIVED, () => {
        that.flvPlayer.play();
      });
      this.flvPlayer.on(flvjs.Events.LOADING_COMPLETE, () => {
        if (that.flvPlayer) {
          that.reloadVideo(that.flvPlayer);
        }
      });
      this.flvPlayer.on(flvjs.Events.ERROR, () => {
        // 有流的时候再正常放开！！！
        // if (that.flvPlayer) {
        //   setTimeout(() => that.createVideo(), 1000)
        // }
      });
    },
    reloadVideo (flvPlayer) {
      this.destoryVideo(flvPlayer);
      this.createVideo()
    },
    destoryVideo (flvPlayer) {
      flvPlayer.pause();
      flvPlayer.unload();
      flvPlayer.detachMediaElement();
      flvPlayer.destroy();
      flvPlayer = null;
    },
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.dt-mainbody {
  width: 100%;
  height: 100%;
  #websocket-canvas {
    width: 100%;
    height: 100%;
  }
}
</style>