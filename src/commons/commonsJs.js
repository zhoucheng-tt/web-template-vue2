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
   * @description: 去除空格
   * @return {string} 
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
   * @description:  手机号脱敏 将手机号中间四位变成*
   * @return {type} String
   */
  phoneNumberDes (phoneNumber) {
    const phoneNumberData = phoneNumber.slice(0, 3) + "****" + phoneNumber.slice(phoneNumber.length - 4);
    // const phoneNumberData = phoneNumber.substring(0, 3) + "****" + phoneNumber.substring(phoneNumber.length - 4);
    // const phoneNumberData = phoneNumber.replace(/(\d{3})\d*(\d{4})/, "$1****$2"); 
    return phoneNumberData
  },
  /**
  * @description:邮箱脱敏 将身份证中间四位变成*
  * @return {type} String
  */
  emailDes (email) {
    let str = email.split("@");
    const emailData = str[0].substr(0, str[0].length - 3) + "*****" + str[1].substr(2);
    return emailData
  },
  /**
   * @description:身份证脱敏 将身份证中间四位变成*
   * @return {type} String
   */
  idcardDes (idcard) {
    const idcardData = idcard.replace(/^(.{4})(?:\w+)(.{4})$/, "$1****$2");
    // const idcardData = idcard.slice(0, 4) + "****" + idcard.slice(idcard.length - 4);
    return idcardData
  },
  /**
   * @description:姓名脱敏 将姓变成*
   * @return {type} String
   */
  nameDes (name) {
    const nameData = "*" + name.charAt(name.length - 1);
    return nameData
  },

  /**
    * @description: 数字字母校验
    * @return {boolean}  
    */
  englishNumberVerify (str) {
    const patrn = /^[0-9a-zA-Z_]*$/;
    //const patrn = /^[0-9]*$/im; // 纯数字
    if (!patrn.test(str)) {
      return false;
    }
    return true;
  },
  /**
    * @description: 车牌号校验
    * @return {boolean}  
    */
  plateNumberVerify (plateNumber) {
    var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    if (plateNumber.length == 7) {
      if (creg.test(plateNumber)) {
        return true
      } else {
        return false
      }
    } else if (plateNumber.length == 8) {
      if (xreg.test(plateNumber)) {
        return true
      } else {
        return false;
      }
    }
  },
  /**
    * @description: 手机号校验
    * @return {boolean} 
    */
  phoneNumberVerify (phoneNumber) {
    const patrn = /^1[3|4|5|6|7|8|9][0-9]{9}$/im;
    if (!patrn.test(phoneNumber)) {
      return false;
    }
    return true;
  },
  /**
   * @description: 邮箱验证
   * @return {boolean} 
   */
  emailVerify (email) {
    if (!(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email))) {
      return false;
    }
    return true;
  },
  /**
    * @description: 身份证验证
    * @return {boolean}
    */
  idcardVerify (idcard) {
    const patrn = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/im;
    if (!patrn.test(idcard)) {
      return false;
    }
    return true;
  },



  /**
   * @description: 查询当前一周
   * @return {String} 
   */
  queryCurrentWeek () {
    const targetday_milliseconds = new Date().getTime() - 1000 * 60 * 60 * 24 * 6;
    var targetday = new Date();
    targetday.setTime(targetday_milliseconds);
    const startTime = targetday.dateFmt("yyyy-MM-dd");
    const endTime = new Date().dateFmt("yyyy-MM-dd");
    return { startTime, endTime }
  },
  /**
   * @description: Momentjs判断间隔时长
   * @return {boolean} 
   */
  intervalTimeJudge (startTime, endTime, timeInterval) {
    const startTimeFmt = moment(startTime)
    const endTimeFmt = moment(endTime)

    const milliTime = moment.duration(endTimeFmt - startTimeFmt)._milliseconds
    const intervalTime = milliTime / 1000 / 60 // 单位秒

    if (timeInterval === undefined) {
      return intervalTime
    } else if (Number(timeInterval) === 3) {
      if (intervalTime <= 4320) {
        return true
      } else {
        return false
      }
    } else if (Number(timeInterval) === 7) {
      if (intervalTime <= 10080) {
        return true
      } else {
        return false
      }
    }
  },
  /**
  * @description: Momentjs机选 时间差
  * @return {String} 
  */
  differTimeFmt (startTime, endTime) {
    const startTimeFmt = moment(startTime)
    const endTimeFmt = moment(endTime)
    let years = moment.duration(endTimeFmt - startTimeFmt)._data.years
    let months = moment.duration(endTimeFmt - startTimeFmt)._data.months
    let days = moment.duration(endTimeFmt - startTimeFmt)._data.days
    let hours = moment.duration(endTimeFmt - startTimeFmt)._data.hours
    let minutes = moment.duration(endTimeFmt - startTimeFmt)._data.minutes
    // let seconds = moment.duration(endTimeFmt - startTimeFmt)._data.seconds

    years === 0 ? years = '' : years += '年'
    months === 0 ? months = '' : months += '月'
    days === 0 ? days = '' : days += '天'
    hours === 0 ? hours = '' : hours += '小时'
    if (moment.duration(endTimeFmt - startTimeFmt)._milliseconds !== 0) {
      minutes === 0 ? minutes = '' : minutes += '分钟'
    } else {
      minutes = '0分钟'
    }

    const parkStopTime = years + months + days + hours + minutes
    return parkStopTime
  },
  /**
   * @description: 将时间分钟格式化成小时、天 
   * @return {String} 
   */
  timeMinToFmt (minutes) {
    let parkDuration
    if (minutes === undefined) {
      parkDuration = `${0}分钟`
    } else if (minutes >= 0 && minutes < 60) {
      parkDuration = `${minutes}分钟`
    } else if (minutes >= 60 && minutes < 1440) {
      if (parseInt(minutes % 60) === 0) {
        parkDuration = `${parseInt(minutes / 60)}小时`
      } else {
        parkDuration = `${parseInt(minutes / 60)}小时
                      ${parseInt(minutes % 60)}分钟`
      }
    } else if (minutes >= 1440) {
      const day = parseInt(minutes / 1440)
      const hour = parseInt((minutes % 1440) / 60)
      const minute = parseInt(minutes % 1440) % 60
      if (hour === 0 && minute === 0) {
        parkDuration = `${day}天`
      }
      if (hour === 0 && minute !== 0) {
        parkDuration = `${day}天 ${minute}分钟`
      }
      if (hour !== 0 && minute === 0) {
        parkDuration = `${day}天 ${hour}小时`
      }
      if (hour !== 0 && minute !== 0) {
        parkDuration = `${day}天 ${hour}小时 ${minute}分钟`
      }
    }
    return parkDuration
  },
}