/*
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-10-10 10:09:50
 * @LastEditors: zhoucheng
 */
const { name } = require('./package');
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // lintOnSave: false, // 关闭eslint
  publicPath: './',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*', //开发时增加跨域 表示所有人都可以访问我的服务器
    },
    proxy: {
      '/api/': {
        target: 'http://192.168.1.67:28080/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      // '/nodeTest/': {
      //   target: 'http://127.0.0.1:1000/',
      //   changeOrigin: true,
      //   ws: true,
      //   pathRewrite: {
      //     '^/nodeTest': '/'
      //   }
      // },
      // '/flv/': {
      //   target: 'http://36.133.182.60:8005/', // 奇隆大桥
      //   changeOrigin: true,
      //   ws: true,
      //   pathRewrite: {
      //     '^/flv': '/'
      //   }
      // }
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把子应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
    devtool: 'source-map',//vue debugger 定位不准确 解决
    name: 'web-template',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    module: {
      rules: [{
        test: /\.(xlsx)$/,
        loader: "url-loader"
      }]
    },
  },
};

