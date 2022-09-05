<!--
 * @Description: echarts 渐变锥形柱状图 GradientPictorialBar
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-12-31 10:14:17
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="item"
            id="oneCharts"
            :options="oneChartsOptions">
    </el-row>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import resize from '@/components/mixins/resize'
import * as echarts from 'echarts'
export default {
  mixins: [resize],
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      chart: null,

      oneCharts: "",
      oneChartsOptions: {},
      sevenDaysParkTimeData: [1, 2, 3, 4, 5, 6, 7],
      sevenDaysParkTimeXz: ["10-01", "10-02", "10-03", "10-04", "10-05", "10-06", "10-07"],
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
    this.queryOneCharts()
  },
  // 方法集合
  methods: {
    queryOneCharts () {
      this.chart = echarts.init(document.getElementById('oneCharts'));
      this.chart.setOption({
        xAxis: {
          data: this.sevenDaysParkTimeXz,
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
            data: this.sevenDaysParkTimeData,
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
  .item {
    width: 100%;
    height: 100%;
  }
}
</style>