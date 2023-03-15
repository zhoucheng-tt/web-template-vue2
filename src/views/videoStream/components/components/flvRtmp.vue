<!--
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-03-15 22:18:52
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <video ref="flvVideoElement"
           id="flv-video"
           controls
           autoplay
           muted></video>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import flvjs from 'flv.js'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    // 流类型  flv rtmp
    streamType: {
      type: String
    },
    // 流地址
    streamVideoUrl: {
      type: String
    }
  },
  data () {
    // 这里存放数据
    return {
      flvPlayer: null
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    // 使用flv播放视频rtmp
    streamVideoUrl () {
      if (this.streamType == 'flvRtmp') {
        this.destoryVideo(this.flvPlayer)
        this.createVideo()
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    // 使用flv播放视频rtmp
    this.createVideo()
  },
  // 方法集合
  methods: {
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
  #flv-video {
    width: 100%;
    height: 100%;
  }
}
</style>