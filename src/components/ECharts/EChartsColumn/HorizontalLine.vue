<!--
 * @Description: echarts 横向柱状图 HorizontalLine
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-12-31 10:23:56
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="item"
            id="twoCharts"
            :options="twoChartsOptions">
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

      twoCharts: "",
      twoChartsOptions: {},
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
      this.chart = echarts.init(document.getElementById('twoCharts'));
      this.chart.on('click', function (param) {
        console.log(param);
      })
      let yData = ['龙湖街道', '翠云街道', '龙塔街道', '鸳鸯街道', '双龙湖街道']
      let seriesData = [10, 20, 30, 40, 50]
      this.chart.setOption({
        backgroundColor: "",
        grid: {
          top: '3%',
          left: '13%',
          right: '5%',
          bottom: '10%',
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#21485B',
              opacity: 0.1
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#000000",
              fontSize: 16
            }
          }
        },
        yAxis: {
          type: 'category',
          data: yData,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#2c4054'
            }
          },
          axisLabel: {
            textStyle: {
              color: "#000000",
              fontSize: 16
            }
          }
        },
        tooltip: {},
        series: [{
          type: 'bar',
          name: "",
          barWidth: 16,
          itemStyle: {
            normal: {
              color: '#7B56F1',
            }
          },
          data: seriesData
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
  .item {
    width: 100%;
    height: 100%;
  }
}
</style>