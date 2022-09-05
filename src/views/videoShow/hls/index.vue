<!--
 * @Description: 视频流 hls
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-04-06 09:14:01
 * @LastEditors: zhoucheng
-->
<template>
  <div class="container">
    <StreamVideo ref="hlsStreamVideo"
                 :streamType="streamType"></StreamVideo>
  </div>
</template>

<script>
import StreamVideo from '@/components/video/StreamVideo'
export default {
  data () {
    return {
      streamType: "m3u8",
      hls: "http://123.207.189.27:8005/hls/test_555.m3u8"
    }
  },
  components: {
    StreamVideo
  },
  methods: {
  },
  mounted () {
    this.$refs.hlsStreamVideo.hlsStreamVideoOptions.sources[0].src = this.hls
  },
  computed: {}
}
</script>

<style type="scss" scoped>
.container {
  background-color: #efefef;
  min-height: 100%;
}
</style>