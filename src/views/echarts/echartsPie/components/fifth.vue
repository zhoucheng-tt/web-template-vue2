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
    <div class="content">
      <el-row class="item"
              id="pieChartFifth"
              :options="pieChartOptions">
      </el-row>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import resize from '@/components/mixins/resize'
import * as echarts from 'echarts'
import commonData from '@/data/commonData'
// import colorList from '@/data/commonColor'
export default {
  mixins: [resize],
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    contentName () {
      String
    },
  },
  data () {
    //这里存放数据
    return {
      chart: null,
      pieChartOptions: {},
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
      this.chart = echarts.init(document.getElementById('pieChartFifth'));
      let colorList = [
        {
          type: 'linear',
          colorStops: [
            {
              offset: 1,
              color: 'rgba(50, 111, 220, 1)',
            },
          ],
        }, {
          type: 'linear',
          colorStops: [
            {
              offset: 1,
              color: 'rgba(8, 246, 228, 1)',
            },
          ],
        }, {
          type: 'linear',
          colorStops: [
            {
              offset: 1,
              color: 'rgba(178, 221, 157, 1)',
            },
          ],
        }, {
          type: 'linear',
          colorStops: [
            {
              offset: 1,
              color: 'rgba(123, 86, 241, 1)',
            },
          ],
        },
      ];
      let chartData = [];
      let legendData = []
      let nameList = []
      let valueList = []
      commonData.forEach(item => {
        legendData.push({ name: item.name })
        nameList.push(item.name);
        valueList.push(item.value);
      })
      nameList.map((item, idx) => {
        chartData.push({
          name: item,
          value: valueList[idx],
        });
      });
      let arrName = [];
      let arrValue = [];
      let sum = 0;
      let pieSeries = []
      let lineYAxis = [];
      // 数据处理
      chartData.forEach((v) => {
        arrName.push(v.name);
        arrValue.push(v.value);
        sum = sum + v.value;
      });
      function getRadius (i) {
        return [67 - i * 12 + '%', 59 - i * 12 + '%'];
      }
      // 图表option整理
      chartData.forEach((v, i) => {
        pieSeries.push({
          name: '',
          type: 'pie',
          clockWise: true,
          hoverAnimation: true,
          radius: getRadius(i),
          center: ['60%', '55%'],
          itemStyle: {
            color: colorList[i],
          },
          label: {
            show: false,
          },
          data: [
            {
              value: v.value,
              name: v.name,
            }, {
              value: sum - v.value,
              name: '',
              itemStyle: {
                color: 'rgba(0,0,0,0)',
              },
            },
          ],
        });
        v.percent = ((v.value / sum) * 100).toFixed(2);
        lineYAxis.push({
          value: i,
          textStyle: {
            rich: {
              circle: {
                color: colorList[i],
              },
            },
          },
        });
      });
      this.chart.setOption({
        tooltip: {
          backgroundColor: '',
          borderWidth: 0,
          trigger: 'item',
        },
        color: colorList,
        grid: {
          top: '15%',
          bottom: '50%',
          left: '60%',
          containLabel: false,
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              formatter: function (params) {
                let item = chartData[params];
                return '{name|' + item.name + '}';
              },
              interval: 0,
              inside: false,
              textStyle: {
                fontSize: 12,
                rich: {
                  name: {
                    fontSize: 12,
                    paddingLeft: 20,
                  },
                },
              },
              show: true,
            },
            data: lineYAxis,
          },
        ],
        legend: [{
          data: legendData.slice(0, 2),
          orient: 'vertical',
          align: "left",
          top: '40%',
          left: '5%',
          type: 'plain',
          textStyle: {
            color: '#000000',
            fontSize: 12
          },
          icon: 'circle',
          itemGap: 30,
          itemWidth: 10,
          formatter: (name) => {
            var datas = commonData;
            let total = 0;
            datas.map(item => {
              total += (item.value - 0)
            })
            let valueIndex = datas.map(item => item.name).indexOf(name);
            return name + "  " + ((datas[valueIndex].value / total) * 100).toFixed(2) + "%";
          },
        }, {
          data: legendData.slice(2, 4),
          orient: 'vertical',
          align: "left",
          top: '40%',
          left: '26%',
          type: 'plain',
          textStyle: {
            color: '#000000',
            fontSize: 12
          },
          icon: 'circle',
          itemGap: 30,
          itemWidth: 10,
          formatter: (name) => {
            var datas = commonData;
            let total = 0;
            datas.map(item => {
              total += (item.value - 0)
            })
            let valueIndex = datas.map(item => item.name).indexOf(name);
            return name + "  " + ((datas[valueIndex].value / total) * 100).toFixed(2) + "%";
          },
        }],
        xAxis: [
          {
            show: false,
          },
        ],
        series: pieSeries,
      })
    },
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
    .item {
      width: 100%;
      height: 100%;
    }
  }
}
</style>