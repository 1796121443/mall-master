<template>
  <el-container>
    <el-main>
      <el-container class="container">
        <el-header >
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
        <el-main class="main" >

          <el-form ref="form" :model="form" label-width="80px">
                <el-form-item size="small" label="活动名称:">
                  <el-input v-model="form.name" placeholder="活动名称" style="width: 200px"></el-input>
                </el-form-item>
          </el-form>

        </el-main>
      </el-container>
<el-container>
  <el-main  class="row2">
    <el-row>
      <el-col :span="3">
        <i class="el-icon-tickets"></i>
        <span>数据列表</span>
      </el-col>
    </el-row>

  </el-main>
</el-container>

      <el-table
        class="table"
        ref="multipleTable"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        border
        :data="tableData8.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      >

        <el-table-column
          type="selection"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="编号"
          width="80px"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="活动标题"
          width="auto"
          align="center">
        </el-table-column>
        <el-table-column
          prop="station"
          label="活动状态"
          width="180px"
          align="center">
        </el-table-column>
        <el-table-column
          prop="timeBefore"
          align="center"
          width="180px"
          label="开始时间">
        </el-table-column>
        <el-table-column
          prop="timeEnd"
          align="center"
          width="180px"
          label="订单金额">
        </el-table-column>
        <el-table-column
          align="center"
          label="上线/下线"
          width="160px">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.value"
              active="1"
              inactive-value="0">
            </el-switch>
          </template>
        </el-table-column>


        <el-table-column
          align="center"
          width="220px"
          label="操作">
          <el-row>
            <el-col :span="8"><el-link type="primary" :underline="false">设置商品</el-link></el-col>
            <el-col :span="8"> <el-link type="primary" :underline="false">编辑</el-link></el-col>
            <el-col :span="8"><el-link type="primary" :underline="false" >删除</el-link></el-col>
          </el-row>
        </el-table-column>
      </el-table>

        <el-pagination
          class="pagination1"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          :page-sizes="[5,10,15]"
          layout="total,sizes, prev, pager, next, jumper"
          :total="tableData8.length-1"
          background>
        </el-pagination>


    </el-main>
  </el-container>
</template>

<script>
  import ElContainer from "element-ui/packages/container/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
  import ElMain from "element-ui/packages/main/src/main";
  import ElSwitch from "element-ui/packages/switch/src/component";
  export default {
    name: "flash",
    components: {ElSwitch, ElMain, ElHeader, ElContainer},
    data(){
      return {

        currentPage: 1,
        pageSize:5,
        form: {
          name: '',
          person:'',
          date:'',
          type:'',
          order:'',
          station:'',
          from:''
        },
        multipleSelection: []
      }

    },
    computed:{
      tableData8:function(){
        return this.$store.state.tableData8;
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
    height: 145px;
  }
  .row1{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .row2{
    border: 1px solid lightgray;
    margin-top: 20px;
    height: 65px;
    /*line-height: 330%*/
  }
  .table{
    margin-top: 25px;
    margin-bottom: 20px;
  }
  .form1{
    /*margin-top: 20px;*/
    /*background-color: red;*/
  }
  .pagination1{
    float: right;
    /*background-color: lightgray;*/
  }
  .main{
    padding-top: 10px;
  }
</style>
