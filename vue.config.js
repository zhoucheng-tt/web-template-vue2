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
        target: 'http://192.168.1.169:10000/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/api1/': {
        target: 'https://vod-bucket-37-cn-east-2.obs.cn-east-2.myhuaweicloud.com:443/',
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

