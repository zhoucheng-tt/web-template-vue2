<!--
 * @Description: 上传视频
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-02-24 14:42:26
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="title">{{ contentName }} </div>
    <div class="content">
      <!-- 没图片上传 -->
      <el-upload v-show="!uploadShow"
                 class="avatar-uploader"
                 action=""
                 :http-request="upLoadImg"
                 :before-upload="beforeUpload"
                 :file-list="fileList"
                 :show-file-list="false"
                 :limit="1">
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <!-- 已经有视频 -->
      <div v-show="uploadShow"
           class="el-upload-list el-upload-list--picture-card">
        <div class="el-upload-list__item is-success">
          <video class="avatar"
                 width="100%"
                 height="100%"
                 controls="controls"
                 :src="$imgBaseUrl+ videoUrl"></video>
          <label class="el-upload-list__item-status-label">
            <i class="el-icon-upload-success el-icon-check"></i>
          </label>
          <span class="el-upload-list__item-actions">
            <span @click="videoPreviewDialog = true">
              <i class="el-icon-zoom-in"></i>
            </span>
            <span class="el-upload-list__item-delete">
              <i class="el-icon-delete"
                 @click.stop="handleRemove()"></i>
            </span>
          </span>
        </div>
      </div>
      <el-dialog title="视频预览"
                 :visible.sync="videoPreviewDialog"
                 append-to-body>
        <div style="display: flex;justify-content: center;align-items: center;">
          <video class="avatar"
                 width="400px"
                 height="400px"
                 controls="controls"
                 :src="$imgBaseUrl+ videoUrl"></video>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    contentName () {
      String
    }
  },
  data () {
    // 这里存放数据
    return {
      fileList: [],
      videoUrl: "",
      videoPreviewDialog: false
    };
  },
  // 监听属性 类似于data概念
  computed: {
    uploadShow () {
      return this.videoUrl === '' ? false : true
    }
  },
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
    // 上传之前
    beforeUpload (file) {
      const ismp4 = file.type === 'video/mp4';
      const isavi = file.type === 'video/avi';
      const isflv = file.type === 'video/flv';
      const ismov = file.type === 'video/mov';
      const isrmvb = file.type === 'video/rmvb';
      if (!ismp4 && !isavi && !isflv && !isrmvb && !ismov) {
        this.$message.error('上传图片只能是 MP4/AVI/FLV/MOV/RMVB格式!');
        return false
      }
      return true
    },
    //上传图片
    upLoadImg (file) {
      const that = this
      const formData = new FormData()
      formData.append('file', file.file)
      this.$commonApi.upFile(formData).then(res => {
        that.fileList.push({ url: `${that.$imgBaseUrl}${res.resultEntity}`, name: 'video' })
        that.videoUrl = res.resultEntity
      }).catch(() => {
        that.$message.error('上传失败,请重新选择');
        that.fileList = []
        that.videoUrl = ''
      })
    },
    // 删除视频是清空所有
    handleRemove () {
      this.fileList = []
      this.videoUrl = "";
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
    .avatar-uploader {
      width: 170px;
      height: 170px;
      line-height: 170px;
      background: #ffffff;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 170px;
      height: 170px;
      line-height: 170px;
      text-align: center;
    }
    .avatar {
      width: 170px;
      height: 170px;
      display: block;
    }
  }
}
</style>