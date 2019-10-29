<template>
  <el-container>
    <el-main>
      <el-container class="container">
        <el-main class="main" >
          <el-row class="row1">
            <el-col :span="20">
              <i class="el-icon-search"></i>
              <span>筛选搜索</span>
            </el-col>
            <el-col :span="4">
              <el-button size="small">重置</el-button>
              <el-button size="small" type="primary">查询搜索</el-button>
            </el-col>
          </el-row>


          <el-form class="form2" ref="form" :model="form" label-width="80px" :inline="true" >

            <el-form-item size="small" label="广告名称:" label-width="150px">
              <el-input v-model="form.name" placeholder="广告名称" style="width: 200px"></el-input>
            </el-form-item>


            <el-form-item  size="small" label="广告位置" label-width="200px">
              <el-select v-model="form.value" placeholder="全部" :clearable="true">
                <el-option label="PC首页轮播" value="quan"></el-option>
                <el-option label="APP首页轮播" value="hui"></el-option>
              </el-select>
            </el-form-item>
          </el-form>

          <el-form ref="form" :model="form" label-width="80px" style="margin-left:-50px">
              <el-form-item label="到期时间:" size="small" label-width="200px">
                <el-date-picker
                  v-model="form.time"
                  type="date"
                  placeholder="请选择时间" >
                </el-date-picker>
              </el-form-item>

          </el-form>
        </el-main>
      </el-container>
      <el-container>
        <el-main  class="row2">
          <el-row>
            <el-col :span="22">
              <i class="el-icon-tickets"></i>
              <span>数据列表</span>
            </el-col>
            <el-col :span="2">
              <el-button size="small" >添加广告</el-button>
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
        :data="tableData11.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      >

        <el-table-column
          type="selection"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="编号"
          width="100px"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="广告名称"
          width="250px"
          align="center">
        </el-table-column>
        <el-table-column
          prop="position"
          align="center"
          width="100px"
          label="排序">
        </el-table-column>
        <el-table-column
          align="center"
          width="100px"
          label="广告图片">
          <template width="90" slot-scope="scope">
            <img style="width:80px;height:80px;border:none;" :src="scope.row.url">
          </template>
     </el-table-column>
        <el-table-column
        label="时间"
        width="230px"
        align="center"
        prop="time">

        </el-table-column>
        <el-table-column
          label="上线/下线"
          width="100px"
          align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.value"
              active="1"
              inactive-value="0">
            </el-switch>
          </template>
        </el-table-column>
<el-table-column
prop="times"
label-width="100px"
label="点击次数"
align="center">

</el-table-column>
        <el-table-column
          prop="times"
          label-width="100px"
          label="生成订单"
          align="center">

        </el-table-column>

        <el-table-column
          align="center"
          width="100px"
          label="操作">
          <el-row>
            <el-col :span="12"><el-link type="primary" :underline="false">设置排序</el-link></el-col>
            <el-col :span="12"><el-link type="primary" :underline="false" >删除</el-link></el-col>
          </el-row>
        </el-table-column>
      </el-table>
      <el-form class="form1" :model="form" :inline="true">
        <el-form-item size="small">
          <el-select  v-model="form.order" placeholder="批量操作">
            <el-option label="设为推荐" value="设为"></el-option>
            <el-option label="取消推荐" value="取消"></el-option>
            <el-option label="删除" value="删除"></el-option>


          </el-select>
          <el-button type="primary" size="small">确定</el-button>
        </el-form-item>
        <el-pagination
          class="pagination1"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          :page-sizes="[5,10,15]"
          layout="total,sizes, prev, pager, next, jumper"
          :total="tableData11.length-1"
          background>
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
    name: "guang",
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
          from:'',
          value:''
        },
        multipleSelection: []
      }

    },
    computed:{
      tableData11:function(){
        return this.$store.state.tableData11;
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
    height: 150px;
  }
  .row1{
    margin-top: 0px;
    margin-bottom: 5px;
  }
  .row2{
    border: 1px solid lightgray;
    margin-top: 20px;
    height: 74px;
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
   height: 380px!important;
  }
</style>
