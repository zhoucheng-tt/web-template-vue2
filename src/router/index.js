// 注册路由地址
import Vue from "vue";
import VueRouter from "vue-router";
import main from "@/components/layout/main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/homePage",
    name: "homePage",
    component: () => import("@/views/homePage/index.vue"),
    meta: {
      name: "首页",
      icon: "",
      type: "list"
    }
  },
  // 重定向，也就是相当于定位到默认展示的一个页面
  {
    path: "/",
    name: "main",
    component: main,
    redirect: "/homePage",
    meta: {
      name: "登陆",
      icon: ""
    },
    children: [
      {
        path: "/highchartsPie",
        name: "highchartsPie",
        component: () => import("@/views/highcharts/highchartsPie/index.vue"),
        meta: {
          name: "highcharts-饼图",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/echartsPie",
        name: "echartsPie",
        component: () => import("@/views/echarts/echartsPie/index.vue"),
        meta: {
          name: "echarts-饼图",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/echartsLine",
        name: "echartsLine",
        component: () => import("@/views/echarts/echartsLine/index.vue"),
        meta: {
          name: "echarts-线图",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/echartsColumn",
        name: "echartsColumn",
        component: () => import("@/views/echarts/echartsColumn/index.vue"),
        meta: {
          name: "echarts-柱状图",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/dynamicEffect",
        name: "dynamicEffect",
        component: () => import("@/views/css/dynamicEffect/index.vue"),
        meta: {
          name: "css-动效",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/dynamicBackground",
        name: "dynamicBackground",
        component: () => import("@/views/css/dynamicBackground/index.vue"),
        meta: {
          name: "css-文字背景",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/loadingAnimation",
        name: "loadingAnimation",
        component: () => import("@/views/css/loadingAnimation/index.vue"),
        meta: {
          name: "css-文字背景",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/animationExample",
        name: "animationExample",
        component: () => import("@/views/css/animationExample/index.vue"),
        meta: { name: "css-动画样例", icon: "", type: "list" }
      },
      {
        path: "/hoverCat",
        name: "hoverCat",
        component: () => import("@/views/css/hoverCat/index.vue"),
        meta: { name: "css-悬浮猫头", icon: "", type: "list" }
      },
      {
        path: "/textEffect",
        name: "textEffect",
        component: () => import("@/views/css/textEffect/index.vue"),
        meta: { name: "css-文本效果", icon: "", type: "list" }
      },
      {
        path: "/speacialCss",
        name: "speacialCss",
        component: () => import("@/views/css/speacialCss/index.vue"),
        meta: { name: "css-特殊样式", icon: "", type: "list" }
      },
      {
        path: "/flashback",
        name: "flashback",
        component: () => import("@/views/loginShow/flashback/index.vue"),
        meta: {
          name: "登陆页-产品登录页",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/dynamicForm",
        name: "dynamicForm",
        component: () => import("@/views/element/dynamicForm/index.vue"),
        meta: {
          name: "饿了么组件-动态表单",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/commonJs",
        name: "commonJs",
        component: () => import("@/views/commonJs/index.vue"),
        meta: {
          name: "公共方法组件",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/amapMap",
        name: "amapMap",
        component: () => import("@/views/amapMap/amapMap/index.vue"),
        meta: { name: "高德地图", icon: "", type: "list" }
      },
      {
        path: "/thermodynamic",
        name: "thermodynamic",
        component: () => import("@/views/amapMap/thermodynamic/index.vue"),
        meta: { name: "高德地图-热力图", icon: "", type: "list" }
      },
      {
        path: "/baiduMap",
        name: "baiduMap",
        component: () => import("@/views/baiduMap/baiduMap/index.vue"),
        meta: { name: "百度地图", icon: "", type: "list" }
      },
      {
        path: "/checkTrueCode",
        name: "checkTrueCode",
        component: () => import("@/views/checkTrueCode/index.vue"),
        meta: {
          name: "验证码",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/test",
        name: "test",
        component: () => import("@/views/test/index.vue"),
        meta: { name: "测试", icon: "", type: "list" }
      },
      {
        path: "/hls",
        name: "hls",
        component: () => import("@/views/videoShow/hls/index.vue"),
        meta: { name: "hls", icon: "", type: "list" }
      },
      {
        path: "/rtmp",
        name: "rtmp",
        component: () => import("@/views/videoShow/rtmp/index.vue"),
        meta: { name: "rtmp", icon: "", type: "list" }
      },
      {
        path: "/websocket",
        name: "websocket",
        component: () => import("@/views/videoShow/websocket/index.vue"),
        meta: { name: "websocket", icon: "", type: "list" }
      },
      {
        path: "/flv",
        name: "flv",
        component: () => import("@/views/videoShow/flv/index.vue"),
        meta: { name: "flv", icon: "", type: "list" }
      },
    ]
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
