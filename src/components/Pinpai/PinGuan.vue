<template>
    <el-container>
      <el-main>
        <el-header class="header">
        <el-row>
          <el-col :span="22">
            <i class="el-icon-search"></i>
            <span>筛选搜索</span>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small">查询结果</el-button>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="2">输入搜索: </el-col>
          <el-col :span="4"><el-input  label="输入搜索" placeholder="品牌名称、关键字"></el-input>
          </el-col>
        </el-row>
        </el-header>

        <div class="div2">
          <el-row>
            <el-col :span="22">
              <i class="el-icon-tickets"></i>
              <span>数据列表</span>
            </el-col>
           <el-col :span="1">
             <el-button type="primary" size="small" @click="goto('addTypePin')">添加</el-button>
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
          :data="tableData4.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
            label="品牌名称"
            align="center"
            width="auto"
          >
          </el-table-column>
          <el-table-column
            prop="first"
            label="品牌首字母"
            align="center"
            width="110px"
          >
          </el-table-column>
          <el-table-column
            prop="order"
            label="排序"
            align="center"
            width="100px"
          >
          </el-table-column>
          <el-table-column
            label="品牌制造商"
            align="center"
          width="120px">
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
            label="是否显示"
            align="center"
          width="110px">
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
            label="相关"
            align="center"
            width="130px"
          >

          </el-table-column>
          <el-table-column
            label="操作"
            align="center"
            width="200px"
          >


             <el-row>
                          <el-col :span="13">
                            <el-button size="mini" @click="gotoLink('changePin')">编辑</el-button></el-col>
                          <el-col :span="4">
                      <el-button size="mini" type="danger">删除</el-button>
                   </el-col>
                        </el-row>

            </el-table-column>
            </el-table>
        <el-pagination
          class="pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          :page-sizes="[5,10,15]"
          layout="total,sizes, prev, pager, next, jumper"
          :total="tableData4.length"
          background
        >
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
        name: "PinGuan",
      components: {ElSwitch, ElMain, ElHeader, ElContainer},
      data(){
return{
  currentPage: 1,
  pageSize:9,
}
      },
      computed:{
        tableData4:function(){
          return this.$store.state.tableData4;
        },

      },
      methods:{
          goto(){
            return this.$router.replace('./addTypePin')
          },
          gotoLink(){
            return this.$router.replace('./changePin')
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
  }
</style>
