<!--
 * @Description: 正则校验
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-02-24 14:42:26
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="title">{{ contentName }} </div>
    <div class="content">
      <el-row class="lineItem">
        <div class="titlein">英文数字校验</div>
        <div class="label">{{englishNumber.value}} || {{englishNumber.valueFmt}}</div>
      </el-row>
      <el-row class="lineItem">
        <div class="titlein">车牌号校验</div>
        <div class="label">{{plateNumber.value}} || {{plateNumber.valueFmt}}</div>
      </el-row>
      <el-row class="lineItem">
        <div class="titlein">手机号校验</div>
        <div class="label">{{phoneNumber.value}} || {{phoneNumber.valueFmt}}</div>
      </el-row>
      <el-row class="lineItem">
        <div class="titlein">邮箱校验</div>
        <div class="label">{{email.value}} || {{email.valueFmt}}</div>
      </el-row>
      <el-row class="lineItem">
        <div class="titlein">身份证校验</div>
        <div class="label">{{idNumber.value}} || {{idNumber.valueFmt}}</div>
      </el-row>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import $commonsJs from '@/commons/commonsJs.js'
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
      englishNumber: { value: "123Abc", valueFmt: "" },
      plateNumber: { value: "苏AF12345", valueFmt: "" },
      phoneNumber: { value: "13624510245", valueFmt: "" },
      email: { value: "2315741524@qq.com", valueFmt: "" },
      idNumber: { value: "320682199607143433", valueFmt: "" }
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.englishNumber.valueFmt = $commonsJs.englishNumberVerify(this.englishNumber.value)
    this.plateNumber.valueFmt = $commonsJs.plateNumberVerify(this.plateNumber.value)
    this.phoneNumber.valueFmt = $commonsJs.phoneNumberVerify(this.phoneNumber.value)
    this.email.valueFmt = $commonsJs.emailVerify(this.email.value)
    this.idNumber.valueFmt = $commonsJs.idcardVerify(this.idNumber.value)
  },
  // 方法集合
  methods: {},
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
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    letter-spacing: 2px;
    padding: 0.5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 100%;
    height: 90%;
    padding-bottom: 10px;
    .lineItem {
      width: 100%;
      margin: 10px auto;
      display: flex;
      .titlein {
        width: 15%;
        font-weight: 600;
        margin-left: 10px;
        padding: 0 10px;
        border: 1px dashed rgb(26, 18, 18);
      }
      .label {
        margin-left: 10px;
        padding: 0 10px;
        border: 1px solid rgb(26, 18, 18);
      }
    }
  }
}
</style>