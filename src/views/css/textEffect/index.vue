<!--
 * @Description: css文字效果
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-11-20 17:49:36
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <el-row class="lineOne">
      <el-row class="item">
        <span class="item-contentLeft">
          人间会一如平常
        </span>
      </el-row>
      <el-row class="item">
        <span class="item-contentMiddle">
          人间会一如平常
        </span>
      </el-row>
      <el-row class="item">
        <span class="item-contentRight"
              type="button">人间会一如平常</span>
      </el-row>
    </el-row>
    <el-row class="lineTwo">
      <el-row class="item">
        <div class="item-contentLeft">{{lineTwoLeft.startNumber}}</div>
      </el-row>
      <el-row class="item">
      </el-row>
      <el-row class="item">
      </el-row>
    </el-row>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      lineTwoLeft: {
        startNumber: 0,
        endNumber: 520,
        speed: 10
      }
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.dynamicNumber(this.lineTwoLeft.startNumber, this.lineTwoLeft.endNumber, this.lineTwoLeft.speed);
  },
  // 方法集合
  methods: {
    // 第二行左侧数字更新
    dynamicNumber (startNumber, endNumber, speed) {
      if (endNumber > 0) {
        let that = this
        var timeTask = setInterval(function () {
          startNumber++;
          that.lineTwoLeft.startNumber = startNumber
          if (startNumber === endNumber) {
            clearInterval(timeTask);
          }
        }, speed);
      }
      else {
        alert('最终数字不是正数')
      }
    }
  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.mainbody {
  width: 100%;
  height: 100%;
  .lineOne {
    width: 100%;
    height: 32%;
    display: flex;
    .item {
      width: 32%;
      height: 100%;
      margin-left: 1%;
      margin-top: 1%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      .item-contentLeft {
        color: #ffffff;
        font-size: 32px;
        position: relative;
        z-index: 1;
        user-select: none;
      }
      .item-contentLeft::before {
        content: '人间会一如平常';
        width: 100%;
        position: absolute;
        color: gray;
        left: 15px;
        transform: skewX(-50deg);
        z-index: -1;
      }
      .item-contentMiddle {
        color: #ffffff;
        font-size: 32px;
        position: relative;
        z-index: 1;
        user-select: none;
        background-clip: text;
        background-image: -webkit-linear-gradient(
          bottom,
          lightgreen,
          lightpink,
          lightyellow
        );
        -webkit-text-fill-color: transparent;
      }
      .item-contentRight {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        color: #00a67c;
        transition: all 1s ease;
        -webkit-transition: all 1s ease;
      }
      .item-contentRight:hover {
        color: lightpink;
        animation: contentRightKeyframes 1.5s ease infinite alternate;
        -webkit-animation: contentRightKeyframes 1.5s ease infinite alternate;
      }
      @-webkit-keyframes contentRightKeyframes {
        from {
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
            0 0 40px #00a67c, 0 0 70px #00a67c, 0 0 80px #00a67c,
            0 0 100px #00a67c, 0 0 150px #00a67c;
        }
        to {
          text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff,
            0 0 20px #00a67c, 0 0 35px #00a67c, 0 0 40px #00a67c,
            0 0 50px #00a67c, 0 0 75px #00a67c;
        }
      }
      @keyframes contentRightKeyframes {
        from {
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
            0 0 40px #00a67c, 0 0 70px #00a67c, 0 0 80px #00a67c,
            0 0 100px #00a67c, 0 0 150px #00a67c;
        }
        to {
          text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff,
            0 0 20px #00a67c, 0 0 35px #00a67c, 0 0 40px #00a67c,
            0 0 50px #00a67c, 0 0 75px #00a67c;
        }
      }
    }
  }
  .lineTwo {
    width: 100%;
    height: 32%;
    display: flex;
    margin-top: 10px;
    .item {
      width: 32%;
      height: 100%;
      margin-left: 1%;
      margin-top: 1%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      .item-contentLeft {
        font-size: 32px;
        color: #ffffff;
        letter-spacing: 5px;
      }
    }
  }
}
</style>