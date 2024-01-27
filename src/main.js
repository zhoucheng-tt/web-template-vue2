/*
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-10-10 10:09:50
 * @LastEditors: zhoucheng
 */
import './public-path';


import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import '@/styles/index.scss'
import store from './store'
import router from "./router/index";
import api from './axios/index'
Vue.use(api)
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
import preventReClick from '@/commons/preventReClick.js'
Vue.use(preventReClick)
import debounce from '@/commons/debounce.js'
Vue.use(debounce)

// 使用echarts npm install --save echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// 3d图表库
import 'echarts-gl'

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

let instance = null;
function render (props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 如何独立运行微应用？
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap (props) {
  // 启动
  console.log(props);
}
export async function mount (props) {
  // 挂载  onGlobalStateChange 可通过这个属性来进行父子应用通信 发布订阅机制
  render(props);
}
export async function unmount (props) {
  console.log(props);
  // 卸载
  instance.$destroy();
}

// Vue.config.productionTip = false
// new Vue({
//   router,
//   store,
//   render: h => h(App),
// }).$mount('#app')
