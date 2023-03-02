/*
 * @Description: 自定义 防抖指令
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-07-02 16:50:33
 * @LastEditors: zhoucheng
 */
import Vue from 'vue'

Vue.directive('debounce', {
  inserted: function (el, binding) {
    // 计时器
    let timer;
    el.addEventListener("click", () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        // 关键点：vue的自定义指令传递的参数binding如果是一个函数，则通过binding.value()来执行
        binding.value();
      }, 500)
    })
  }
});