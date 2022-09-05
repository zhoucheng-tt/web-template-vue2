<!--
 * @Description: 公共方法 commonJs
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-12-06 16:07:54
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="lineItem">
      <div class="title">日期格式化</div>
      <div class="lable">{{timeDateLeft}}</div>
      <div class="title">日期格式化</div>
      <div class="lable">{{timeDateRight}}</div>
      <div class="title">当前时间天气</div>
      <div class="lable">
        <span>{{ dateTimeValue }}</span>
        <span>{{ weatherList.type }}</span>
        <span>{{ weatherList.low }}/{{ weatherList.high }}</span>
      </div>
    </el-row>
    <el-row class="lineItem">
      <div class="title">分钟格式化成小时、天</div>
      <div class="lable">{{this.functionTwoData[0].value}}</div>
      <div class="lable">{{this.functionTwoData[1].value}}</div>
      <div class="lable">{{this.functionTwoData[2].value}}</div>
      <div class="lable">{{this.functionTwoData[3].value}}</div>
      <div class="lable">{{this.functionTwoData[4].value}}</div>
      <div class="lable">{{this.functionTwoData[5].value}}</div>
      <div class="lable">{{this.functionTwoData[6].value}}</div>
    </el-row>
    <el-row class="lineItem">
      <div class="title">两段时间间隔</div>
      <div class="lable">默认时间:{{functionThreeData.pastTime}}</div>
      <div class="lable">当前时间:{{dateTimeValue}}</div>
      <div class="lable">时间间隔：{{functionThreeData.timeInterval}}</div>
    </el-row>
    <el-row class="lineItem">
      <div class="title">手机号脱敏</div>
      <div class="lable">手机号:{{functionFourData.phoneNumber}}</div>
      <div class="lable">脱敏后:{{functionFourData.phoneNumberAfter}}</div>
      <div class="title">邮箱脱敏</div>
      <div class="lable">邮箱:{{functionFourData.email}}</div>
      <div class="lable">脱敏后:{{functionFourData.emailAfter}}</div>
    </el-row>
    <el-row class="lineItem">
      <div class="title">姓名脱敏</div>
      <div class="lable">姓名:{{functionFiveData.name}}</div>
      <div class="lable">脱敏后:{{functionFiveData.nameAfter}}</div>
      <div class="title">身份证脱敏</div>
      <div class="lable">身份证:{{functionFiveData.idcard}}</div>
      <div class="lable">脱敏后:{{functionFiveData.idcardAfter}}</div>
    </el-row>
    <el-row class="lineItem">
      <div class="title">车牌号校验</div>
      <div class="lable">{{functionSixData.plateNumber}}</div>
    </el-row>
    <el-row class="lineItem">
      <div class="title">去除空格</div>
      <div class="lable">{{functionSevenData.removeBlankAll}}</div>
      <div class="lable">{{functionSevenData.removeBlankTwo}}</div>
      <div class="lable">{{functionSevenData.removeBlankLeft}}</div>
      <div class="lable">{{functionSevenData.removeBlankRight}}</div>
    </el-row>
  </div>
</template>

<script>


