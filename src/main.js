import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import '@/styles/index.scss'
import router from "./router/index";
import store from './store'
Vue.use(ElementUI)

import VideoPlayer from 'vue-video-player'
import 'videojs-flash'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

import flvjs from 'flv.js'
Vue.use(flvjs)


// 全局js
import './commons/date.js'
import axios from 'axios'
Vue.prototype.$axios = axios

// 使用echarts npm install --save echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
