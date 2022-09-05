<!--
 * @Description: 玫瑰实心饼图 rosesSolidPieChart
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-01-20 10:22:18
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="item"
            id="rosesSolidPieChart"
            :options="rosesSolidPieChartOptions">
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
      rosesSolidPieChart: "",
      rosesSolidPieChartOptions: {}
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
    this.queryRosesSolidPieChart()
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
    queryRosesSolidPieChart () {
      this.chart = echarts.init(document.getElementById('rosesSolidPieChart'));
      this.chart.setOption({
        backgroundColor: '',
        color: ['#cd4692', '#9658c3', '#6c6be2', '#01aebf', '#18b794'],
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}$ ({d}%)",
          textStyle: {
            fontSize: 16,
          },
        },
        legend: {
          data: ['A', 'B', 'C', 'D', 'E'],
          orient: 'vertical',
          right: '5%',
          top: '13%',
          itemWidth: 50,
          itemHeight: 50,
          itemGap: 30,
          textStyle: {
            color: '#',
            fontSize: 16,
          },
        },
        series: [{
          name: 'TITLE',
          type: 'pie',
          clockwise: false,
          startAngle: 90,
          radius: '75%',
          center: ['44%', '50%'],
          hoverAnimation: false,
          roseType: 'radius', //area
          data: [{
            value: 335,
            name: 'A'
          },
          {
            value: 310,
            name: 'B'
          },
          {
            value: 234,
            name: 'C'
          },
          {
            value: 135,
            name: 'D'
          },
          {
            value: 148,
            name: 'E'
          }
          ],
          itemStyle: {
            normal: {
              borderColor: '#273454',
              borderWidth: '5',
            },
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
              hr: {
                backgroundColor: 't',
                borderRadius: 100,
                width: 0,
                height: 10,
                padding: [3, 3, 0, -16],
                shadowColor: '#1c1b3a',
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
          // label: {
          //     normal: {
          //         show: true, 
          //         position: 'inside', 
          //         formatter: '{d}%', 
          //         formatter: function(data){
          //             return data.percent.toFixed(0)+"%"; 
          //         },
          //         textStyle : { 
          //             align : 'center',
          //             baseline : 'middle',
          //             fontFamily : '微软雅黑',
          //             fontSize : 15,
          //             fontWeight : 'bolder'
          //         }
          //     },
          // },
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
  .item {
    width: 100%;
    height: 100%;
  }
}
</style>