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
         id="pieChartFourth"
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
      this.chart = echarts.init(document.getElementById('pieChartFourth'));
      let dataListOut = [
        {
          value: 40,
          name: 'a',
          itemStyle: {
            color: '#0995F7',
          },
        },
        {
          value: 60,
          name: 'b',
          itemStyle: {
            color: '#23F1F3',
          },
        }
      ]
      let dataListIn = [{
        value: 40,
        name: 'a',
        itemStyle: {
          color: '#0995F7',
          opacity: 0.4,
        },
      }, {
        value: 60,
        name: 'b',
        itemStyle: {
          color: '#23F1F3',
          opacity: 0.4,
        },
      }]
      this.chart.setOption({
        title: {
          text: '',
        },
        tooltip: {
          show: true,
        },
        graphic: {
          elements: [
            {
              type: "image",
              style: {
                image: require("@/assets/echarts/circle.png"),
                width: 250,
                height: 250,
              },
              top: 'center',
              left: 'center'
            },
            {
              type: "image",
              style: {
                image: require("@/assets/echarts/insideIcon.png"),
                width: 100,
                height: 100,
              },
              top: 'center',
              left: 'center'
            },
          ],
        },
        series: [
          {
            type: 'pie',
            radius: ['62%', '72%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            z: 10,
            label: {
              normal: {
                position: 'inner',
                show: false
              },
              rich: {
                total: {
                  fontSize: 30,
                  color: '#fff',
                },
              },
              color: '#7a8c9f',
              fontSize: 16,
              lineHeight: 30,
            },
            data: dataListOut,
            labelLine: {
              show: false,
            },
          },
          {
            type: 'pie',
            radius: ['52%', '62%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            label: {
              show: false,
            },
            data: dataListIn,
            labelLine: {
              show: false,
            },
          }
        ],
      })
    }
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