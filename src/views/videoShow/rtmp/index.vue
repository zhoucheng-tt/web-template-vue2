<!--
 * @Description:视频流 rtmp
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-04-06 09:14:46
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <videoPlayer class="vjs-custom-skin videoPlayer"
                 :options="playerOptions"></videoPlayer>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import 'video.js/dist/video-js.css'
import { videoPlayer } from "vue-video-player";
import "videojs-flash";
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { videoPlayer },
  data () {
    // 这里存放数据
    return {
      playerOptions: {
        height: "300",
        sources: [
          {
            type: "rtmp/mp4",
            src: "rtmp://192.168.1.245:1935/live/",
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
  width: 100% height;
}
</style>