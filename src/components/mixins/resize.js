/*
 * @Description:重新加载页面
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-11-26 11:56:22
 * @LastEditors: zhoucheng
 */
import { debounce } from '@/utils'

export default {
  data () {
    return {
      $_resizeHandler: null
    }
  },
  mounted () {
    this.$_resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    this.$_initResizeEvent()
  },
  beforeDestroy () {
    this.$_destroyResizeEvent()
  },
  activated () {
    this.$_initResizeEvent()
  },
  deactivated () {
    this.$_destroyResizeEvent()
  },
  methods: {
    // 初始化方法
    $_initResizeEvent () {
      window.addEventListener('resize', this.$_resizeHandler)
    },
    $_destroyResizeEvent () {
      window.removeEventListener('resize', this.$_resizeHandler)
    },
    $_sidebarResizeHandler (e) {
      if (e.propertyName === 'width') {
        this.$_resizeHandler()
      }
    },
  }
}
