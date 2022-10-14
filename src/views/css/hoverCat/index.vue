<!--
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-10-10 10:09:50
 * @LastEditors: zhoucheng
-->
<template>
  <div class="main-content">
    <div class="mao">
      <div class="mao-head">
        <div class="huawen">
          <div></div>
        </div>
      </div>
      <div class="erduo">
        <div></div>
        <div></div>
      </div>
      <div class="yanjing">
        <div>
          <div class="yanquan">
            <div></div>
          </div>
          <div class="yanquan-hedding">
          </div>
          <div class="hong"></div>
        </div>
        <div class="yan-right">
          <div class="yanquan">
            <div></div>
          </div>
          <div class="yanquan-hedding">
          </div>
          <div class="hong"></div>
        </div>
        <div style="clear:both"></div>
      </div>
      <div class="face-huawen">
        <div class="face-huawen-huawen huawen-left">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="face-huawen-huawen huawen-right">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div style="clear:both"></div>
      </div>
      <div class="bizi">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="zuiba-box">
        <div class="zuiba">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
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
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
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

  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.main-content {
  position: relative;
  top: 200px;
  .mao {
    margin: 0 auto;
    width: 400px;
    .mao-head {
      margin: 0 auto;
      width: 400px;
      height: 340px;
      background: #f6f7f2;
      position: relative;
      border-radius: 50% 50% 35% 35%;
      border: solid 2px #2e2e2e;
      overflow: hidden;
      z-index: 10;
      .huawen {
        position: absolute;
        height: 160px;
        width: 180px;
        background: #8d8d8d;
        left: 110px;
        border-radius: 0% 0% 50% 50%;
        overflow: hidden;
      }
      .huawen > div:first-child {
        height: 160px;
        width: 90px;
        background: black;
      }
    }
    /*耳朵*/
    .erduo {
      width: 374px;
      height: 120px;
      position: absolute;
      top: -6px;
      left: 50%;
      margin-left: -187px;
      border-radius: 0% 0% 0% 0%;
    }
    /*左耳*/
    .erduo > div:first-child {
      height: 200px;
      width: 160px;
      border: 2px solid #2e2e2e;
      background: #f3f3f3;
      transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
      -moz-transform: rotate(-15deg);
      -webkit-transform: rotate(-15deg);
      -o-transform: rotate(-15deg);
      border-radius: 4% 80% 0% 50%;
      position: absolute;
      left: -20px;
      top: 0px;
      transition: transform 1s, left 1s;
    }
  }
}

/*右耳*/
.erduo > div:last-child {
  height: 180px;
  width: 160px;
  border: 2px solid #2e2e2e;
  background: #f3f3f3;
  transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -moz-transform: rotate(15deg);
  -webkit-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  border-radius: 80% 4% 50% 0%;
  position: absolute;
  right: -20px;
  top: 0px;
  transition: transform 1s, right 1s;
}
/*鼠标浮动耳朵样式*/
/*左耳*/
.mao:hover .erduo > div:first-child {
  left: -10px;
  transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  border-radius: 4% 80% 0% 60%;
}
.mao:hover .erduo > div:last-child {
  right: -10px;
  transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  border-radius: 80% 4% 60% 0%;
}

/*眼睛*/
.yanjing {
  height: 60px;
  width: 300px;
  position: absolute;
  top: 200px;
  z-index: 20;
  left: 50%;
  margin-left: -150px;
  overflow: hidden;
}

/*左眼*/
.yanquan {
  height: 100px;
  width: 100px;
  border: 2px solid #2e2e2e;
  border-radius: 50% 50% 50% 50%;
  overflow: hidden;
  position: absolute;
}

/*眼珠 左*/
.yanquan > div:first-child {
  height: 100px;
  width: 30px;
  background-color: #2e2e2e;
  margin-left: 35px;
  transition: all 1s;
}
.mao:hover .yanquan > div:first-child {
  width: 40px;
  margin-left: 30px;
}

.yanquan-hedding {
  height: 100px;
  width: 180px;
  border-top: 2px solid #2e2e2e;
  border-radius: 50% 50% 50% 50%;
  background: #f6f7f2;
  margin-top: 50px;
  margin-left: -40px;
  position: absolute;
  transition: margin-top 1s;
}

.hong {
  position: absolute;
  height: 28px;
  width: 70px;
  background: pink;
  top: 34px;
  left: 18px;
  border-radius: 50% 50% 50% 50%;
  background-image: -moz-radial-gradient(
    50% 50%,
    rgba(253, 214, 240, 0.8) 0%,
    rgba(253, 224, 244, 0.8) 66%,
    rgba(253, 234, 247, 0.8) 100%
  );
  background-image: -webkit-radial-gradient(
    50% 50%,
    rgba(253, 214, 240, 0.8) 0%,
    rgba(253, 224, 244, 0.8) 66%,
    rgba(253, 234, 247, 0.8) 100%
  );
  background-image: -ms-radial-gradient(
    50% 50%,
    rgba(253, 214, 240, 0.8) 0%,
    rgba(253, 224, 244, 0.8) 66%,
    rgba(253, 234, 247, 0.8) 100%
  );
  opacity: 0;
}

