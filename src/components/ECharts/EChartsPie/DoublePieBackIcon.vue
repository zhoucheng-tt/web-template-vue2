<!--
 * @Description: 双层饼图 加背景 加图标 DoublePieBackIcon
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-12-31 13:37:27
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
      this.chart = echarts.init(document.getElementById('oneCharts'));
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
            radius: ['65%', '75%'],
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
            data: [
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
            ],
            labelLine: {
              show: false,
            },
          },
          {
            type: 'pie',
            radius: ['54%', '64%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            label: {
              show: false,
            },
            data: [
              {
                value: 40,
                name: 'a',
                itemStyle: {
                  color: '#0995F7',
                  opacity: 0.4,
                },
              },
              {
                value: 60,
                name: 'b',
                itemStyle: {
                  color: '#23F1F3',
                  opacity: 0.4,
                },
              }
            ],
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
  .item {
    width: 100%;
    height: 100%;
  }
}
</style>