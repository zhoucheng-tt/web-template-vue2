<!--
 * @Description: 有间隙的饼图 intervalPieChart
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-01-20 10:34:43
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="item"
            id="intervalPieChart"
            :options="intervalPieChartOptions">
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
      intervalPieChart: "",
      intervalPieChartOptions: {}
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
    this.queryIntervalPieChart()
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
    queryIntervalPieChart () {
      this.chart = echarts.init(document.getElementById('intervalPieChart'));
      var ydata = [{
        name: '运营管控指标',
        value: 18
      },
      {
        name: '电网调度主数据',
        value: 16
      },
      {
        name: '电网运行数据',
        value: 15
      },
      {
        name: '早汇报数据',
        value: 14
      },
      {
        name: '主站数据',
        value: 10
      },
      {
        name: '其他',
        value: 7.9
      },
      ];
      var color = ["#40a9ff", "#f759ab", "#597ef7", "#36cfc9", "#9254de", "#73d13d"]
      var xdata = ['运营管控指标', "电网调度主数据", "电网运行数据", "早汇报数据", '主站数据', '其他'];
      this.chart.setOption({
        backgroundColor: "",
        color: color,
        legend: {
          orient: "vartical",
          textStyle: {
            color: "#9FACBC",
          },
          x: "left",
          top: "center",
          left: "50%",
          bottom: "0%",
          data: xdata,
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 16,
        },
        series: [{
          type: 'pie',
          clockwise: false, //饼图的扇区是否是顺时针排布
          minAngle: 2, //最小的扇区角度（0 ~ 360）
          radius: ["25%", "45%"],
          center: ["30%", "50%"],
          avoidLabelOverlap: false,
          itemStyle: { //图形样式
            normal: {
              borderColor: '#1A213E',
              borderWidth: 6,
            },
          },
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: '{text|{b}}\n{c} ({d}%)',
              rich: {
                text: {
                  color: "#9FACBC",
                  fontSize: 14,
                  align: 'center',
                  verticalAlign: 'middle',
                  padding: 8
                },
                value: {
                  color: "#fff",
                  fontSize: 24,
                  align: 'center',
                  verticalAlign: 'middle',
                },
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: 16,
              }
            }
          },
          data: ydata
        }]
      });

      setTimeout(function () {
        this.chart.on('mouseover', function (params) {
          if (params.name == ydata[0].name) {
            this.chart.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: 0
            });
          } else {
            this.chart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: 0
            });
          }
        });

        this.chart.on('mouseout', function (params) {
          console.log(params);
          this.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          });
        });
        this.chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        });
      }, 1000);
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