<!--
 * @Description: 验证码组件
 * @Author: yanxiao
 * @Github:
 * @Date: 2021-05-21 16:13:02
 * @LastEditors: zhoucheng
-->
<template>
  <canvas id="canvas"
          width="130px"
          height="50px"
          @click="changeCode"></canvas>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    code: {
      type: String,
      default: () => {
        let txt = ''
        const str = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789'
        for (let i = 0; i < 4; i++) {
          // 随机生成文字
          txt += str[Math.floor(Math.random() * (str.length - 0) + 0)]
        }
        return txt
      }
    }
  },
  model: {
    prop: 'code',
    event: 'change'
  },
  data () {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    code () {
      this.drawPic()
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.drawPic()
  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {
    /** 绘制验证码图片**/
    drawPic () {
      const canvas = document.getElementById('canvas')
      const width = canvas.width
      const height = canvas.height
      const ctx = canvas.getContext('2d')
      ctx.textBaseline = 'bottom'

      /** 绘制背景色**/
      ctx.fillStyle = this.randomColor(180, 240) // 颜色若太深可能导致看不清
      ctx.fillRect(0, 0, width, height)
      /** 绘制文字**/
      for (const index in this.code) {
        ctx.fillStyle = this.randomColor(50, 160) // 随机生成字体颜色
        ctx.font = this.randomNum(20, 40) + 'px SimHei' // 随机生成字体大小
        const x = 10 + index * 30
        const y = this.randomNum(25, 45)
        const deg = this.randomNum(-45, 45)
        // 修改坐标原点和旋转角度
        ctx.translate(x, y)
        ctx.rotate(deg * Math.PI / 180)
        ctx.fillText(this.code[index], 0, 0)
        // 恢复坐标原点和旋转角度
        ctx.rotate(-deg * Math.PI / 180)
        ctx.translate(-x, -y)
      }
      /** 绘制干扰线**/
      for (let i = 0; i < 6; i++) {
        ctx.strokeStyle = this.randomColor(40, 180)
        ctx.beginPath()
        ctx.moveTo(this.randomNum(0, width), this.randomNum(0, height))
        ctx.lineTo(this.randomNum(0, width), this.randomNum(0, height))
        ctx.stroke()
      }
      /** 绘制干扰点**/
      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = this.randomColor(0, 255)
        ctx.beginPath()
        ctx.arc(this.randomNum(0, width), this.randomNum(0, height), 1, 0, 2 * Math.PI)
        ctx.fill()
      }
    },
    /** 生成一个随机数**/
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    /** 生成一个随机色**/
    randomColor (min, max) {
      const r = this.randomNum(min, max)
      const g = this.randomNum(min, max)
      const b = this.randomNum(min, max)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },
    /** 点击验证码切换 **/
    changeCode () {
      this.$emit('changeCode')
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
