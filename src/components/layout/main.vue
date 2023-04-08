<!--
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-03-18 16:38:16
 * @LastEditors: zhoucheng
-->
<template>
  <el-container class="main-container">
    <el-header class="header-box">
      <Header></Header>
    </el-header>
    <el-container class="inner-container">
      <el-aside width="13%"
                style="background-color: #FFFFFF">
        <sidebar></sidebar>
      </el-aside>
      <el-container style="width: 100%; height: 100%;margin-left:-1px">
        <el-main style="width: 100%; height: 100%">
          <transition name="main-route"
                      appear>
            <router-view v-show="isShow"></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./header.vue"
import sidebar from "./sidebar.vue"
export default {
  components: {
    Header,
    sidebar
  },
  data () {
    return {
      isShow: true
    }
  },
  methods: {
  },
  created () {
  },
  mounted () { }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixinColor.scss';
.main-container {
  width: 100%;
  height: 100%;
  .header-box {
    height: 64px;
  }
  .el-header {
    padding: 0px !important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .inner-container {
    height: calc(100% - 10vh);
  }
  .el-main {
    @include background('background');
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px !important;
  }
  .print-hidden-style {
    opacity: 0;
  }
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

// 内容页面加载 vue过渡
.main-route-enter-active {
  animation: transitionAnimation 1s;
}
.main-route-leave-active {
  animation: transitionAnimation 1s reverse;
}
// 从左向右加载
@keyframes transitionAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
