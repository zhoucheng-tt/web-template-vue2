<!--
 * @Description: 车牌组件 plateNumber
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-12-05 09:40:40
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="left">
      <div class="leftTop">
        <plate-number-input ref="numInput"
                            class="plateNumberInput"
                            @idxChange='handleClickChangeIndex'
                            @currentPlateNumber='handleShowPlateNumber'
                            @handleButtonDisable='handleButtonDisable' />
      </div>
      <div class="buttonDiv">
        <el-button class="button"
                   :disabled="buttonDisabled"
                   @click="handleClickButton">绑定车牌</el-button>
      </div>

      <keyborad-button ref="keyboard"
                       class="keyboradButton"
                       @handleClickRemoveAll='handleClickRemoveAll'
                       @click="handleKeyboardClick" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import plateNumberInput from '@/components/plateNumber/plateNumberInput'
import keyboradButton from '@/components/plateNumber/keyboradButton'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    plateNumberInput,
    keyboradButton
  },
  data () {
    //这里存放数据
    return {
      plateNumber: "渝", // 车牌号
      buttonDisabled: true, // 立即绑定按钮是否可用
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    // 默认有第一个位，第二位待输入
    this.$refs.numInput.setInput(this.plateNumber)
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
    // 绑定车牌点击事件
    handleClickButton () {
      console.log(this.plateNumber, "父组件");
    },
    // 绑定车牌是否显示是否显示
    handleButtonDisable (val) {
      this.buttonDisabled = val
    },
    // 获取到车牌的值
    handleShowPlateNumber (val) {
      this.plateNumber = val
    },
    // 获取车牌输入框的index
    handleClickChangeIndex (val) {
      this.$refs.keyboard.handleTypeChange(val)
    },
    // 键盘点击事件
    handleKeyboardClick (value) {
      this.$refs.numInput.setInput(value) // 将点击的值传入父组件
    },
    // 清空车牌
    handleClickRemoveAll () {
      this.$refs.numInput.handleClickRemovePlateNumber()
      this.plateNumber = ''
    }
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.mainbody {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .left {
    width: 390px;
    height: 844px;
    background-image: url(../../../assets/mobile/phone.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    display: block;
    .keyboradButton {
      width: 90%;
      height: 250px;
      margin-left: 5%;
      position: absolute;
      bottom: 20px;
      border-radius: 35px;
      background: #e2e3e7;
      display: block;
    }
    .leftTop {
      width: 90%;
      height: 7%;
      margin-left: 5%;
      padding-top: 40%;
      .plateNumberInput {
      }
    }
    .buttonDiv {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .button {
        width: 60%;
        height: 100%;
      }
    }
  }
}
</style>