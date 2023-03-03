/*
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-10-10 10:09:50
 * @LastEditors: zhoucheng
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // lintOnSave: false, // 关闭eslint
  publicPath: './',
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://192.168.1.201:10001/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      // '/flv/': {
      //   // target: 'http://36.133.182.60:8005/', // 奇隆大桥
      //   changeOrigin: true,
      //   ws: true,
      //   pathRewrite: {
      //     '^/flv': '/'
      //   }
      // },
    }
  },
  configureWebpack: {
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

