/*
 * @Description: 防止用户连点操作 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-03-18 15:26:11
 * @LastEditors: zhoucheng
 */
export default {
  // 防重复点击(指令实现)
  install (Vue) {
    Vue.directive('preventRepeat', {
      inserted (el, binding) {
        console.log(el, binding);
        function __avoidRepeatHandler__ () {
          if (el.__clickDisabled__) return
          el.__clickDisabled__ = true
          el.__originalPointerEvents__ = el.style.pointerEvents
          el.style.pointerEvents = 'none'
          setTimeout(() => {
            el.__clickDisabled__ = false
            el.style.pointerEvents = el.__originalPointerEvents__
          }, binding.value || 1000)
        }
        el.addEventListener('click', __avoidRepeatHandler__)
        el.__avoidRepeatHandler__ = __avoidRepeatHandler__
      },
      unbind (el) {
        el.removeEventListener('click', el.__avoidRepeatHandler__)
        delete el.__clickDisabled__
        delete el.__originalPointerEvents__
      }
    })
  }
}