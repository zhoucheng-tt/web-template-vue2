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
         id="columnChartFirst"
         :options="columnChartOptions">
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import resize from '@/components/mixins/resize'
import * as echarts from 'echarts'
import commonData from '@/data/commonData'
export default {
  mixins: [resize],
  components: {},
  props: {
    contentName () {
      String
    },
  },
  data () {
    // 这里存放数据
    return {
      chart: null,
      columnChartOptions: {},
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
      this.chart = echarts.init(document.getElementById('columnChartFirst'));
      let xDataList = []
      let yDataList = []
      commonData.forEach(item => {
        xDataList.push(item.name)
        yDataList.push(item.value)
      })
      this.chart.setOption({
        xAxis: {
          data: xDataList,
          axisTick: { show: false },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#3370C8',//左边线的颜色
              width: '1'//坐标线的宽度
            },
          },
          axisLabel: {
            fontSize: "12px",
            color: "#3370C8",
            letterSpacing: "0.27px",
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0A3167'],
              width: "1",
              type: "solid"
            }
          }
        },
        yAxis: {
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#0A3167',//左边线的颜色
              width: '1'//坐标线的宽度
            }
          },
          axisLabel: {
            fontSize: "12px",
            color: "#3370C8",
            letterSpacing: "0.27px",
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0A3167'],
              width: "1",
              type: "solid"
            }
          }
        },
        color: ['#FFDC21'],
        grid: {
          left: '4%',
          right: '4%',
          top: "10%",
          bottom: '0%',
          containLabel: true
        },
        series: [
          {
            type: 'pictorialBar',
            barWidth: '60%',
            label: {
              normal: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#E9C503', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(233,197,3,0.00)', // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                }, //渐变颜色
              },
            },
            symbol:
              'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',
            data: yDataList,
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function (params) {
            return params[0].name + ': ' + params[0].value;
          }
        },
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