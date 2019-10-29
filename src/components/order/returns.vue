<template>
  <el-container>
    <el-main>
      <el-container class="container">
        <el-header>
          <el-row class="row1">
            <el-col :span="20">
              <i class="el-icon-search"></i>
              <span>筛选搜索</span>
            </el-col>
            <el-col :span="2">
              <el-button size="small">重置</el-button>
            </el-col>
            <el-col :span="2">
              <el-button size="small" type="primary">查询搜索</el-button>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="main">

          <el-form ref="form" :model="form" label-width="80px">
            <el-row>
              <el-col :span="8">
                <el-form-item size="small" label="输入搜索:">
                  <el-input v-model="form.name" placeholder="服务单号" style="width: 200px"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理状态:">
                  <el-select :clearable="true" v-model="form.station" placeholder="全部" style="width: 200px">
                    <el-option label="待处理" value="daifukuan"></el-option>
                    <el-option label="退货中" value="daifahuo"></el-option>
                    <el-option label="已完成" value="yifahuo"></el-option>
                    <el-option label="已拒绝" value="yiwanc"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="申请时间:">
                  <el-date-picker type="date" placeholder="请选择时间" v-model="form.date"
                                  style="width: 200px;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8">
                <el-form-item label="操作人员:" >
                  <el-input v-model="form.type" placeholder="全部" style="width: 200px"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理时间:" >
                  <el-date-picker type="date" placeholder="请选择时间" v-model="form.date1"
                                  style="width: 200px;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-main>
      </el-container>

      <el-row class="row2">
        <el-col :span="3">
          <i class="el-icon-tickets"></i>
          <span>数据列表</span>
        </el-col>
      </el-row>


      <el-table
        class="table"
        ref="multipleTable"
        tooltip-effect="dark"
        style="width: 100%"
        border
        :data="tableData6.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      >

        <el-table-column
          type="selection"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label='服务单号'
          width="130px"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="申请时间"
          width="220px"
          align="center">
        </el-table-column>
        <el-table-column
          prop="number"
          align="center"
          width="100px"
          label="用户账号">
        </el-table-column>
        <el-table-column
          prop="yuan"
          align="center"
          width="160px"
          label="退款金额">
        </el-table-column>
        <el-table-column
          prop="station"
          align="center"
          width="150px"
          label="申请状态">

        </el-table-column>
        <el-table-column
          prop="time"
          label="处理时间"
          width="220px"
          align="center">
        </el-table-column>


        <el-table-column
          align="center"
          width="220px"
          label="操作">
          <el-button size="small">查看详情</el-button>
        </el-table-column>
      </el-table>


      <el-form class="form1" inline="true">
        <el-form-item size="small" >
          <el-select v-model="form.order">
            <el-option label="批量删除" value="fahuo"></el-option>
          </el-select>
          <el-button type="primary" size="small">确定</el-button>
        </el-form-item>
        <el-pagination
          style="float: right;"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="[5,10,15]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData6.length">
        </el-pagination>
      </el-form>

    </el-main>
  </el-container>
</template>

<script>
  import ElContainer from "element-ui/packages/container/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
  import ElMain from "element-ui/packages/main/src/main";
  export default {
    name: "return",
    components: {ElMain, ElHeader, ElContainer},
    data(){
      return {

        currentPage: 1,
        pageSize:9,
        form: {
          name: '',
          person:'',
          date:'',
          date1:'',
          type:'',
          order:'',
          station:'',
          from:''
        },
        multipleSelection: []
      }
    },
    computed:{
      tableData6:function(){
        return this.$store.state.tableData6;
      },

    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

    }
  }
</script>

<style scoped>
  .container{
    border: 1px lightgray solid;
    height: 230px;
  }
  .row1{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .row2{
    border: 1px solid lightgray;
    margin-top: 20px;
    height: 60px;
    line-height: 330%;
  }
  .table{
    margin-top: 25px;
    margin-bottom: 20px;
  }
  .form1{
    margin-top: 20px;
  }
  .pagination{
    margin-top: 20px;
  }
</style>
