<!--
 * @Description: highcharts的3D饼图
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-11-30 09:36:19
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="charts"
            id="oneCharts"
            :options="oneChartsOptions"></el-row>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      oneCharts: "",
      oneChartsOptions: {}
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
    // 初始化图表
    queryOneCharts () {
      var each = window.Highcharts.each,
        round = Math.round,
        cos = Math.cos,
        sin = Math.sin,
        deg2rad = Math.deg2rad;
      window.Highcharts.wrap(window.Highcharts.seriesTypes.pie.prototype, 'translate', function (proceed) {
        proceed.apply(this, [].slice.call(arguments, 1));
        if (!this.chart.is3d()) {
          return;
        }
        var series = this,
          chart = series.chart,
          options = chart.options,
          seriesOptions = series.options,
          depth = seriesOptions.depth || 0,
          options3d = options.chart.options3d,
          alpha = options3d.alpha,
          beta = options3d.beta,
          z = seriesOptions.stacking ? (seriesOptions.stack || 0) * depth : series._i * depth;
        z += depth / 2;
        if (seriesOptions.grouping !== false) {
          z = 0;
        }
        each(series.data, function (point) {
          var shapeArgs = point.shapeArgs,
            angle;
          point.shapeType = 'arc3d';
          var ran = point.options.h;
          shapeArgs.z = z;
          shapeArgs.depth = depth * 0.75 + ran;
          shapeArgs.alpha = alpha;
          shapeArgs.beta = beta;
          shapeArgs.center = series.center;
          shapeArgs.ran = ran;
          angle = (shapeArgs.end + shapeArgs.start) / 2;
          point.slicedTranslation = {
            translateX: -round(cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)),
            translateY: -round(sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad))
          };
        });
      });
      (function (H) {
        H.wrap(window.Highcharts.SVGRenderer.prototype, 'arc3dPath', function (proceed) {
          var ret = proceed.apply(this, [].slice.call(arguments, 1));
          ret.zTop = (ret.zOut + 0.5) / 100;
          return ret;
        });
      }(window.Highcharts));
      // 图标渲染
      this.oneChartsOptions = {
        chart: {
          backgroundColor: "rgba(0,0,0,0)", // 设置背景颜色
          type: 'pie',
          renderTo: "oneCharts",
          plotBackgroundImage: require("@/assets/highcharts/BrowserPreview_tmp-2.gif"),
          options3d: {
            enabled: true, // 给饼图添加3d效果
            alpha: 55, // 控制饼图的倾斜角度
          },
          marginLeft: 100,
          marginRight: 100,
          marignTop: 100,
          // 显示饼图高低效果
          events: {
            load: function () {
              var each = window.Highcharts.each,
                points = this.series[0].points;
              each(points, function (p) {
                p.graphic.attr({
                  translateY: -p.shapeArgs.ran
                });
                p.graphic.side1.attr({
                  translateY: -p.shapeArgs.ran
                });
                p.graphic.side2.attr({
                  translateY: -p.shapeArgs.ran
                });
              });
            }
          }
        },
        credits: {
          enabled: false // 不显示官网版权
        },
        // 图标配置
        plotOptions: {
          pie: {
            allowPointSelect: false, // 禁止点击效果
            cursor: 'pointer',  // 鼠标悬浮上去是小手
            depth: 25, // 饼图总体高度
            innerSize: 70, // 中心距离的大小
            showInLegend: true, // 是否展示图例
            dataLabels: {
              enabled: false // 每项数据线是否展示
            },
          }
        },
        // 标题
        title: {
          text: '3D饼图+背景图',
          align: 'left',
          style: {
            color: "#333333",
          }
        },
        // {
        //        radialGradient: {
        //            cx: 0.5,
        //            cy: 0.3,
        //            r: 0.7
        //        },
        //        stops: [
        //            [0, RemainingColor1],
        //            [1, RemainingColor2]
        //        ]
        //    }
        // 饼图色系
        colors: ["#007AFF", "#E9C503", "#03D7E9"],
        // 图例
        legend: {
          layout: "horizontal",
          align: "right",
          verticalAlign: "top",
          // 给图例添加占比保留小数点后两位
          labelFormatter: function () {
            return this.name + " " + this.percentage.toFixed(2) + "%";
          },
          itemStyle: {
            color: "#black",
            fontSize: "14px"
          },
          itemHoverStyle: {
            color: "#cccccc"
          }
        },
        // 饼图数据
        series: [{
          type: 'pie',
          name: '3D饼图数据',
          data: [
            { name: 'a', y: 30, h: 10 },
            { name: 'b', y: 26, h: 6 },
            { name: 'c', y: 12, h: 3 }
          ]
        }]
      };
      new window.Highcharts.chart(this.oneChartsOptions);
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
  .charts {
    width: 100%;
    height: 100%;
  }
}
</style>