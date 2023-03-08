<!--
 * @Description: nodejs post请求数据
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2023-03-08 14:52:44
 * @LastEditors: zhoucheng
-->
<template>
  <div class='mainbody'>
    <div class="title">{{ contentName }} </div>
    <div class="content">
      <el-row class="topSelectTwoLine">
        <el-form :inline="true"
                 :model="searchForm">
          <el-row class="topFirstLine">
            <el-form-item label-width="90px"
                          label="编号">
              <el-input v-model="searchForm.id"
                        placeholder=""> </el-input>
            </el-form-item>
          </el-row>
          <el-row class="topButton">
            <el-button type="primary"
                       @click="onSubmit">查 询</el-button>
            <el-button type="info"
                       style="margin-left:17px"
                       @click="resetForm">重 置</el-button>
          </el-row>
        </el-form>
      </el-row>
      <div class="lineItem">
        <el-table ref="multipleTable"
                  border
                  :data="tableData">
          <el-table-column show-overflow-tooltip
                           prop="id"
                           label="编号">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           prop="name"
                           label="名称">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           prop="nickName"
                           label="别名">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作">
            <template slot-scope="scope">
              <el-button type="text"
                         @click="handleClick(scope.row)">详情</el-button>
              <el-button type="text"
                         @click="handleClickRouter(scope.row)">跳转</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
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
    </div>
    <!--  -->
    <el-dialog title="提示"
               :visible.sync="dialogVis"
               width="50%">
      {{ dialogList }}
    </el-dialog>
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
      searchForm: {},

      dialogVis: false,
      dialogList: {}
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
    this.queryTable(1)
  },
  // 方法集合
  methods: {
    // 查询
    queryTable (val) {
      let params = {
        id: this.searchForm.id
      }
      this.$axios.post('/nodeTest/node/testPost', params).then(res => {
        this.total = res.data.result.length
        if (val === 1) {
          this.tableData = res.data.result.slice(0, this.pageSize)
        } else {
          this.tableData = res.data.result.slice(this.pageSize * (val - 1), this.pageSize * (val))
        }
      })
    },
    // 绑定分页
    changeList (change) {
      this.pageNum = change
      this.queryTable(this.pageNum)
    },
    // 查询
    onSubmit () {
      this.pageNum = 1
      this.queryTable(1)
    },
    // 重置
    resetForm () {
      this.pageNum = 1
      this.searchForm = {}
      this.queryTable(1)
    },
    // 详情
    handleClick (row) {
      this.dialogList = row
      this.dialogVis = true
    },
    // 跳转
    handleClickRouter (row) {
      this.$router.push({
        name: 'test',
        query: {
          id: row.id
        }
      })
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
    padding-bottom: 20px;
    .topSelectTwoLine {
      width: 100%;
      height: 125px;
      .topButton {
        display: flex;
        padding-left: 91px;
      }
    }
    .lineItem {
      width: 100%;
      margin: 10px auto;
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
  }
}
</style>