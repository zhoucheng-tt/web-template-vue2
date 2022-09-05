<!--
 * @Description: 高德地图信息窗口组件
 * @Author: zhoucheng
 * @Github: 
 * @Date: 2022-07-18 15:10:30
 * @LastEditors: zhoucheng
-->
<template>
  <div class="main">
    <div class="close"
         @click="close">x</div>
    <div class="top">
      <div v-if="!data">{{  "正在获取信息..."}}</div>
      <div v-else
           class="content">
        <div>{{ data.latitude }}</div>
        <div>{{ data.longitude }}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="details"
           @click="detailsClick">详情 >></div>
    </div>
  </div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    id: {
      type: String,
      default: 'makerId'
    },
    data: {
      type: Object,
      default: () => {
        return {
          makerId: '正在获取...',
        }
      }
    }
  },
  data () {
    //这里存放数据
    return {
    };
  },
  //监听属性 类似于data概念
  computed: {
  },
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () { },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () {
  }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
  //方法集合
  methods: {
    detailsClick () {
      this.$emit('detailsClick', this.id, this.data)
    },
    close () {
      this.$emit("close")
    }
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.main {
  width: 200px;
  height: 90px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-radius: 10px;
  background: #ffffff;
  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-right: 10px;
    .content {
      padding-left: 20px;
    }
  }
  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-right: 10px;
    font-size: 14px;
    line-height: 25px;
    .bottom-item {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      color: #ffffff;
      line-height: 18px;
      font-weight: Regular;
    }
    .details {
      font-size: 14px;
      font-weight: Regular;
      position: absolute;
      right: 20px;
      top: 70px;
      color: #12afff;
      cursor: pointer;
    }
  }
  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    width: 20px;
    height: 15px;
    text-align: center;
    line-height: 10px;
    cursor: pointer;
  }
}
</style>