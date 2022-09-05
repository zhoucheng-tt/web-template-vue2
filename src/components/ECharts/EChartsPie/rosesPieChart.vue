<!--
 * @Description:  rosesPieChart 玫瑰饼图
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-01-20 10:01:54
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="item"
            id="rosesPieChart"
            :options="rosesPieChartOptions">
    </el-row>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import resize from '@/components/mixins/resize'
import * as echarts from 'echarts'
export default {
  mixins: [resize],
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {
      chart: null,
      rosesPieChart: "",
      rosesPieChartOptions: {}
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
    this.queryRosesPieChart()
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
    queryRosesPieChart () {
      this.chart = echarts.init(document.getElementById('rosesPieChart'));
      let datas = [
        { name: "出租居住", value: 1, },
        { name: "自营", value: 2, },
        { name: "出租经营", value: 3, },
        { name: "合作入股", value: 4, },
      ];
      this.chart.setOption({
        color: ["#F56463", "#00C6FF", "#F09615", "#0079E6"],
        legend: {
          itemHeight: 14,
          itemWidth: 14,
          icon: "rect",
          orient: "vertical",
          top: "center",
          right: "5%",
          textStyle: {
            align: "left",
            color: "#",
            verticalAlign: "middle",
            rich: {
              name: {
                width: 80,
                fontSize: 16,
              },
              value: {
                width: 20,
                align: "right",
                fontFamily: "Medium",
                fontSize: 16,
              },
              rate: {
                width: 10,
                align: "right",
                fontSize: 16,
              },
            },
          },
          data: datas,
          formatter: (name) => {
            if (datas.length) {
              const item = datas.filter((item) => item.name === name)[0];
              return `{name|${name}}{value| ${item.value}} {rate| 宗}`;
            }
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{d}%",
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["30%", "80%"],
            center: ["35%", "50%"],
            roseType: "radius",
            label: {
              formatter: "{d}%",
            },
            labelLine: {
              length: 1,
              length2: 20,
            },
            data: datas,
          },
        ],
      });
    },
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.mainbody {
  width: 100%;
  height: 100%;
  .item {
    width: 100%;
    height: 100%;
  }
}
</style>