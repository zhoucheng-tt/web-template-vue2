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
         id="pieChartFirst"
         :options="pieChartOptions">
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import resize from '@/components/mixins/resize'
import * as echarts from 'echarts'
import commonData from '@/data/commonData'
import colorList from '@/data/commonColor'

export default {
  mixins: [resize],
  // import引入的组件需要注入到对象中才能使用
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
      pieChartOptions: {}
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
      this.chart = echarts.init(document.getElementById('pieChartFirst'))
      this.chart.setOption({
        color: colorList,
        legend: {
          icon: "rect",
          orient: 'vertical',
          right: '5%',
          top: '13%',
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 30,
          textStyle: {
            align: "left",
            color: "#",// 设置跟图标颜色相同
            verticalAlign: "middle",
            rich: {
              name: {
                width: 80,
                fontSize: 16,
              },
              value: {
                width: 20,
                align: "right",
                fontFamily: "Medium",
                fontSize: 16,
              },
              rate: {
                width: 10,
                align: "right",
                fontSize: 16,
              },
            },
          },
          data: commonData,
          formatter: (name) => {
            if (commonData.length) {
              const item = commonData.filter((item) => item.name === name)[0];
              return `{name|${name}}{value| ${item.value}} {rate| 个}`;
            }
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{d}%",
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["30%", "80%"],
            center: ["35%", "50%"],
            roseType: "radius",
            label: {
              formatter: "{d}%",
            },
            labelLine: {
              length: 1,
              length2: 20,
            },
            data: commonData,
          },
        ],
      });
    },
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