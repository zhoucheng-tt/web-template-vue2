<!--
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-02-24 14:41:58
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="title">{{ contentName }} </div>
    <div class="content"
         id="lineChartFirst"
         :options="lineChartsOptions">
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import resize from '@/components/mixins/resize'
import * as echarts from 'echarts'

export default {
  mixins: [resize],
  components: {},
  props: {
    contentName () { String },
  },
  data () {
    // 这里存放数据
    return {
      chart: null,
      lineChartsOptions: {},
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
    this.initCharts()
  },
  // 方法集合
  methods: {
    initCharts () {
      this.chart = echarts.init(document.getElementById('lineChartFirst'));
      // this.chart.getZr().on('click', params => {
      //   let pointInPixel = [params.offsetX, params.offsetY]
      //   let pointInGrid = this.chart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)
      // })
      let xLabel = ['2021/02/01', '2021/02/05', '2021/02/10', '2021/02/15', '2021/02/20', '2021/02/25', '2021/02/30']
      let goToSchool = [15, 10, 15, 20, 15, 10, 15]
      let goOutSchool = [30, 20, 30, 40, 30, 20, 30]
      let legendData = [{ name: 'demo1' }, { name: 'demo2' }]
      this.chart.setOption({
        grid: {
          top: '10%',
          bottom: '13%',
          left: '7%',
          right: '5%',
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: xLabel,
          axisLabel: {
            textStyle: {
              padding: 10,
              color: "#000000",
              fontSize: 12
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(21, 46, 84, 1)'
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ''
            },
          },
          axisTick: {
            show: false,
          },
        }],
        yAxis: [{
          name: '',
          min: 0,
          axisLabel: {
            show: true,
            textStyle: {
              padding: 10,
              color: "#000000",
              fontSize: 12
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(21, 46, 84, 1)'
            },
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: ""
            }
          },
          axisTick: {
            show: false,
          },
        }],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(87, 224, 182, 0)' // 0% 处的颜色
                }, {
                  offset: 0.5,
                  color: 'rgba(87, 224, 182, 1)' // 100% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(87, 224, 182, 0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
          }
        },
        legend: {
          data: legendData,
          align: "left",
          top: '0%',
          right: '5%',
          type: 'plain',
          textStyle: {
            color: "#000000",
            fontSize: 12
          },
          icon: 'circle',
          itemGap: 25,
          itemWidth: 10
        },
        series: [{
          name: 'demo1',
          type: 'line',
          symbol: 'circle',
          showAllSymbol: true,
          symbolSize: 0,
          smooth: true,
          lineStyle: {
            normal: {
              width: 2,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0,
                [{
                  offset: 1,
                  color: '#0D82D800'
                }, {
                  offset: 0.5,
                  color: '#08F6E4'
                }, {
                  offset: 0,
                  color: '#1D52CA00'
                }]
              ),
            },
          },
          itemStyle: {
            color: "#08F6E4",
            borderWidth: 2
          },
          tooltip: {
            show: true
          },
          data: goToSchool
        }, {
          name: 'demo2',
          type: 'line',
          symbol: 'circle',
          showAllSymbol: true,
          symbolSize: 0,
          smooth: true,
          lineStyle: {
            normal: {
              width: 2,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0,
                [{
                  offset: 1,
                  color: '#0D82D800'
                }, {
                  offset: 0.5,
                  color: '#08F6E4'
                }, {
                  offset: 0,
                  color: '#1D52CA00'
                }]
              ),
            },
          },
          itemStyle: {
            color: "#08F6E4",
            borderWidth: 2
          },
          tooltip: {
            show: true
          },
          data: goOutSchool
        }]
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    letter-spacing: 2px;
  }
  .content {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>