//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import $ from "jquery";
import $commonsJs from '@/commons/commonsJs.js'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {
      timeDateLeft: "",
      timeDateRight: new Date().format("yyyy-MM-dd hh:mm:ss"), // 日期格式化
      dateTimeValue: '', // 当前时间
      weatherList: {}, // 南京天气
      // 分钟转化为小时、天 
      functionTwoData: [
        { value: "", idx: "0" },
        { value: "", idx: "1" },
        { value: "", idx: "2" },
        { value: "", idx: "3" },
        { value: "", idx: "4" },
        { value: "", idx: "5" },
        { value: "", idx: "6" },
      ],
      functionThreeData: {
        pastTime: "2022-01-01 10:10:10",
        timeInterval: ""
      },
      functionFourData: {
        phoneNumber: "15651014212",
        phoneNumberAfter: "",
        email: "7385602201@qq.com",
        emailAfter: ""
      },
      functionFiveData: {
        name: "张三三",
        nameAfter: "",
        idcard: "320654199504156452",
        idcardAfter: ""
      },
      functionSixData: {
        plateNumber: "苏A12453",
      },
      functionSevenData: {
        removeBlankAll: " 我 是 谁 ",
        removeBlankTwo: " 我是谁 ",
        removeBlankLeft: " 我是谁",
        removeBlankRight: "我是谁 ",
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    setInterval(() => {
      this.queryLineOneLeft();// 当前时间
      this.queryLineThree()// 时间间隔
    }, 1000);
    this.queryLineOneRight();// 当前天气
    this.queryLineTwo()// 分钟转化为小时、天 
    this.queryLineFour()// 手机号脱敏 邮箱脱敏
    this.queryLineFive() // 姓名脱敏 身份证脱敏
    this.queryLineSix() // 车牌号校验
    this.queryLineSeven() // 字符串去除空格
  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () {
  }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
  //方法集合
  methods: {
    // 获取当前时间
    queryLineOneLeft () {
      this.dateTimeValue = new Date().format("yyyy-MM-dd hh:mm:ss")
      let date = new Date()
      this.timeDateLeft = $commonsJs.dateFormat('yyyy-MM-dd HH:mm:ss', date)
    },
    // 获取当前天气
    queryLineOneRight () {
      var _this = this;
      $.ajax({
        url: "http://wthrcdn.etouch.cn/weather_mini?city=南京", type: "get",
        success: function (data) {
          var weatherResults = JSON.parse(data).data;
          var temp = weatherResults.forecast[0];
          _this.weatherList.high = temp.high.substring(3, 6);
          _this.weatherList.low = temp.low.substring(3, 6);
          _this.weatherList.type = temp.type;
        }
      });
    },
    // 分钟转化为小时、天 
    queryLineTwo () {
      this.functionTwoData[0].value = $commonsJs.minuteTimeFormat() // 0 - 59分钟 按需引入方法
      this.functionTwoData[1].value = $commonsJs.minuteTimeFormat(60) // 60分钟=1小时 全局引入方法
      this.functionTwoData[2].value = $commonsJs.minuteTimeFormat(61) // 1小时1分钟
      this.functionTwoData[3].value = $commonsJs.minuteTimeFormat(1440) // 24小时=1天
      this.functionTwoData[4].value = $commonsJs.minuteTimeFormat(1441) // 1天1分钟
      this.functionTwoData[5].value = $commonsJs.minuteTimeFormat(1500) // 1天1小时
      this.functionTwoData[6].value = $commonsJs.minuteTimeFormat(1501) // 1天1小时1分钟
    },
    // 时间间隔
    queryLineThree () {
      // 需要传入两个时间 前者为过去时间 后者为现在时间
      this.functionThreeData.timeInterval = $commonsJs.timeInterval(this.functionThreeData.pastTime, this.dateTimeValue)
    },
    // 手机号脱敏 邮箱脱敏
    queryLineFour () {
      this.functionFourData.phoneNumberAfter = $commonsJs.phoneNumberDesensitizate(this.functionFourData.phoneNumber)
      this.functionFourData.emailAfter = $commonsJs.emailDesensitizate(this.functionFourData.email)
    },
    // 姓名脱敏 身份证脱敏
    queryLineFive () {
      this.functionFiveData.nameAfter = $commonsJs.nameDesensitizate(this.functionFiveData.name)
      this.functionFiveData.idcardAfter = $commonsJs.idcardDesensitizate(this.functionFiveData.idcard)
    },
    // 车牌号校验
    queryLineSix () {
      this.functionSixData.plateNumber = $commonsJs.plateNumberVerify(this.functionSixData.plateNumber)
    },
    // 去除空格
    queryLineSeven () {
      this.functionSevenData.removeBlankAll = $commonsJs.removeBlankSpace(this.functionSevenData.removeBlankAll) // 全空格
      this.functionSevenData.removeBlankTwo = $commonsJs.removeBlankSpace(this.functionSevenData.removeBlankTwo, 1) // 两端空格
      this.functionSevenData.removeBlankLeft = $commonsJs.removeBlankSpace(this.functionSevenData.removeBlankLeft, 2) // 左侧空格
      this.functionSevenData.removeBlankRight = $commonsJs.removeBlankSpace(this.functionSevenData.removeBlankRight, 3) // 右侧空格
    }
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.mainbody {
  width: 100%;
  height: 100%;
  .lineItem {
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
      border: 1px solid rgb(26, 18, 18);
      padding: 0 10px;
    }
  }
}
</style>