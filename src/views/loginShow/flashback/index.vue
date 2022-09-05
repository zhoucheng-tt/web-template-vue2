<!--
 * @Description:产品首页设计 flashback
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-11-21 16:17:16
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="wrap">
      <!-- 登陆 -->
      <div class="front"
           id="loginDiv">
        <el-row class="item">
          <h2>欢迎使用</h2>
          <el-row class="loignForm">
            <el-form ref="form"
                     :model="form">
              <el-row class="username">
                <el-row id="loginUserName">Name</el-row>
                <el-row>
                  <el-form-item>
                    <el-input v-model="form.username"
                              @focus="loginnameFocus"
                              @blur="loginnameBlur"></el-input>
                  </el-form-item>
                </el-row>
              </el-row>
              <el-row class="password">
                <el-row id="loginPassword">Password</el-row>
                <el-row>
                  <el-form-item>
                    <el-input v-model="form.password"
                              show-password
                              @focus="loginpasswordFocus"
                              @blur="loginpasswordBlur"></el-input>
                  </el-form-item>
                </el-row>
              </el-row>
            </el-form>
          </el-row>
          <el-row class="itemform">
            <el-button class="button">登 陆</el-button>
            <span class="button-bottom"
                  @click="handleclickLoginText">注册</span>
          </el-row>
        </el-row>
      </div>
      <!-- 注册 -->
      <div class="back"
           id="registerDiv">
        <el-row class="item">
          <h2>立即注册</h2>
          <el-row class="registerForm">
            <el-form ref="form"
                     :model="form">
              <el-row class="username">
                <el-row id="registerUserName">Name</el-row>
                <el-row>
                  <el-form-item>
                    <el-input v-model="form.username"
                              @focus="registernameFocus"
                              @blur="registernameBlur"></el-input>
                  </el-form-item>
                </el-row>
              </el-row>
              <el-row class="password">
                <el-row id="registerPassword">Password</el-row>
                <el-row>
                  <el-form-item>
                    <el-input v-model="form.password"
                              @focus="registerpasswordFocus"
                              @blur="registerpasswordBlur"></el-input>
                  </el-form-item>
                </el-row>
              </el-row>
            </el-form>
          </el-row>
          <el-row class="itemform">
            <el-button class="button">注 册</el-button>
            <span class="button-bottom"
                  @click="handleclickRegisterText">已注册</span>
          </el-row>
        </el-row>
      </div>
    </div>
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
      form: {

      }
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  // 方法集合
  methods: {
    // 登陆 账号 聚焦
    loginnameFocus () {
      document.getElementById("loginUserName").style =
        "transform: translateY(0px);transition: transform 0.5s ease"
    },
    // 登陆 账号 失去焦点
    loginnameBlur () {
      document.getElementById("loginUserName").style =
        "transform: translateY(0px); transition: transform 0.5s ease; "
    },
    // 登陆 密码 聚焦
    loginpasswordFocus () {
      document.getElementById("loginPassword").style =
        "transform: translateY(0px);transition: transform 0.5s ease"
    },
    // 登陆 密码 失去焦点
    loginpasswordBlur () {
      document.getElementById("loginPassword").style =
        "transform: translateY(0px); transition: transform 0.5s ease; "
    },

    // 注册 账号 聚焦
    registernameFocus () {
      document.getElementById("registerUserName").style =
        "transform: translateY(0px);transition: transform 0.5s ease"
    },
    // 注册 账号 失去焦点
    registernameBlur () {
      document.getElementById("registerUserName").style =
        "transform: translateY(0px); transition: transform 0.5s ease; "
    },
    // 注册 密码 聚焦
    registerpasswordFocus () {
      document.getElementById("registerPassword").style =
        "transform: translateY(0px);transition: transform 0.5s ease"
    },
    // 注册 密码 失去焦点
    registerpasswordBlur () {
      document.getElementById("registerPassword").style =
        "transform: translateY(0px); transition: transform 0.5s ease; "
    },
    // 点击登陆下的注册
    handleclickLoginText () {
      document.getElementById("loginDiv").style.transform = 'perspective(800px) rotateY(180deg)'
      document.getElementById("registerDiv").style.transform = 'perspective(800px) rotateY(360deg)'
    },
    // 点击注册下的已注册
    handleclickRegisterText () {
      document.getElementById("loginDiv").style.transform = 'perspective(800px) rotateY(360deg)'
      document.getElementById("registerDiv").style.transform = 'perspective(800px) rotateY(520deg)'
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
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.mainbody {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .wrap {
    width: 34%;
    height: 60%;
    transform-style: preserve-3d;
    position: relative;
  }
  .front {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    position: absolute;
    display: flex;
    justify-content: center;
    backface-visibility: hidden;
    transition: 0.8s ease-in-out;
    transform: perspective(800px) rotateY(0deg);
    transform-style: preserve-3d;
    background: linear-gradient(
      to left,
      rgb(138, 35, 135),
      rgb(233, 64, 87),
      rgb(242, 113, 33)
    );
    color: #fff;
    .item {
      width: 100%;
      h2 {
        height: 15%;
        font-size: 3.5em;
        text-align: center;
      }
      .loignForm {
        width: 100%;
        height: 35%;
        display: flex;
        justify-content: center;
        position: relative;
        .username {
          width: 100%;
          height: 45%;
          margin-top: 3%;
          position: relative;
          #loginUserName {
            width: 10%;
            height: 50%;
            line-height: 55px;
            color: white;
            z-index: 9999;
            transform: translateY(30px);
            transition: transform 0.5s ease;
          }
          input {
            height: 0;
            padding: 1.2em 0.5em;
            background-clip: content-box;
          }
          /deep/ .el-input__inner {
            width: 250px;
            height: 50%;
            background: rgba(0, 0, 0, 0);
            background-color: rgba(0, 0, 0, 0);
            border-radius: 0;
            border: none;
            border-bottom: 1px solid rgb(90, 87, 87);
            z-index: -1;
            font-size: 20px;
            color: #fff;
          }
          /deep/ .el-input__inner:focus {
            border-bottom: 1px solid black;
            transform: scaleX(1);
            transition: transform 0.5s ease;
          }
        }
        .password {
          width: 100%;
          height: 45%;
          margin-top: 3%;
          #loginPassword {
            width: 10%;
            height: 50%;
            line-height: 55px;
            color: white;
            z-index: 9999;
            transform: translateY(30px);
            transition: transform 0.5s ease;
          }
          /deep/ .el-input__inner {
            width: 250px;
            height: 50%;
            background: rgba(0, 0, 0, 0);
            border-radius: 0;
            border: none;
            border-bottom: 1px solid rgb(90, 87, 87);
            font-size: 20px;
            color: #fff;
          }
          /deep/ .el-input__inner:focus {
            border-bottom: 1px solid black;
            transform: scaleX(1);
            transition: transform 0.5s ease;
          }
        }
      }
      .itemform {
        height: 60%;
        display: flex;
        justify-content: center;
        position: relative;
        .button {
          width: 200px;
          height: 40px;
          border-radius: 20px;
          position: absolute;
          bottom: 100px;
        }
        .button-bottom {
          position: absolute;
          bottom: 70px;
          text-decoration: underline;
        }
        .button-bottom:hover {
          cursor: pointer;
        }
      }
    }
  }
  .back {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    position: absolute;
    display: flex;
    justify-content: center;
    backface-visibility: hidden;
    transition: 0.8s ease-in-out;
    transform: perspective(800px) rotateY(0deg);
    transform-style: preserve-3d;
    background: linear-gradient(
      to left,
      rgb(138, 35, 135),
      rgb(233, 64, 87),
      rgb(242, 113, 33)
    );
    color: #fff;
    transform: perspective(800px) rotateY(180deg);
    .item {
      h2 {
        height: 15%;
        font-size: 3.5em;
      }
      .registerForm {
        width: 100%;
        height: 35%;
        display: flex;
        justify-content: center;
        position: relative;
        .username {
          width: 100%;
          height: 45%;
          margin-top: 3%;
          position: relative;
          #registerUserName {
            width: 10%;
            height: 50%;
            line-height: 55px;
            color: white;
            z-index: 9999;
            transform: translateY(30px);
            transition: transform 0.5s ease;
          }
          /deep/ .el-input__inner {
            width: 250px;
            height: 50%;
            background: rgba(0, 0, 0, 0);
            border-radius: 0;
            border: none;
            border-bottom: 1px solid rgb(90, 87, 87);
            z-index: -1;
            font-size: 20px;
            color: #fff;
          }
          /deep/ .el-input__inner:focus {
            border-bottom: 1px solid black;
            transform: scaleX(1);
            transition: transform 0.5s ease;
          }
        }
        .password {
          width: 100%;
          height: 45%;
          margin-top: 3%;
          #registerPassword {
            width: 10%;
            height: 50%;
            line-height: 55px;
            color: white;
            z-index: 9999;
            transform: translateY(30px);
            transition: transform 0.5s ease;
          }
          /deep/ .el-input__inner {
            width: 250px;
            height: 50%;
            background: rgba(0, 0, 0, 0);
            border-radius: 0;
            border: none;
            border-bottom: 1px solid rgb(90, 87, 87);
            font-size: 20px;
            color: #fff;
          }
          /deep/ .el-input__inner:focus {
            border-bottom: 1px solid black;
            transform: scaleX(1);
            transition: transform 0.5s ease;
          }
        }
      }
      .itemform {
        height: 60%;
        display: flex;
        justify-content: center;
        position: relative;
        .button {
          width: 200px;
          height: 40px;
          border-radius: 20px;
          position: absolute;
          bottom: 100px;
        }
        .button-bottom {
          position: absolute;
          bottom: 70px;
          text-decoration: underline;
        }
        .button-bottom:hover {
          cursor: pointer;
        }
      }
    }
  }
}
input {
  height: 0;
  padding: 1.2em 0.5em;
  background-clip: content-box;
}
</style>