<!--
 * @Description: 正则校验
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-02-24 14:42:26
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="title">{{ contentName }} </div>
    <div class="content">
      <div class="lineItem">
        <el-table ref="multipleTable"
                  border
                  :data="tableData">
          <el-table-column type="selection"
                           width="50">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           prop="id"
                           label="编号">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="开关">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.isEnabled"
                         inactive-color="#ff4949"
                         active-color="#13ce66"
                         :inactive-value="'0'"
                         :active-value="'1'"
                         @change="changeSwitch(scope.row)">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="图片">
            <template slot-scope="scope">
              <el-image style="width:200px;height:50px"
                        :src="scope.row.imgUrl"
                        :preview-src-list="imgUrlList"
                        fit="fill">
              </el-image>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    contentName () {
      String
    }
  },
  data () {
    // 这里存放数据
    return {
      tableData: [
        { id: 1, isEnabled: '0', imgUrl: require('@/assets/element/img.jpeg') },
        { id: 2, isEnabled: '0', imgUrl: "" },
        { id: 3, isEnabled: '0', imgUrl: "" },
        { id: 4, isEnabled: '0', imgUrl: "" },
        { id: 5, isEnabled: '0', imgUrl: "" }
      ],
      imgUrlList: [require('@/assets/element/img.jpeg')]
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.qeuryImg()
  },
  // 方法集合
  methods: {
    // 开关事件
    changeSwitch (val) {
      if (val.isEnabled === '0') {
        this.$message({ message: "关成功", type: 'success' })
      } else if (val.isEnabled === '1') {
        this.$message({ message: "开成功", type: 'success' })
      }
    },
    // 图片
    qeuryImg () {
      this.tableData[2].imgUrl = require('@/assets/element/img.jpeg')
    }
  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.mainbody {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .title {
    width: 100%;
    height: 10%;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    letter-spacing: 2px;
    padding: 0.5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 100%;
    height: 90%;
    padding-bottom: 10px;
    .lineItem {
      width: 100%;
      margin: 10px auto;
    }
  }
}
</style>