.yan-right {
  left: 196px;
  top: 0px;
  background: pink;
  position: absolute;
}
/*眼睛浮动属性*/
.mao:hover .yanquan-hedding {
  margin-top: 30px;
}

.mao:hover .hong {
  opacity: 0.8;
  transition: opacity 0.5s ease-in 0.2s;
}

/*脸部花纹*/
/*左边花纹*/
.face-huawen {
  height: 80px;
  width: 380px;
  position: absolute;
  top: 190px;
  z-index: 20;
  left: 50%;
  margin-left: -190px;
}

.face-huawen-huawen > div:first-child {
  width: 30px;
  height: 10px;
  border-top: 6px #e53941 solid;
  border-radius: 30% 80% 20% 50%;
  transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -moz-transform: rotate(25deg);
  -webkit-transform: rotate(25deg);
  -o-transform: rotate(25deg);
  margin-left: 20px;
}
.face-huawen-huawen > div:nth-child(2) {
  width: 20px;
  height: 6px;
  background-color: #e53941;
  border-radius: 50% 50% 50% 50%;
  transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -moz-transform: rotate(25deg);
  -webkit-transform: rotate(25deg);
  -o-transform: rotate(25deg);
  margin-left: 20px;
}

.face-huawen-huawen > div:nth-child(3) {
  width: 32px;
  height: 10px;
  border-bottom: 4px #e53941 solid;
  border-radius: 30% 0% 90% 30%;
  transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -moz-transform: rotate(25deg);
  -webkit-transform: rotate(25deg);
  -o-transform: rotate(25deg);
  margin-left: 8px;
}

.face-huawen-huawen > div:nth-child(4) {
  margin-top: 20px;
  width: 26px;
  height: 20px;
  border-bottom: 4px #e53941 solid;
  border-radius: 30% 0% 90% 30%;
  transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -webkit-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  margin-left: 28px;
}

.face-huawen-huawen > div:last-child {
  width: 22px;
  height: 10px;
  border-bottom: 3px #e53941 solid;
  border-radius: 0% 0% 50% 50%;
  transform: rotate(-15deg);
  -ms-transform: rotate(-15deg);
  -moz-transform: rotate(-15deg);
  -webkit-transform: rotate(-15deg);
  -o-transform: rotate(-15deg);
  margin-left: 40px;
  margin-top: -8px;
}
/*右边花纹*/
.huawen-right {
  float: right;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  margin-top: -85px;
}

/*鼻子*/
.bizi {
  width: 30px;
  height: 36px;
  position: absolute;
  left: 50%;
  margin-left: -15px;
  top: 260px;
  z-index: 30;
}

.bizi > div:first-child {
  width: 30px;
  height: 10px;
  border-bottom: 8px solid #2e2e2e;
  border-radius: 0% 0% 50% 50%;
  margin-top: -10px;
}

.zuiba-box {
  width: 200px;
  height: 36px;
  position: absolute;
  overflow: hidden;
  left: 50%;
  margin-left: -100px;
  top: 260px;
  z-index: 30;
}
.zuiba {
  margin-left: 85px;
  margin-top: 6px;
}

.zuiba > div:first-child {
  width: 4px;
  height: 8px;
  background: #2e2e2e;
  margin-left: 13px;
}

/*右半边嘴巴*/
.zuiba > div:nth-child(2) {
  width: 50px;
  height: 40px;
  border-bottom: 4px solid #2e2e2e;
  border-left: 4px solid #2e2e2e;
  border-radius: 40% 0% 20% 50%;
  margin-left: 13px;
  margin-top: -26px;
  position: absolute;
  transition: border-radius 1s;
}

/*左半边嘴巴*/
.zuiba > div:nth-child(3) {
  width: 50px;
  height: 40px;
  border-bottom: 4px solid #2e2e2e;
  border-right: 4px solid #2e2e2e;
  border-radius: 0% 40% 50% 20%;
  margin-left: -38px;
  margin-top: -26px;
  position: absolute;
  transition: border-radius 1s;
}
.mao:hover .zuiba > div:nth-child(2) {
  border-radius: 50% 50% 50% 50%;
  width: 40px;
}

.mao:hover .zuiba > div:nth-child(3) {
  width: 40px;
  margin-left: -30px;
  border-radius: 50% 50% 50% 50%;
}

.ceshi {
  width: 26px;
  height: 26px;
  -webkit-border-radius: 50% 50% 50% 0;
  -moz-border-radius: 50% 50% 50% 0;
  -o-border-radius: 50% 50% 50% 0;
  border-radius: 50% 50% 50% 0;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin: 1px 4px 7px;
  border: 2px solid;
}
</style>