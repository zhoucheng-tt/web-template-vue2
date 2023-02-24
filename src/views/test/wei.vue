<template>
  <div class='mainbody'>
    <el-upload class="avatar-uploader"
               action=""
               accept="mp4,avi,flv,mov,rmvb,x-flv"
               :http-request="upLoadVideo"
               :file-list="videofileList"
               :show-file-list="false"
               :limit="1">
      <i v-if="!showAbnormalVideo"
         class="el-icon-plus  avatar-uploader-icon"></i>
    </el-upload>
    <el-row v-if="showAbnormalVideo"
            style="display:flex">
      <video class="avatar"
             width="100%"
             controls="controls"
             :src="abnormalFormList.videoUrl"></video>
      <el-button type="primary"
                 style="width: 75px;height: 32px;margin-left:20px">删 除</el-button>
    </el-row>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      showAbnormalVideo: false, // 视频上传显示
      videofileList: [],
      abnormalFormList: {},
      url: '/d38b13264e9d48b5925a85f7546a5cce/68d8d9095cd47f01e02ed3112fc40f31/701f134d04ed0cc3fdd7b5bc13285a22.mp4?AWSAccessKeyId=Z08JQ7CCS8LPRYK3ZJGC&Expires=1677140211&Signature=fw4Ife4Sn%2BxBSLVFsDQINiP%2FX1g%3D'
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
    // 上传视频
    async upLoadVideo (file) {
      // var myfile;
      var reader = new FileReader();
      console.log(reader)
      console.log(file)
      reader.readAsDataURL(file.file)
      reader.onload = () => {
        console.log(reader.result)
        // console.log(file.file);
      }

      // formData.append('file', file.file)

      console.log(reader)
      this.$axios.put(
        '/api1' + this.url,
        'cmMtdXBsb2FkLTE2NzcxMzQwNjMzNjItNA==/test.mp4',
        {
          headers: {
            'Content-Type': 'video/mp4'
          }
        }
        // {
        //   'Content-Type': 'video/mp4'
        // }
      ).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      });

      // this.$axios.put('https://vod-bucket-37-cn-east-2.obs.cn-east-2.myhuaweicloud.com:443/d38b13264e9d48b5925a85f7546a5cce/28b206db9e63326039a5fa8852baeaee/ec763557f2c394049a285727a6654493.mp4?AWSAccessKeyId=Z08JQ7CCS8LPRYK3ZJGC&Expires=1677120422&Signature=bftqH4Dv4wnDVZHot%2FGPF3QHT7I%3D',).then(() => {
      //   // if (res.resultEntity) {
      //   //   that.abnormalFormList.videoUrl = res.resultEntity
      //   //   that.showAbnormalVideo = true
      //   // }
      // }).catch(err => {
      //   that.$message.error('上传失败,请重新选择', err);
      //   that.videofileList = []
      // })
    },
    // 视频删除
    handleClickDeleteVideo () {
      this.showAbnormalVideo = false
      this.videofileList = []
      this.abnormalFormList.videoUrl = ''
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
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px solid gray;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
