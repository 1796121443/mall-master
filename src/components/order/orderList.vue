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
                    <el-input v-model="form.name" placeholder="订单编号" style="width: 200px"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="收货人:">
                    <el-input v-model="form.person" placeholder="收货人姓名/手机号" style="width: 200px"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="提交时间:">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date"
                                    style="width: 200px;"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="8">
                  <el-form-item label="订单状态:">
                    <el-select :clearable="true" v-model="form.station" placeholder="全部" style="width: 200px">
                      <el-option label="待付款" value="daifukuan"></el-option>
                      <el-option label="待发货" value="daifahuo"></el-option>
                      <el-option label="已发货" value="yifahuo"></el-option>
                      <el-option label="已完成" value="yiwanc"></el-option>
                      <el-option label="已关闭" value="yiguanb"></el-option>

                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="订单分类:" >
                    <el-select :clearable="true" v-model="form.type" placeholder="全部" style="width: 200px">
                      <el-option label="正常订单" value="zhengc"></el-option>
                      <el-option label="秒杀订单" value="miaos"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="订单来源:" >
                    <el-select :clearable="true" v-model="form.from" placeholder="全部" style="width: 200px">
                      <el-option label="PC订单" value="pc"></el-option>
                      <el-option label="APP订单" value="app"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-main>
        </el-container>

        <el-row class="row2">
          <el-col :span="22">
            <i class="el-icon-tickets"></i>
            <span>数据列表</span>
          </el-col>
        </el-row>


        <el-table
          class="table"
          ref="multipleTable"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          border
          :data="tableData5.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
            label="订单编号"
          width="auto"
            align="center">
          </el-table-column>
          <el-table-column
            prop="time"
            label="提交时间"
          width="200px"
            align="center">
          </el-table-column>
          <el-table-column
            prop="number"
            align="center"
            width="80px"
            label="用户账号">
          </el-table-column>
          <el-table-column
            prop="yuan"
            align="center"
            label="订单金额">
          </el-table-column>
          <el-table-column
            prop="method"
            align="center"
            label="支付方式"
          width="100px">
          </el-table-column>
          <el-table-column
            prop="connect"
            align="center"
            width="100px"
            label="订单来源">

          </el-table-column>
          <el-table-column
            prop="station"
            align="center"
            label="订单状态">

          </el-table-column>

          <el-table-column
            align="center"
            width="200px"
            label="操作">
            <el-row>
              <el-col :span="13"> <el-button size="mini" @click="gotoLink('aboutOrder')">查看订单</el-button></el-col>
              <el-col :span="4">
                <el-button size="mini" type="danger">删除订单</el-button>
              </el-col>
            </el-row>
          </el-table-column>
        </el-table>
        <el-form class="form1" inline="true">
          <el-form-item size="small">
            <el-select  v-model="form.order">
              <el-option label="批量发货" value="fahuo"></el-option>
              <el-option label="关闭订单" value="dingdan"></el-option>
              <el-option label="删除订单" value="shanchu"></el-option>
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
            :total="tableData5.length-1"
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
    export default {
        name: "orderList",
      components: {ElMain, ElHeader, ElContainer},
      data(){
        return {

          currentPage: 1,
          pageSize:9,
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
        tableData5:function(){
          return this.$store.state.tableData5;
        },

      },
      methods:{
          gotoLink(){
            return this.$router.replace('./aboutOrder')
          },
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
    /*margin-top: 20px;*/
    /*background-color: red;*/
  }
.pagination1{
  float: right;
  /*background-color: lightgray;*/
}
</style>
