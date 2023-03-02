<!--
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-02-24 14:42:26
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="title">{{ contentName }} </div>
    <div class="content"
         id="columnChartSecond"
         :options="columnChartOptions">
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
    contentName () {
      String
    },
    dataList () { Array },
    colorList () { Array }
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
      this.chart = echarts.init(document.getElementById('columnChartSecond'));
      // 点击事件
      this.chart.on('click', function (param) {
        console.log(param);
      })
      let xDataList = []
      let yDataList = []
      this.dataList.forEach(item => {
        xDataList.push(item.value)
        yDataList.push(item.name)
      })
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
          data: yDataList,
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
          data: xDataList
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