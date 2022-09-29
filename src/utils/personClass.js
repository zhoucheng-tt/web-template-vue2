/*
 * @Description: vue 类
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-09-14 09:23:16
 * @LastEditors: zhoucheng
 */
export default class PersonClass{

  static name = "周嘻嘻"
  static age = "23"

  personName
  personAge

  constructor(personName,personAge){
    this.personName=personName
    this.personAge=personAge
  }
  static introduce(){
    return '本名：' + this.name + "," + "早零：" + this.age
  }

  introducePerson(){
    return '姓名：' + this.personName + "," + "年龄：" + this.personAge
  }
  

}

