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
         id="pieChartSecond"
         :options="pieChartOptions">
    </div>
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
  props: {
    contentName () {
      String
    },
    dataList () {
      Array
    },
    colorList () {
      Array
    }
  },
  data () {
    //这里存放数据
    return {
      chart: null,
      pieChartOptions: {}
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
    this.initCharts()
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
    initCharts () {
      this.chart = echarts.init(document.getElementById('pieChartSecond'));
      let dataList = this.dataList
      let colorList = this.colorList
      let dataNameList = []
      this.dataList.forEach(item => {
        dataNameList.push(item.name)
      })
      this.chart.setOption({
        backgroundColor: '',
        color: colorList,
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}$ ({d}%)",
          textStyle: {
            fontSize: 16,
          },
        },
        legend: {
          data: dataNameList,
          orient: 'vertical',
          right: '5%',
          top: '13%',
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 30,
          textStyle: {
            color: '#',
            fontSize: 16,
          },
        },
        series: [{
          name: '',
          type: 'pie',
          clockwise: false,
          startAngle: 90,
          radius: '75%',
          center: ['40%', '50%'],
          hoverAnimation: false,
          roseType: 'radius', //area
          data: dataList,
          itemStyle: {
            normal: {
              borderColor: '#333333',
              borderWidth: '3',
            },
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
              hr: {
                backgroundColor: '',
                borderRadius: 100,
                width: 0,
                height: 10,
                padding: [3, 3, 0, -16],
                shadowColor: '#',
                shadowBlur: 1,
                shadowOffsetX: '0',
                shadowOffsetY: '2',
              },
              a: {
                padding: [-35, 15, -20, 5],
              }
            }
          },
          labelLine: {
            normal: {
              length: 20,
              length2: 30,
              lineStyle: {
                width: 1,
              }
            }
          },
        }],
      })
    }
  }
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