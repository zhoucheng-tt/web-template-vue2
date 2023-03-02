/*
 * @Description: 批量引入组件 注册 使用 compImpRegUse
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @this: 2021-12-06 16:10:14
 * @LastEditors: zhoucheng
 */

// 组件名普通小写 first.vue second.vue
export function commonName () {
  // 批量引入指定文件夹下的vue文件
  const allComponents = require.context('../components', false, /\.vue$/);
  // 制作组件数组，在下方components中注册使用
  const result = {};
  allComponents.keys().forEach(componentName => {
    const compName = componentName;
    const component = allComponents(componentName);
    result[compName.replace(/^\.\/(.*)\.\w+$/, "$1")] = component.default;
  })
  return result
}

// 组件名横线间隔 test-a.vue test-b.vue
export function lineName () {
  // 横线转驼峰
  const camelCase = function (name) {
    return name.replace(/-\w/g, function (final) {
      return final.slice(1).toUpperCase();
    });
  };
  // 批量引入指定文件夹下的vue文件
  const allComponents = require.context("../components", false, /\.vue$/);
  // 制作组件数组，在下方components中注册使用
  const resComponents = {};
  allComponents.keys().forEach(componentName => {
    const compName = camelCase(componentName);
    const component = allComponents(componentName);
    resComponents[compName.replace(/^\.\/(.*)\.\w+$/, "$1")] = component.default;
  });
  return resComponents
}

// 语法：require.context(directory, useSubdirectories, regExp)
// directory: 要查找的文件路径 (不能是变量)
// useSubdirectories: 是否查找子目录
// regExp: 要匹配文件的正则

// 返回值：两个方法一个属性
// keys(): 返回匹配成功模块的名字组成的数组
// resolve(): 接受一个参数request，为test文件夹下面匹配文件的相对路径，返回这个匹配文件相对于整个工程的相对路径

// allComponents.keys()  匹配到的子组件  ['./first.vue', './second.vue']
// allComponents.id      匹配的全路径    ./src/views/test/components sync \.vue$