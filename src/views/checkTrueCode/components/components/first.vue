<!--
 * @Description: 点击文字验证码
 * @Author: zhouchneg
 * @Github: 
 * @Date: 2021-12-31 16:54:55
 * @LastEditors: zhoucheng
-->
<template>
  <div class='main'>
    <div class="title">
      <div class="titleLeft">
        <img @click="produceHanzi"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAELklEQVRYR+2YW2wUZRTH//9vtlCoF9IoIklT3PqgPGi326hoetuaGEhIr9SgCYkkgt2WGOQVCca+GavWdr0GjD4YhG3RB3hply1LQA1tEQIxEXapGI2pEkys9LIzx2ylYWfY6e5sF0oi+7hzzvl+3/9855xvhrjNf7zN+XAHcL4Z+n8o6JWTeYt++W25S596AIZy6TB+n3yo+Nchlk8vmIIVowdXU9c3Q1gDSilBlQwjgBAYFGDvdF58/4milqvZwDpOcXWsb5Uh8hmBqkwXFMhlCN8aX5LXNbRy/T+Z+iXsHAFWRXs3QGQPyLucLDJrK5DgUXdTsxPfjAEro8E3Ce50EtxsKxPTwCPH3U2jTmJkBJgWTnAMxDeGMEoa0xQ+LJQnCD4HYFkCyAC3RdwN3U7gMkpxRTTYrMD91sCJIgCxV5R6O1Jcfy7VwonqLoj9/CqB2kF341qncGkBvRe+ureAWpRgoalCBecMFzcdK24YymZRJz5zprgq1tsJwXYL3CVZGvdGHmwZc7JQtra2gE+f712ep2QUYP714DJhaJrXLqXZQszlZwtYdSHoB9ljVk/ePVrSZFL0ZkAlxzQBVseCT8WhZhRThtFB8plk9Zi/qCi8cv0fNxvKFrDy4oF11NXXIFy2EII4iBcG3Y03VLZT8OqRd5aFPduvOEpxRayvXolxAKB2g6NgEhobBlc1HHYKY7WvHf5wtVAPgegIlbbZ9seUZ7AyFnwewi9pGoUyDmhrB931kfnC1ZwOeKlLP8GZJi6QLSFP2yep4toXSbT3ZQAfX3O6omt8Nhd9r/aHQAUMOQywYBZo5uZD2ThQ2rbPCjlnH6yI9rUryE5DU75ctJaake46Be4DuDjF8dFBNA94/AdtiySVxIlpMlTS8td801o70vMigM9huTda2lhcKHVHPO2HZv/P6LIwX7hk/+qzPSvUJGMkrg8AQYTkroRdXMlE+HH/twsG6BsOdJHYZlaO/lBZ6weOiiSXqs3Gqj0TeAxx+T75DIpgwjC0onD51pQD4JaluPrkR/cpFT9DcoVp84LOgTL/DjtBbglgou+puHwB8lEznPxJw1XSX77VtgizBvQNBw4RMqB7xt4Lc3c8lQKJaQHoO4R8ydz0/7MWoCXk8c85MrMC9J3qaafw/WtQlwXST+F3BnAeYB4obgJ1BJIuG+YtiKAjVOZ/Pd1ZdwzoG+4uBtSPpjaRbhXLcwF3hzytb2TilgVgT5BkYybBrTYC+Rvg5nRpdTRJrIs8+VPXPQXj2i4ItxC4O2NQQUQnN4U9rRcz9nH64p4ceM2lziX5Y4s3KHCdUHwE77ecMkMEp6BwhIa2Z6DslZRvfulgHafYLuCas58WLp2aLCFUga70qxOFU6dPFL2W1feYeaU43Y5z/TxnCuYabMEuC043ckdBp4pZ7f8FE5psOI1g6fwAAAAASUVORK5CYII="
             style="width:30px;height: 30px;"
             alt="">
      </div>
      <div>点击文字验证</div>
      <div class="titleRight">
        <span @click="handleClose">X</span>
      </div>
    </div>
    <!-- 文字 -->
    <div class="content">
      <div class="masking"
           @click="clickContent"></div>
      <span :style="getStyle[0]">{{hanziList[0]}}</span>
      <span :style="getStyle[1]">{{hanziList[1]}}</span>
      <span :style="getStyle[2]">{{hanziList[2]}}</span>
      <span :style="getStyle[3]">{{hanziList[3]}}</span>
    </div>
    <div class="tip">
      <span>请依次点击:</span>
      <span class="tip-text">{{hanziList[0]}}</span>
      <span class="tip-text">{{hanziList[1]}}</span>
      <span class="tip-text">{{hanziList[2]}}</span>
      <span class="tip-text">{{hanziList[3]}}</span>
      <div class="but"
           @click="confirm">确认</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {
      // 点击的次数
      clickCount: 0,
      // 点击的每个点是否正确
      poitisTrue: [],
      // 随机生成的汉字列表
      hanziList: [],
      // 汉字点位列表
      poitList: [],

      hanziPoitList: [
        {
          left: 0,
          top: 0,
        },
        {
          left: 0,
          top: 0,
        },
        {
          left: 0,
          top: 0,
        },
        {
          left: 0,
          top: 0,
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {
    getStyle () {
      return [
        {
          position: 'absolute',
          left: this.hanziPoitList[0].left + 'px',
          top: this.hanziPoitList[0].top + 'px',
          transform: `rotate(${this.randNum(-35, 35)}deg)`
        },
        {
          position: 'absolute',
          left: this.hanziPoitList[1].left + 'px',
          top: this.hanziPoitList[1].top + 'px',
          transform: `rotate(${this.randNum(-35, 35)}deg)`
        },
        {
          position: 'absolute',
          left: this.hanziPoitList[2].left + 'px',
          top: this.hanziPoitList[2].top + 'px',
          transform: `rotate(${this.randNum(-35, 35)}deg)`
        },
        {
          position: 'absolute',
          left: this.hanziPoitList[3].left + 'px',
          top: this.hanziPoitList[3].top + 'px',
          transform: `rotate(${this.randNum(-35, 35)}deg)`
        },
      ]
    }
  },
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.produceHanzi();
  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
  //方法集合
  methods: {
    // 确认按钮点击
    confirm () {
      let ver = this.poitisTrue.includes(false) ? false : true
      if (this.poitisTrue.length === 4) {
        this.$emit('confirm', ver)
      } else {
        this.$emit('confirm', false)
      }
    },
    // 点击事件
    clickContent (ev) {
      if (this.clickCount > 3) {
        return
      }
      let left = ev.layerX
      let top = ev.layerY
      let ver = this.verdict(left, top)
      this.poitisTrue.push(ver)
      this.clickCount++
      this.createDom(left, top, this.clickCount)
    },
    // 判断点击是否正确
    verdict (clickLeft, clickTop) {
      let left = this.hanziPoitList[this.clickCount].left
      let top = this.hanziPoitList[this.clickCount].top
      if (clickLeft > left - 42 && clickLeft < left + 42 && clickTop > top - 50 && clickTop < top + 50) {
        return true
      } else {
        return false
      }
    },
    // 创建dom
    createDom (left, top, num) {
      let div = document.createElement("div")
      div.innerText = num
      div.style.position = 'absolute'
      div.style.left = left - 15 + 'px'
      div.style.top = top - 15 + 'px'
      div.style.width = '30px'
      div.style.height = '30px'
      div.style.borderRadius = '50%'
      div.style.color = '#ffffff'
      div.style.fontSize = '13px'
      div.style.textAlign = 'center'
      div.style.lineHeight = '30px'
      div.style.background = 'rgba(54,158,76,0.9)'
      div.style.border = '1px solid #ffffff'
      this.$el.getElementsByClassName('content')[0].appendChild(div) // 需要考虑外面的class名称
    },
    //生成一个随机数
    randNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 随机生成汉字
    produceHanzi () {
      let hanziList = []
      for (let index = 0; index < 4; index++) {
        var _rsl = "";
        var _randomUniCode = Math.floor(Math.random() * (40870 - 19968) + 19968).toString(16);
        _rsl = eval("_rsl=" + '"\\u' + _randomUniCode + '"');
        hanziList[index] = _rsl
      }
      this.hanziList = hanziList
      this.randomPoit()
    },
    // 为每个汉字随机生成位置
    randomPoit () {
      let poit = [
        {
          left: this.randNum(0, 160),
          top: this.randNum(0, 60),
        },
        {
          left: this.randNum(200, 360),
          top: this.randNum(0, 60),
        },
        {
          left: this.randNum(0, 160),
          top: this.randNum(100, 160),
        },
        {
          left: this.randNum(200, 360),
          top: this.randNum(100, 160),
        },
      ]
      // 数组随机排序
      poit = poit.sort(() => {
        return Math.random() > .5 ? -1 : 1;
      })
      this.hanziPoitList = poit
    },
    // 关闭
    handleClose () {
      this.$emit('close')
    }
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.main {
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  width: 400px;
  border-radius: 10px;
  overflow: hidden;
  .title {
    width: 100%;
    height: 30px;
    color: #333333;
    font-weight: 600;
    font-size: 16px;
    line-height: 29px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .titleLeft {
      width: 30px;
      height: 30px;
      margin-left: 10px;
      margin-top: 5px;
      img:hover {
        animation: rotation 1s linear infinite;
      }
      @keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(180deg);
        }
      }
    }
    .titleRight {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .content {
    position: relative;
    width: 100%;
    height: 200px;
    background: url('~@/assets/css/pic.jpeg');
    background-size: 100% 100%;
    color: #0e71db;
    font-weight: 800;
    font-size: 32px;
    overflow: hidden;
    .masking {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      background: rgba(255, 255, 255, 0);
      z-index: 100;
    }
  }
  .tip {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-weight: 600;
    line-height: 50px;
    color: #cf4397;
    background: #ffffff;
    span {
      margin-right: 10px;
    }
    .tip-text {
      font-size: 18px;
      font-weight: 700;
      color: #008b8b;
    }
    .but {
      display: flex;
      justify-content: center;
      align-items: cneter;
      width: 80px;
      height: 30px;
      margin-left: 30px;
      line-height: 30px;
      background: #0e71db;
      border-radius: 10px;
      color: #ffffff;
      border: 1px solid rgb(77, 156, 221);
      &:active {
        background: #3a8ce4;
      }
    }
  }
}
</style>