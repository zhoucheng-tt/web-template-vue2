/*
 * @Description: 深拷贝（需要挂载到全局）
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-10-25 16:31:26
 * @LastEditors: zhoucheng
 */
export default function deepClone (obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (let key in obj) {
    result[key] = deepClone(obj[key]);
  }
  return result;
}

