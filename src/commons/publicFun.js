/*
 * @Descripttion: 
 * @version: 
 * @Author: 郭云展
 * @Date: 2020-08-21 13:35:12
 * @LastEditors: zhoucheng
 * @LastEditTime: 2023-02-27 22:47:59
 */
export default {

  // 获取类型 ⬇⬇⬇
  typeOf (o) {
    return Object.prototype.toString.call(o).match(/ ([^\]]+)/i)[1].toLowerCase();
  },

  // 测试数值是否在范围内 ⬇⬇⬇
  testRange (item) {
    if (item.referenceValue) {
      let min = parseFloat(item.referenceValue.split('～')[0])
      let max = parseFloat(item.referenceValue.split('～')[1])
      return item.dataValue < min || item.dataValue > max ? '1' : '0'
    }
  },
  toymd (date) {
    if (date.length == 14) {
      return date.replace(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/, "$1/$2/$3 $4:$5:$6")
    } else if (date.length == 8) {
      return date.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1/$2/$3")
    }
  },
  // 数组string化并保持被中括号包裹⬇⬇⬇
  listStr (list) {
    let string = list.toString()
    return string.slice(0, 0) + '[' + string.slice(0, string.length) + ']'
  },
  // 判断Json是否为空 ⬇⬇⬇
  isEmptyObject (obj) {
    for (var key in obj) {
      // break;
      return true
    }
    return false
  },
  // 随机生成指定数量的随机数 ⬇⬇⬇
  getRandomCode (length) {
    if (length > 0) {
      var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f",
        "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
      ];
      var nums = "";
      for (var i = 0; i < length; i++) {
        var r = parseInt(Math.random() * 61);
        nums += data[r];
      }
      return nums;
    } else {
      return false;
    }
  },
  // 获取 starDay 到 endDay之间所有时间 ⬇⬇⬇
  getDayAll (starDay, endDay) {

    var arr = [];
    var dates = [];

    // 设置两个日期UTC时间
    var db = new Date(starDay);
    var de = new Date(endDay);

    // 获取两个日期GTM时间
    var s = db.getTime() - 24 * 60 * 60 * 1000;
    var d = de.getTime() - 24 * 60 * 60 * 1000;

    // 获取到两个日期之间的每一天的毫秒数
    for (var i = s; i <= d;) {
      i = i + 24 * 60 * 60 * 1000;
      arr.push(parseInt(i))
    }

    // 获取每一天的时间  YY-MM-DD
    for (var j in arr) {
      var time = new Date(arr[j]).Format('yyyy-MM-dd');
      dates.push(time)
    }

    return dates
  },

  // 对全局参数进行监听⬇⬇⬇
  watch ({ target, key, config }) {
    var newValue = config.defaultValue || ''
    Object.defineProperty(target, key, {
      enumerable: true,
      configurable: true,
      get () {
        return newValue;
      },
      set (val) {
        newValue = val
        config.set(val)

      },
    })
  },
  // 数组转json格式 ⬇⬇⬇
  arrayToJson ({ list, key, value }) {
    let json = {}
    // console.warn(list, '刚进入的list')
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      json[item[key]] = item[value]
    }
    // console.warn(json, '转化处理完成后的json')
    return json

  },
  // 判断是否为空值 ⬇⬇⬇
  isNullValue (value) {
    return [null, undefined, ''].includes(value)
  },

  // 将数组转换为json ⬇⬇⬇
  // @params list   传入的list
  // @params key    数组中对应的key
  // @params value  数组中对应的value
  getDic ({ list, key, value }) {
    let json = {}
    list.forEach(item => json[item[key]] = item[value])
    return json
  },

  // 深拷贝 ⬇⬇⬇
  clone (o) {
    let clone = (o) => {
      let type = this.typeOf(o);
      if (['number', 'string', 'boolean', 'null', 'undefined', 'regexp'].indexOf(type) > -1) {
        return o;
      } else if (type === 'array') {
        let t = [];
        for (let i = 0, l = o.length; i < l; i++) {
          t.push(clone(o[i]));
        }
        return t;
      } else {
        let t = {};
        for (let k in o) {
          t[k] = clone(o[k]);
        }
        return t;
      }
    };
    return clone(o);
  },
  // 将数组转换为json ⬇⬇⬇
  // @params list   传入的list
  // @params params 要注入的数据集
  setListValue ({ list, params }) {
    let cloneList = this.clone(list)
    // 将弹窗的数据进行处理 ⬇⬇⬇
    for (let i = 0; i < cloneList.length; i++) {
      const item = cloneList[i];
      // 若item.key为一般的string类型 ⬇⬇⬇
      if (typeof item.key == "string") {
        item.value = params[item.key];
        // 若为多key类型(数组)则按顺序注入 ⬇⬇⬇
      } else if (Array.isArray(item.key)) {
        item.value = [];
        for (let j = 0; j < item.key.length; j++) {
          let key = item.key[j];
          item.value[j] = params[key];
        }
        // console.warn(item.key, "非String类型的key", typeof item.key);
      }
    }
    return cloneList
  }

}
