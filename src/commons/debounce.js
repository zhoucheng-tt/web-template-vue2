/*
 * @Description: 自定义 防抖指令
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-07-02 16:50:33
 * @LastEditors: zhoucheng
 */
export default {
  install (Vue) {
    Vue.directive('debounce', {
      inserted: function (el, binding) {
        let throttleTime = binding.value // 防抖时间
        if (!throttleTime) {
          throttleTime = 1000 // 不设置防抖时间，则默认1s
        }
        let timer = null
        let disable = false
        el.addEventListener("click", (event) => {
          console.log(event);
          if (timer) {
            clearTimeout(timer)
          }
          if (!disable) {
            // 第一次执行(一点击触发当前事件)
            disable = true
          } else {
            event && event.stopImmediatePropagation()
          }
          timer = setTimeout(() => {
            timer = null
            disable = false
          }, throttleTime)
        }, true
        )
      }
    })
  }
}