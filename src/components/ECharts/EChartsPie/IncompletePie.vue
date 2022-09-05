<!--
 * @Description: echarts 半环形饼图 IncompletePie
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-12-31 15:06:46
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
      oneCharts: "",
      oneChartsOptions: {},
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
    this.queryOneCharts()
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
    queryOneCharts () {
      this.chart = echarts.init(document.getElementById('twoCharts'));
      let legendData = [{ name: '其他' }, { name: '现金' }, { name: '微信' }, { name: '支付宝' }]
      let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF'];
      let nameList = ['其他', '现金', '微信', '支付宝'];
      let valueList = [250, 200, 150, 100];
      let datalist = [{ name: '其他', value: 250 }, { name: '现金', value: 200 }, { name: '微信', value: 150 }, { name: '支付宝', value: 100 }]
      let colorList = [
        {
          type: 'linear',
          colorStops: [
            {
              offset: 1,
              color: 'rgba(50, 111, 220, 1)',
            },
          ],
        },
        {
          type: 'linear',
          colorStops: [
            {
              offset: 1,
              color: 'rgba(8, 246, 228, 1)',
            },
          ],
        },
        {
          type: 'linear',
          colorStops: [
            {
              offset: 1,
              color: 'rgba(178, 221, 157, 1)',
            },
          ],
        },
        {
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
          hoverAnimation: false,
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
            },
            {
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
                color: color[i],
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
        color: color,
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
                color: '#000000',
                fontSize: 12,
                rich: {
                  name: {
                    color: '#000000',
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
        legend: [
          {
            data: legendData.slice(0, 2),
            orient: 'vertical',
            align: "left",
            top: '40%',
            left: '10%',
            type: 'plain',
            textStyle: {
              color: '#000000',
              fontSize: 12
            },
            icon: 'circle',
            itemGap: 30,
            itemWidth: 10,
            formatter: (name) => {
              var datas = datalist;
              let total = 0;
              datas.map(item => {
                total += (item.value - 0)
              })
              let valueIndex = datas.map(item => item.name).indexOf(name);
              return name + "  " + ((datas[valueIndex].value / total) * 100).toFixed(2) + "%";
            },
          },
          {
            data: legendData.slice(2, 4),
            orient: 'vertical',
            align: "left",
            top: '40%',
            left: '30%',
            type: 'plain',
            textStyle: {
              color: '#000000',
              fontSize: 12
            },
            icon: 'circle',
            itemGap: 30,
            itemWidth: 10,
            formatter: (name) => {
              var datas = datalist;
              let total = 0;
              datas.map(item => {
                total += (item.value - 0)
              })
              let valueIndex = datas.map(item => item.name).indexOf(name);
              return name + "  " + ((datas[valueIndex].value / total) * 100).toFixed(2) + "%";
            },
          }
        ],
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
  .item {
    width: 100%;
    height: 100%;
  }
}
</style>