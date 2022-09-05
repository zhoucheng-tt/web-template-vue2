/*
 * @Description: 公共方法组件
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @this: 2021-12-06 16:10:14
 * @LastEditors: zhoucheng
 */
import moment from "moment" // 使用时间间隔引入

export default {
  /**
   * @name: 去除空格
   * @description: 去除空格
   * @param {type} {*}
   * @return {type} {*}
   */
  removeBlankSpace (string, type) {
    // 去除字符串内所有的空格：
    if (type === '' || type === undefined) {
      const removedString = string.replace(/\s*/g, "");
      return removedString
    }
    // 若只去除两端空格不去除中间空格 可以使用str.trim()方法
    // 去除字符串内两头的空格：
    else if (type === 1) {
      // const removedString = string.replace(/^\s*|\s*$/g,"");
      const removedString = string.trim();
      return removedString
    }
    // 去除字符串内左侧的空格：
    else if (type === 2) {
      const removedString = string.replace(/^\s*/, "");
      return removedString
    }
    // 去除字符串内右侧的空格：
    else if (type === 3) {
      const removedString = string.replace(/(\s*$)/g, "");
      return removedString
    }
  },
  /**
   * @name: 车牌号校验
   * @description: 车牌号校验
   * @param {type} string
   * @return {type}  string
   */
  plateNumberVerify (plateNumber) {
    var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (plateNumber.length == 7) {
      if (creg.test(plateNumber)) {
        return plateNumber
      }
    } else if (plateNumber.length == 8) {
      if (xreg.test(plateNumber)) {
        return plateNumber
      }
    } else {
      return false;
    }
  },
  /**
   * @name: 手机号脱敏
   * @description: 将手机号中间四位变成*
   * @param {type} String
   * @eq 138****5621
   * 

  
   * @return {type} String
   */
  phoneNumberDesensitizate (phoneNumber) {
    const phoneNumberData = phoneNumber.slice(0, 3) + "****" + phoneNumber.slice(phoneNumber.length - 4);
    // const phoneNumberData = phoneNumber.substring(0, 3) + "****" + phoneNumber.substring(phoneNumber.length - 4);
    // const phoneNumberData = phoneNumber.replace(/(\d{3})\d*(\d{4})/, "$1****$2"); 
    return phoneNumberData
  },
  /**
   * @name: 手机号校验
   * @description: phoneNumber 要验证的手机号
   * @param {type} {*}
   * @return {type} {*}
   */
  phoneNumberVerify (phoneNumber) {
    if (!(/^1[3456789]\d{9}$/.test(phoneNumber))) {
      return false;
    }
    return true;
  },
  /**
 * @name: 身份证脱敏
 * @description: 将身份证中间四位变成*
 * @param {type} String
 * @eq  5123****5645
 * @return {type} String
 */
  idcardDesensitizate (idcard) {
    const idcardData = idcard.replace(/^(.{4})(?:\w+)(.{4})$/, "$1****$2");
    // const idcardData = idcard.slice(0, 4) + "****" + idcard.slice(idcard.length - 4);
    return idcardData
  },
  /**
   * @name: 身份证验证
   * @description: idcard 需要验证的身份证号
   * @param {type} {*}
   * @return {type} {*}
   */
  idcardVerify (idcard) {
    if (!(/(^\d{15}&)|(^\d{18})|(^\d{17}(\d|X|x)$)/.test(idcard))) {
      return false;
    }
    return true;
  },
  /**
   * @name: 邮箱脱敏
   * @description: 将邮箱中间四位变成*
   * @param {type} String
   * @eq 738560****@qq.com
   * @return {type} String
   */
  emailDesensitizate (email) {
    let str = email.split("@");
    const emailData = str[0].substr(0, str[0].length - 3) + "*****" + str[1].substr(2);
    return emailData
  },
  /**
   * @name: 邮箱验证
   * @description: 
   * @param {type} {*}
   * @return {type} {*}
   */
  emailVerify (email) {
    if (!(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email))) {
      return false;
    }
    return true;
  },
  /**
 * @name: 姓名脱敏
 * @description: 将姓变成*
 * @param {type} String
 * @eq *成成
 * @return {type} String
 */
  nameDesensitizate (name) {
    const nameData = "*" + name.charAt(name.length - 1);
    return nameData
  },

  /**
   * @name: 将时间分钟格式化成小时、天 
   * @description: 只控制到30天
   * @param {type} number、String 
   * @eq 3000分钟
   * @return {type} String
   */
  minuteTimeFormat (time) {
    if (time === undefined || time === 0) {
      time = 0 + '分钟'
    }
    else if (time > 0 && time < 60) {
      time = time + '分钟'
    }
    else if (time >= 60 && time < 1440) {
      if (time % 60 === 0) {
        time = parseInt(time / 60) + '小时'
      } else {
        time = parseInt(time / 60) + '小时' + time % 60 + '分钟'
      }
    }
    else if (time >= 1440 && time <= 43200) {
      if (time % 1440 === 0) {
        time = parseInt(time / 1440) + '天'
      }
      else if (parseInt((time % 1440) % 60) === 0) {
        time = parseInt(time / 1440) + '天' + parseInt((time % 1440) / 60) + '小时'
      }
      else if (parseInt((time % 1440) % 60) !== 0) {
        if (parseInt((time % 1440) / 60) === 0) {
          time = parseInt(time / 1440) + '天' + (time % 1440) % 60 + '分钟'
        }
        else if (parseInt((time % 1440) / 60) !== 0) {
          time = parseInt(time / 1440) + '天' + parseInt((time % 1440) / 60) + '小时' + (time % 1440) % 60 + '分钟'
        }
      }
    }
    return time
  },
  /**
   * @name: 日期转换时间格式化
   * @description: 
   * @param {type} {*} fmt 要处理成的日期格式 例: 'yyyy-MM-dd hh:mm:ss'
   * @return {type} {*} date 要处理的日期，需Date类型
   */
  dateFormat (fmt, date) {
    date = date ? date : new Date();
    let o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, //小时
      "H+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    let week = {
      "0": "/u65e5",
      "1": "/u4e00",
      "2": "/u4e8c",
      "3": "/u4e09",
      "4": "/u56db",
      "5": "/u4e94",
      "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[date.getDay() + ""]);
    }
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  },
  /**
   * @name: 时间间隔
   * @description: moment实现时间间隔
   * @param {type} {currentTime:string,当前时间, pastTime:string:过去的时间}
   * @eq 格式化之后的时间 2020-01-01 00:00:00
   * @return {type} {*}
   */
  timeInterval (pastTime, currentTime) {
    let timeIntervalBack;
    let m1 = moment(pastTime)
    let m2 = moment(currentTime)
    let years = moment.duration(m2 - m1)._data.years
    let months = moment.duration(m2 - m1)._data.months
    let days = moment.duration(m2 - m1)._data.days
    let hours = moment.duration(m2 - m1)._data.hours
    let minutes = moment.duration(m2 - m1)._data.minutes
    let seconds = moment.duration(m2 - m1)._data.seconds
    years === 0 ? years = '' : years += '年'
    months === 0 ? months = '' : months += '月'
    days === 0 ? days = '' : days += '天'
    hours === 0 ? hours = '' : hours += '小时'
    minutes === 0 ? minutes = '' : minutes += '分钟'
    seconds === 0 ? seconds = '' : seconds += '秒'
    timeIntervalBack = years + months + days + hours + minutes + seconds
    return timeIntervalBack
  }
}