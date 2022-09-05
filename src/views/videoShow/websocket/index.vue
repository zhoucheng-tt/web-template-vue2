<!--
 * @Description: 视频流 websocket
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-04-06 09:13:47
 * @LastEditors: zhoucheng
-->
<!--  -->
<template>
  <div class='mainbody'>
    <stream-video :streamVideoUrl=streamVideoUrl></stream-video>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import StreamVideo from '@/components/video/StreamVideo'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { StreamVideo },
  data () {
    // 这里存放数据
    return {
      streamVideoUrl: ""
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
    this.queryStreamVideo()
  },
  // 方法集合
  methods: {
    // 获取视频流，需安装插件
    queryStreamVideo () {
      // let url = 'rtsp://admin:LT64027958@120.197.225.254:556/Streaming/Channels/1'
      // this.$axios.post("http://192.168.1.245:3000/stream/play", { url: url }
      // ).then(response => {
      //   let videoUrl = 'ws://192.168.1.245:3000' + response.data.data.path
      //   this.streamVideoUrl = videoUrl
      // }).catch(() => {
      //   this.$message({ message: '请联系运维人员安装插件！', type: 'warning' })
      // })
    }
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
}
</style>