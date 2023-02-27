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
      <div class="title">手机号脱敏</div>
      <div class="label">手机号:{{functionFourData.phoneNumber}}</div>
      <div class="label">脱敏后:{{functionFourData.phoneNumberAfter}}</div>
      <div class="title">邮箱脱敏</div>
      <div class="label">邮箱:{{functionFourData.email}}</div>
      <div class="label">脱敏后:{{functionFourData.emailAfter}}</div>
    </el-row>
    <el-row class="lineItem">
      <div class="title">姓名脱敏</div>
      <div class="label">姓名:{{functionFiveData.name}}</div>
      <div class="label">脱敏后:{{functionFiveData.nameAfter}}</div>
      <div class="title">身份证脱敏</div>
      <div class="label">身份证:{{functionFiveData.idcard}}</div>
      <div class="label">脱敏后:{{functionFiveData.idcardAfter}}</div>
    </el-row>
    <el-row class="lineItem">
      <div class="title">车牌号校验</div>
      <div class="label">{{functionSixData.plateNumber}}</div>
    </el-row>
    <el-row class="lineItem">
      <div class="title">去除空格</div>
      <div class="label">{{functionSevenData.removeBlankAll}}</div>
      <div class="label">{{functionSevenData.removeBlankTwo}}</div>
      <div class="label">{{functionSevenData.removeBlankLeft}}</div>
      <div class="label">{{functionSevenData.removeBlankRight}}</div>
    </el-row>
    <el-row class="lineItem">
      <div class="title">获取当前IP天气</div>
      <div class="label">
        <span class="span">{{functionEightData.adcode}} {{functionEightData.address}}</span>
        <span class="span">{{functionEightData.date}}</span>
        <span class="span">{{functionEightData.nighttemp}}℃~{{functionEightData.daytemp}}℃</span>
        <span class="span">{{functionEightData.dayweather}}转{{functionEightData.nightweather}}</span>
      </div>
    </el-row>
  </div>
</template>

<script>

//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import $commonsJs from '@/commons/commonsJs.js'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {
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
      },
      functionEightData: {
        adcode: "",
        address: "",
        date: "",
        nighttemp: "",
        daytemp: "",
        dayweather: "",
        nightweather: ""
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.queryLineFour()// 手机号脱敏 邮箱脱敏
    this.queryLineFive() // 姓名脱敏 身份证脱敏
    this.queryLineSix() // 车牌号校验
    this.queryLineSeven() // 字符串去除空格
    this.queryLineEight() // 获取当前IP的天气
  },

  //方法集合
  methods: {
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
    },
    // 获取当前天气
    queryLineEight () {
      // 获取当前所在城市
      let that = this
      window.AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new window.AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            that.functionEightData.address = result.city
            // 根据城市换取adcode（城市编码）
            let city = "https://restapi.amap.com/v3/config/district?keywords=" + result.city + "&subdistrict=1&key=5231c8309b3e70e763b378a0cc685f39"
            that.$axios.get(city).then((res) => {
              that.functionEightData.adcode = res.data.districts[0].adcode
            })
            // 获取天气
            let weather = "https://restapi.amap.com/v3/weather/weatherInfo?city=" + result.adcode + "&key=5231c8309b3e70e763b378a0cc685f39&extensions=all"
            that.$axios.get(weather).then((res) => {
              console.log(res.data);
              that.functionEightData.date = res.data.forecasts[0].casts[0].date
              that.functionEightData.nighttemp = res.data.forecasts[0].casts[0].nighttemp
              that.functionEightData.daytemp = res.data.forecasts[0].casts[0].daytemp
              that.functionEightData.dayweather = res.data.forecasts[0].casts[0].dayweather
              that.functionEightData.nightweather = res.data.forecasts[0].casts[0].nightweather
            })
          }
        })
      })
    }
  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () {
  }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
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
    .label {
      margin-left: 10px;
      border: 1px solid rgb(26, 18, 18);
      padding: 0 10px;
      .span {
        margin-left: 10px;
        line-height: 40px;
      }
    }
  }
}
</style>