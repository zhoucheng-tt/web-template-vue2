<!--
 * @Description: layout 布局头部
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-11-06 10:43:29
 * @LastEditors: zhoucheng
-->
<template>
  <div class="header-style">
    <div class="box">
      <span class="title">人间会一如平常的组件库</span>
      <el-dropdown class="dropdown">
        <span class="el-dropdown-link">
          主题切换
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="handleChangeTheme('iview')">默认</el-dropdown-item>
          <el-dropdown-item @click.native="handleChangeTheme('light')">浅色</el-dropdown-item>
          <el-dropdown-item @click.native="handleChangeTheme('dark')">深色</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  mounted () {
  },
  methods: {
    // 主题色切换
    handleChangeTheme (type) {
      this.$store.dispatch("app/switchTheme", { theme: type })
    },
  }
};
</script>

<style lang="scss" scoped>
.header-style {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-image: linear-gradient(to bottom, #a6c1ee 0%, #fbc2eb 100%);
  position: relative;
  .box {
    width: 100%;
    overflow: hidden;
    position: relative;
    .title {
      font-size: 35px;
      font-weight: bold;
      user-select: none;
      background: #c850c0
        linear-gradient(
          135deg,
          transparent 25%,
          transparent 40%,
          rgba(255, 255, 255, 1) 40%,
          rgba(255, 255, 255, 1) 60%,
          transparent 60%,
          transparent
        );
      background-size: 60px 60px;
      background-repeat: no-repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: scratchy 1.5s linear infinite;
    }
    @keyframes scratchy {
      0% {
        background-position: -100% 0;
      }
      100% {
        background-position: 130% 0;
      }
    }

    .dropdown {
      position: absolute;
      right: 50px;
    }
    .dropdown:hover {
      cursor: pointer;
    }
  }
}
</style>
