/*
 * @Description: moment 时间间隔 精确分钟
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-09-28 14:14:12
 * @LastEditors: zhoucheng
 */

import moment from "moment"
export default function parkStopTime (currentTime,lastTime) {
  // 分钟为单位 秒直接截取掉
  let lastTimeMinFmt = lastTime.split(":")[0] + ":" + lastTime.split(":")[1]
  let currentTimeMinFmt = currentTime.split(":")[0] + ":" + currentTime.split(":")[1]
  // 返回值
  let parkStopTime
  let m1 = moment(lastTimeMinFmt)
  let m2 = moment(currentTimeMinFmt)
  let years = moment.duration(m2 - m1)._data.years
  let months = moment.duration(m2 - m1)._data.months
  let days = moment.duration(m2 - m1)._data.days
  let hours = moment.duration(m2 - m1)._data.hours
  let minutes = moment.duration(m2 - m1)._data.minutes
  // let seconds = moment.duration(m2 - m1)._data.seconds
  years === 0 ? years = '' : years += '年'
  months === 0 ? months = '' : months += '月'
  days === 0 ? days = '' : days += '天'
  hours === 0 ? hours = '' : hours += '小时'
  minutes === 0 ? minutes = '0分钟' : minutes += '分钟'
  // 返回值拼接
  parkStopTime = years + months + days + hours + minutes
  return parkStopTime
}
