/*
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-10-10 10:09:50
 * @LastEditors: zhoucheng
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import '@/styles/index.scss'
Vue.use(ElementUI)
import store from './store'
// 路由
import router from "./router/index";

// 封装axios
import api from './axios/index'
Vue.use(api)

// axios
import axios from 'axios'
Vue.prototype.$axios = axios


// 通用json
import commonData from '@/data/commonData.json'
Vue.prototype.$commonData = commonData
import commonColor from '@/data/commonColor.json'
Vue.prototype.$commonColor = commonColor

// 原型修改
import publicVar from './utils/publicVar'
Vue.use(publicVar)

// 时间
import '@/commons/date.js'

// 防连点指令
import directives from '@/commons/preventReClick.js'
Vue.use(directives)

// 使用echarts npm install --save echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 使用深拷贝
import deepClone from '@/commons/deepClone.js'
Vue.prototype.$deepClone = deepClone

// VideoPlayer
import VideoPlayer from 'vue-video-player'
import 'videojs-flash'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

import flvjs from 'flv.js'
Vue.use(flvjs)


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
