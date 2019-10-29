<template>
  <el-container>

    <el-header>
      <el-row class="row1" >
        <el-col :span="22">
          <i class="el-icon-document"></i>
          <span>数据列表</span>
        </el-col>
        <el-col :span="2">
          <el-button  size="small" @click="gotolink('addType')">添加</el-button>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <el-table
        class="table"
        router
        ref="multipleTable"
        tooltip-effect="dark"
        border
        :data="numberList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      >
        <el-table-column
          align="center"
          prop="id"
          label="编号"
          width="90px"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          align="center"
          label="属性名称"
          width="auto">
        </el-table-column>

        <el-table-column
          prop="type"
          align="center"
          label="商品类型"
          width="auto">
        </el-table-column>
        <el-table-column
          prop="check"
          label="商品是否可选"
          align="center"
          width="200px">
        </el-table-column>
        <el-table-column
          prop="method"
          label="属性值的录入方式"
          align="center"
          width="200px">
        </el-table-column>
        <el-table-column
          prop="list"
          label="可选值列表"
          align="center"
          width="200px">
        </el-table-column>
        <el-table-column
          prop="order"
          label="排序"
          align="center"
          width="90px">
        </el-table-column>


        <el-table-column
          label="操作"
          align="center"
          width="203px">
          <el-row>
            <el-col :span="13">
              <el-button size="mini" >编辑</el-button>
            </el-col>
            <el-col :span="4">
              <el-button size="mini" type="danger">删除</el-button>
            </el-col>
          </el-row>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[5,10,15]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="numberList.length">
      </el-pagination>

    </el-main>
  </el-container>

</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    export default {
        name: "numList",
      components: {ElHeader, ElMain, ElContainer},
      data(){
          return{
            currentPage:1,
            pageSize:5,
            multipleSelection: [],
        }
      },
      computed:{
        numberList:function(){
          return this.$store.state.numberList;
        },
      },
      methods:{
          gotolink(){
            return this.$router.replace('/addType')
          },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        handelUpdate () {
          this.$message.error('Request failed with status code 500');
        },
      }
    }
</script>

<style scoped>
  .row1{
    border:1px solid lightgray;
    height: 60px;
    line-height: 350%;
  }

</style>
