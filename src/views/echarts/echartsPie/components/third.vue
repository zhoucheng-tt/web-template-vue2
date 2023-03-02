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
         id="pieChartThird"
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
      this.chart = echarts.init(document.getElementById('pieChartThird'));
      let datalist = this.dataList;
      let color = this.colorList
      let legendData = []
      this.dataList.forEach(item => {
        legendData.push(item.name)
      })
      this.chart.setOption({
        backgroundColor: "",
        color: color,
        legend: {
          data: legendData,
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
          type: 'pie',
          clockwise: false, //饼图的扇区是否是顺时针排布
          minAngle: 2, //最小的扇区角度（0 ~ 360）
          radius: ["45%", "65%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          itemStyle: { //图形样式
            normal: {
              borderColor: '#333333',
              borderWidth: 3,
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
          data: datalist
        }]
      });

      setTimeout(function () {
        this.chart.on('mouseover', function (params) {
          if (params.name == datalist[0].name) {
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