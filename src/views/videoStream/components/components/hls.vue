<!--
 * @Description: hls
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-03-14 10:23:53
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <video ref="videoElement"
           id="videoElement"
           controls
           muted></video>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import hlsjs from "hls.js";
export default {
  props: {
    // 流地址
    streamVideoUrl: {
      type: String
    },
  },
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      hlsjs: null
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    streamVideoUrl () {
      this.show();
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.show();
  },
  // 方法集合
  methods: {
    //播放
    show () {
      this.video = this.$refs.videoElement; //定义挂载点
      if (hlsjs.isSupported()) {
        this.hlsjs = new hlsjs();
        this.hlsjs.loadSource(this.streamVideoUrl);//设置播放路径
        this.hlsjs.attachMedia(this.video);//解析到video标签上
        this.hlsjs.on(hlsjs.Events.MANIFEST_PARSED, () => {
          this.video.play();
          // console.log("加载成功");
        });
        this.hlsjs.on(hlsjs.Events.ERROR, () => {
          // console.log(event, data);
          // 监听出错事件
          // console.log("加载失败");
        });
      } else {
        this.$message.error("不支持的格式");
        return;
      }
    },
    //停止播放
    closeVideo () {
      if (this.hlsjs) {
        this.$refs.videoElement.pause();
        this.video.pause();
        this.hlsjs.destroy();
        this.hlsjs = null;
        // this.$emit("closeVideo");
      }
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
  #videoElement {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>