<!--
 * @Description: 验证码  checkTrueCode
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-12-31 16:01:17
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="lineOne">
      <el-row class="title">
        点字选择
      </el-row>
      <el-row class="lable">
        <el-button @click="clickWordToCheckShow = true">弹出组件</el-button>
      </el-row>
    </el-row>
    <el-row class="lineOne">
      <el-row class="title">
        图文缺口
      </el-row>
      <el-row class="lable">
        <el-button @click="imageTextGapShow = true">弹出组件</el-button>
      </el-row>
    </el-row>
    <el-row class="lineOne">
      <el-row class="title">
        数字字母输入
      </el-row>
      <el-row class="lable">
        <el-input v-model="numberTextCode"
                  style="width:100px"></el-input>
        <numberTextCheckCode class="numberTextCheck"
                             :code="numberTextCode"
                             @changeCode="changeCode" />
      </el-row>
    </el-row>

    <!-- 点字选择组件 -->
    <div class="clickWordToCheckShowClass"
         v-if="clickWordToCheckShow===true">
      <click-word-to-check @confirm="handleClcikWordToCheck" />
    </div>
    <!--  图文缺口 -->
    <Vcode :show="imageTextGapShow"
           @success="imageTextGapSuccess" />

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ClickWordToCheck from "@/components/CheckTrueCode/ClickWordToCheck.vue";
import Vcode from 'vue-puzzle-vcode'// 页面内引用插件 npm install --save vue-puzzle-vcode
import numberTextCheckCode from '@/components/CheckTrueCode/numberTextCheckCode.vue'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    ClickWordToCheck,
    Vcode,
    numberTextCheckCode
  },
  data () {
    //这里存放数据
    return {
      clickWordToCheckShow: false, // 点字选择
      imageTextGapShow: false,// 图文缺口
      valiteNumberText: '', // 验证码
      numberTextCode: ''// 验证码切换
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.productionCode()

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
    // 点字选择确认
    handleClcikWordToCheck (result) {
      if (result) {
        this.clickWordToCheckShow = false
      } else {
        this.$message('请正确点击');
      }
    },
    // 图文缺口验证通过
    imageTextGapSuccess () {
      this.imageTextGapShow = false // 通过验证后，手动隐藏模态框
    },
    changeCode () {
      this.productionCode()
    },
    // 生成验证码
    productionCode () {
      let txt = ''
      const str = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789'
      for (let i = 0; i < 4; i++) {
        // 随机生成文字
        txt += str[Math.floor(Math.random() * (str.length - 0) + 0)]
      }
      this.numberTextCode = txt
      console.log('this.numberTextCode', this.numberTextCode)
    }
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.mainbody {
  width: 100%;
  height: 100%;
  position: relative;
  .lineOne {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    margin-top: 20px;
    .title {
      padding-left: 20px;
      font-weight: 600;
    }
    .lable {
      margin-left: 10px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      .numberTextCheck {
        width: 120px;
        height: 40px;
        margin-top: 10px;
        margin-left: 5px;
      }
    }
  }
  .clickWordToCheckShowClass {
    position: fixed;
    top: calc(50vh - 140px);
    left: calc(50vw - 200px);
  }
}
</style>