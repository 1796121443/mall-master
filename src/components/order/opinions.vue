<template>
  <el-container>
    <el-main>
      <div class="div2">
        <el-row>
          <el-col :span="22">
            <i class="el-icon-tickets"></i>
            <span>数据列表</span>
          </el-col>
          <el-col :span="1">
            <el-button type="primary" size="small">添加</el-button>
          </el-col>
        </el-row>
      </div>

      <el-table
        class="table"
        ref="multipleTable"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        border
        :data="tableData7.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      >

        <el-table-column
          type="selection"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="编号"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="品牌名称">
        </el-table-column>
        <el-table-column
          prop="first"
          label="品牌首字母">
        </el-table-column>
        <el-table-column
          prop="order"
          label="排序">
        </el-table-column>
        <el-table-column
          label="品牌制造商">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.value"
              active="1"
              inactive-value="0"
              @change="open">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="是否显示">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.value1"
              active="0"
              inactive-value="1"
              @change="open"  >

            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="connect"
          label="相关">

        </el-table-column>
        <el-table-column
          label="操作">


          <el-row>
            <el-col :span="13"> <el-button size="mini">编辑</el-button></el-col>
            <el-col :span="4">
              <el-button size="mini" type="danger">删除</el-button>
            </el-col>
          </el-row>

        </el-table-column>
      </el-table>

      <el-form class="form1" :model="form" inline="true">
        <el-form-item size="small">
          <el-select  v-model="form.order">
            <el-option label="批量删除" value="beijing"></el-option>
          </el-select>
          <el-button type="primary" size="small">确定</el-button>
        </el-form-item>
        <el-pagination
          style="float: right;"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          :page-sizes="[5,10,15]"
          layout="total,sizes, prev, pager, next, jumper"
          :total="tableData7.length"
          background
        >
        </el-pagination>
      </el-form>

    </el-main>

  </el-container>
</template>

<script>
  import ElContainer from "element-ui/packages/container/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
  import ElMain from "element-ui/packages/main/src/main";
  import ElSwitch from "element-ui/packages/switch/src/component";
  export default {
    name: "opinion",
    components: {ElSwitch, ElMain, ElHeader, ElContainer},
    data(){
      return{
        beijing:'',
        form:{order:''},
        currentPage: 1,
        pageSize:5,
        multipleSelection:[]
      }

    },
    computed:{
      tableData7:function(){
        return this.$store.state.tableData7;
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
      open(){
        this.$message.error(' Request failed with status code 500');
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
  .header{
    border: 1px solid lightgray;
    height: 170px!important;
    line-height: 350%;
    padding-left: 10px;
    /*background-color: dodgerblue;*/
  }
  .table{
    margin-top: 20px;
  }
  .div2{
    border: 1px solid lightgray;
    margin-top: 15px;
    height: 70px;
    line-height: 360%;
  }
  .pagination{
    float: right;
    margin-top: 20px;
  }
  .form1{
    margin-top: 20px;
  }
</style>
