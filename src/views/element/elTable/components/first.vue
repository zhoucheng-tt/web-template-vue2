<!--
 * @Description: 时间相关
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-02-24 14:41:58
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="title">{{ contentName }} </div>
    <div class="content">
      <div class="lineItem">
        <el-table ref="multipleTable"
                  border
                  :data="tableData"
                  @select="select"
                  @row-click="rowClick"
                  @selection-change="selectionChange">
          <el-table-column type="selection"
                           width="50">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           prop="id"
                           label="编号">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           prop="name"
                           label="姓名">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           prop="nickName"
                           label="别名">
          </el-table-column>
        </el-table>
        <div class="bottom">
          <span class="total">共 {{total}} 条</span>
          <el-pagination class="pagination"
                         background
                         layout="prev,pager,next,jumper"
                         :current-page="pageNum"
                         :page-size="pageSize"
                         :total="total"
                         @current-change="changeList"></el-pagination>
        </div>
        <div class="button">
          <el-button class="buttonItem"
                     type="primary"
                     @click="bindSubmit">确 定</el-button>
        </div>
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
      tableData: [],
      pageNum: 1,
      pageSize: 3,
      total: 0,

      selectContent: {},
      selectData: [],
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
    this.queryList(1)
  },
  // 方法集合
  methods: {
    // 绑定默认查询表格
    queryList (val) {
      let tableData = [
        { id: 1, name: "一", nickName: 'one' },
        { id: 2, name: "二", nickName: 'two' },
        { id: 3, name: "三", nickName: 'three' },
        { id: 4, name: "四", nickName: 'four' },
        { id: 5, name: "五", nickName: 'five' }
      ]
      this.total = tableData.length

      if (val === 1) {
        this.tableData = tableData.slice(0, 3)
      } else if (val === 2) {
        this.tableData = tableData.slice(3, 5)
      }
    },
    // 绑定分页
    changeList (change) {
      this.pageNum = change
      this.queryList(this.pageNum)
    },
    // 当用户手动勾选数据行的时触发的事件
    select (selection, row) {
      this.$refs.multipleTable.clearSelection()
      if (selection.length === 0) {
        this.selectContent = {}
        return
      }
      this.$refs.multipleTable.toggleRowSelection(row, true);
    },
    // 表格某一行的单击事件
    rowClick (row) {
      this.$refs.multipleTable.clearSelection()
      if (this.selectData.length === 1) {
        this.selectData.forEach(item => {
          if (item == row) {
            this.$refs.multipleTable.toggleRowSelection(row, false);
            this.selectContent = {}
          } else {
            this.$refs.multipleTable.toggleRowSelection(row, true);
          }
        })
      } else {
        this.$refs.multipleTable.toggleRowSelection(row, false);
        this.selectContent = {}
      }
    },
    // 表格的选中 可以获得当前选中的数据
    selectionChange (val) {
      this.selectData = val
      if (this.selectData.length === 1) {
        this.selectContent = this.selectData[0]
      } else if (this.selectData.length === 2) {
        this.selectContent = this.selectData[1]
      }
    },
    // 绑定提交
    bindSubmit () {
      // 未选中有内容 / 有选中判断
      if (Object.keys(this.selectContent).length === 0) {
        this.$message({ message: "请选择", type: 'warning' })
      } else {
        this.$message({ message: this.selectContent, type: 'success' })
      }
    },
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
      // 表头最左侧选择
      /deep/ .el-table-column--selection.is-leaf.el-table__cell {
        .el-checkbox__inner {
          display: none !important;
        }
      }
      .bottom {
        margin-top: 10px;
        .total {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: bold;
          line-height: 30px;
        }
        .pagination {
          float: right;
          margin: 0px 10px;
        }
      }
      .button {
        width: 100%;
        margin: 10px auto;
        display: flex;
        justify-content: center;
        .buttonItem {
          width: 200px;
          border-radius: 30px;
        }
      }
    }
  }
}
</style>