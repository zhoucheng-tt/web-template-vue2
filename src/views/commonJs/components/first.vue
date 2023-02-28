<!--
 * @Description: 时间相关
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
        <div class="titlein">当前时间</div>
        <div class="label">{{currentDate}}</div>
      </div>
      <div class="lineItem">
        <div class="titlein">时间格式化</div>
        <div class="label">未格式化:{{date}}</div>
        <div class="label">格式化后:{{dateFmt}} || {{dateFmtVal}}</div>
      </div>
      <div class="lineItem">
        <div class="titlein">分钟转天、小时</div>
        <div class="label"
             v-for="(item,index) in minToFmtList"
             :key="index">
          {{item.value}} || {{item.valueFmt}}
        </div>
      </div>
      <div class="lineItem">
        <div class="titlein">时间差</div>
        <div class="label"
             v-for="(item,index) in differList.slice(0,2)"
             :key="index">
          {{item.startTime}} {{item.endTime}} || {{item.valueFmt}}
        </div>
      </div>
      <div class="lineItem">
        <div class="titlein">时间差</div>
        <div class="label"
             v-for="(item,index) in differList.slice(2,4)"
             :key="index">
          {{item.startTime}} {{item.endTime}} || {{item.valueFmt}}
        </div>
      </div>
      <div class="lineItem">
        <div class="titlein">时间差</div>
        <div class="label"
             v-for="(item,index) in differList.slice(4,6)"
             :key="index">
          {{item.startTime}} {{item.endTime}} || {{item.valueFmt}}
        </div>
      </div>
      <div class="lineItem">
        <div class="titlein">是否三天</div>
        <div class="label">{{intTimeJudgeList[0].startTime}} {{intTimeJudgeList[0].endTime}} || {{intTimeJudgeList[0].valueFmt}}</div>
        <div class="label">{{intTimeJudgeList[1].startTime}} {{intTimeJudgeList[1].endTime}} || {{intTimeJudgeList[1].valueFmt}}</div>
      </div>
      <div class="lineItem">
        <div class="titlein">是否七天</div>
        <div class="label">{{intTimeJudgeList[2].startTime}} {{intTimeJudgeList[2].endTime}} || {{intTimeJudgeList[2].valueFmt}}</div>
        <div class="label">{{intTimeJudgeList[3].startTime}} {{intTimeJudgeList[3].endTime}} || {{intTimeJudgeList[3].valueFmt}}</div>
      </div>
      <div class="lineItem">
        <div class="titlein">获取当前周</div>
        <div class="label">{{ currentWeek }}</div>
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
      currentDate: "",
      date: new Date(),
      dateFmt: new Date().dateFmt("yyyy-MM-dd hh:mm:ss"),
      dateFmtVal: new Date().dateFmt('yyyy-MM-dd hh:mm:ss', new Date()),

      minToFmtList: [
        { value: undefined, valueFmt: '' },
        { value: '0', valueFmt: '' },
        { value: '1', valueFmt: '' },
        { value: '60', valueFmt: '' },
        { value: '61', valueFmt: '' },
        { value: '1440', valueFmt: '' },
        { value: '1441', valueFmt: '' },
        { value: '1501', valueFmt: '' },
      ],
      differList: [
        { startTime: '2023-01-01 00:00:00', endTime: '2023-01-01 00:00:00', valueFmt: '' },
        { startTime: '2023-01-01 00:00:00', endTime: '2023-01-01 00:01:00', valueFmt: '' },
        { startTime: '2023-01-01 00:00:00', endTime: '2023-01-01 01:00:00', valueFmt: '' },
        { startTime: '2023-01-01 00:00:00', endTime: '2023-01-02 00:00:00', valueFmt: '' },
        { startTime: '2023-01-01 00:00:00', endTime: '2023-02-01 00:00:00', valueFmt: '' },
        { startTime: '2023-01-01 00:00:00', endTime: '2024-01-02 00:00:00', valueFmt: '' },
      ],
      intTimeJudgeList: [
        {
          startTime: '2023-01-01 00:00:00', endTime: '2023-01-04 00:00:00',
          interval: '3', valueFmt: null
        },
        {
          startTime: '2023-01-01 00:00:00', endTime: '2023-01-05 00:00:00',
          interval: '3', valueFmt: null
        },
        {
          startTime: '2023-01-01 00:00:00', endTime: '2023-01-08 00:00:00',
          interval: '7', valueFmt: null
        },
        {
          startTime: '2023-01-01 00:00:00', endTime: '2023-01-09 00:00:00',
          interval: '7', valueFmt: null
        },
      ],
      currentWeek: []
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
    setInterval(() => {
      this.currentDate = new Date().dateFmt('yyyy-MM-dd hh:mm:ss')
    }, 1000);
    this.minToFmtList.forEach(item => {
      item.valueFmt = $commonsJs.timeMinToFmt(item.value)
    })
    this.differList.forEach(item => {
      item.valueFmt = $commonsJs.differTimeFmt(item.startTime, item.endTime)
    })
    this.intTimeJudgeList.forEach(item => {
      item.valueFmt = $commonsJs.intervalTimeJudge(item.startTime, item.endTime, item.interval)
    })
    this.currentWeek = $commonsJs.queryCurrentWeek()
  },
  // 方法集合
  methods: {
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
      }
    }
  }
}
</style>