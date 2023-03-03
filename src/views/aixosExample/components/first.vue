<!--
 * @Description: 上传图片
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-02-24 14:41:58
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="title">{{ contentName }} </div>
    <div class="content">
      <el-row class="itemUpload">
        <!-- <el-upload class="avatar-uploader"
                   accept="image/*"
                   :http-request="upLoadImg"
                   :before-upload="beforeUpload"
                   :file-list="fileList"
                   :show-file-list="false"
                   :limit="1">
          <i class="el-icon-plus avatar-uploader-icon"
             v-if="!formList.imgUrl"></i>
        </el-upload> 
         <div v-if="formList.imgUrl">
          <el-image class="avatar"
                    :src="$imgBaseUrl + formList.imgUrl"
                    @click="handleClickPicPreview"
                    :preview-src-list="imgUrlPreview">
          </el-image> 
          <el-button type="primary"
                     @click="handleClickDeletePic"
                     style="width: 75px;height: 32px;margin-left:20px">删 除</el-button>
        </div>-->
        <el-upload action=""
                   list-type="picture-card"
                   :http-request="upLoadImg"
                   accept="image/*"
                   :before-upload="beforeUpload"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove"
                   :file-list="fileList"
                   :limit="1">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog title="图片预览"
                   :visible.sync="previewImgDialog">
          <img width="100%"
               height="100%"
               :src="formList.imgUrlIn"
               alt="">
        </el-dialog>
      </el-row>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import Compressor from 'compressorjs'

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
      formList: {},
      previewImgDialog: false,
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
    // 提示
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isWebp = file.type === 'image/webp';
      const isBmp = file.type === 'image/bmp';
      const isGif = file.type === 'image/gif';
      if (!isJPG && !isPNG && !isWebp && !isBmp && !isGif) {
        this.$message.error('上传图片只能是 JPG/PNG/WEBP/BMP/GIF 格式!');
        return false
      }
      return true
    },
    //上传图片
    upLoadImg (file) {
      const self = this
      new Compressor(file.file, {
        quality: 0.2,
        success (result) {
          result = new window.File([result], result.name, { type: result.type })
          const formData = new FormData()
          formData.append('file', result)
          // 上传成功
          self.$commonApi.upFile(formData).then(res => {
            self.fileList.push({ url: `${self.$imgBaseUrl}${res.resultEntity}`, name: 'img' })
            self.formList.imgUrl = res.resultEntity
          }).catch(() => {
            self.$message.error('上传失败');
            self.fileList = []
            self.formList.imgUrl = ''
            self.formList.imgUrlIn = ''
          })
        },
        error () {
          self.$message.error('上传失败,请重新选择');
          self.fileList = []
          self.formList.imgUrl = ''
          self.formList.imgUrlIn = ''
        }
      })
    },
    // 预览
    handlePictureCardPreview (file) {
      this.formList.imgUrlIn = file.url
      this.previewImgDialog = true
    },
    // 删除
    handleRemove () {
      this.formList.imgUrl = ''
      this.formList.imgUrlIn = ''
      this.fileList = []
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
  }
}
</style>