<!--
 * @Description: commonJs
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-02-24 14:41:58
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="title">{{ contentName }} </div>
    <div class="content">
      <div class="lineItem">
        <div class="titlein">获取当前IP天气</div>
        <div class="label">
          <span class="span">{{weather.adcode}} {{weather.address}}</span>
          <span class="span">{{weather.date}}</span>
          <span class="span">{{weather.nighttemp}}℃~{{weather.daytemp}}℃</span>
          <span class="span">{{weather.dayweather}}转{{weather.nightweather}}</span>
        </div>
      </div>
      <div class="lineItem">
        <div class="titlein">去除空格</div>
        <div class="label">{{removeBlankAll.value}} {{removeBlankAll.value.length}} || {{removeBlankAll.valueFmt}} {{removeBlankAll.valueFmt.length}} </div>
      </div>
      <div class="lineItem">
        <div class="titlein">手机号脱敏</div>
        <div class="label">脱敏前:{{phoneNumber.value}}</div>
        <div class="label">脱敏后:{{phoneNumber.valueFmt}}</div>
      </div>
      <div class="lineItem">
        <div class="titlein">邮箱脱敏</div>
        <div class="label">脱敏前:{{email.value}}</div>
        <div class="label">脱敏后:{{email.valueFmt}}</div>
      </div>
      <div class="lineItem">
        <div class="titlein">身份证脱敏</div>
        <div class="label">脱敏前:{{idNumber.value}}</div>
        <div class="label">脱敏后:{{idNumber.valueFmt}}</div>
      </div>
      <div class="lineItem">
        <div class="titlein">姓名脱敏</div>
        <div class="label">脱敏前:{{name.value}}</div>
        <div class="label">脱敏后:{{name.valueFmt}}</div>
      </div>
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

      weather: {
        adcode: "",
        address: "",
        date: "",
        nighttemp: "",
        daytemp: "",
        dayweather: "",
        nightweather: ""
      },

      removeBlankAll: { value: " 我 是 谁 ", valueFmt: '' },
      phoneNumber: { value: "15651014212", valueFmt: "" },
      email: { value: "7385602201@qq.com", valueFmt: "" },
      idNumber: { value: "320654199504156452", valueFmt: "" },
      name: { value: "张三三", valueFmt: "" }
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
    this.queryLineEight() // 获取当前IP的天气

    this.removeBlankAll.valueFmt = $commonsJs.removeBlankSpace(this.removeBlankAll.value)
    this.phoneNumber.valueFmt = $commonsJs.phoneNumberDes(this.phoneNumber.value)
    this.email.valueFmt = $commonsJs.emailDes(this.email.value)
    this.idNumber.valueFmt = $commonsJs.idcardDes(this.idNumber.value)
    this.name.valueFmt = $commonsJs.nameDes(this.name.value)
  },
  // 方法集合
  methods: {
    // 获取当前天气
    queryLineEight () {
      // 获取当前所在城市
      let that = this
      window.AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new window.AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            that.weather.address = result.city
            // 根据城市换取adcode（城市编码）
            let city = "https://restapi.amap.com/v3/config/district?keywords=" + result.city + "&subdistrict=1&key=5231c8309b3e70e763b378a0cc685f39"
            that.$axios.get(city).then((res) => {
              that.weather.adcode = res.data.districts[0].adcode
            })
            // 获取天气
            let weather = "https://restapi.amap.com/v3/weather/weatherInfo?city=" + result.adcode + "&key=5231c8309b3e70e763b378a0cc685f39&extensions=all"
            that.$axios.get(weather).then((res) => {
              console.log(res.data);
              that.weather.date = res.data.forecasts[0].casts[0].date
              that.weather.nighttemp = res.data.forecasts[0].casts[0].nighttemp
              that.weather.daytemp = res.data.forecasts[0].casts[0].daytemp
              that.weather.dayweather = res.data.forecasts[0].casts[0].dayweather
              that.weather.nightweather = res.data.forecasts[0].casts[0].nightweather
            })
          }
        })
      })
    }
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
        .span {
          margin-left: 10px;
        }
        .span:nth-child(1) {
          margin-left: 0px;
        }
      }
    }
  }
}
</style>