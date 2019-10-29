<template>
    <el-container>
      <el-header>
        <el-row class="row1" >
          <el-col :span="22">
            <i class="el-icon-document"></i>
            <span>数据列表</span>
          </el-col>
          <el-col :span="2">
            <el-button  size="small" @click="add('addType')">添加</el-button>
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
          :data="tableData3.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        >
          <el-table-column
            type="selection">
<!--            <template slot-scope="scope">-->
<!--              <el-checkbox id="check" v-model="scope.row.checked"></el-checkbox>-->
<!--            </template>-->
          </el-table-column>
          <el-table-column
            align="center"
            prop="id"
            label="编号"
            width="80px"
          >
          </el-table-column>
          <el-table-column
            prop="kinds"
            align="center"
            label="属性名称"
            width="100px">
          </el-table-column>

          <el-table-column
            prop="type"
            align="center"
            label="商品类型"
            width="auto">
          </el-table-column>
          <el-table-column
            prop="choice"
            label="属性是否可选"
            align="center"
            width="110px">
          </el-table-column>

          <el-table-column
            prop="method"
            label="属性值的录入方式"
            align="center"
            width="180px">

          </el-table-column>
          <el-table-column
            prop="list"
            align="center"
            label="可选值列表"
            width="265px">
          </el-table-column>
          <el-table-column
            prop="order"
            align="center"
            label="排序"
            width="100px">
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
        <el-select size="small" v-model="value"   class="select">
          <el-option label="删除" value="删除"></el-option>
        </el-select>
        <el-button type="primary" v-model="valid"  size="small"
                   ref="formName" :plain="true" >
<!--          @click="use"-->
          确定</el-button>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="[5,10,15]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData3.length"
         style="    margin-top: 20px;float: right"
        >
        </el-pagination>

      </el-main>
    </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import Option from "element-ui"
    export default {
        name: "TypeList",
      components: {ElMain, ElHeader, ElContainer,Option},
      data(){
          return{
            valid:'',
            checkList:[],
            multipleTable:[],
            currentPage:1,
            pageSize:5,
            value:'',
            ruleForm: {
              names: '',
              class: '',
              second: '',
              brand: ''
            },
          }
      },
      computed: {

        tableData3: function () {
          return this.$store.state.tableData3;
        }
      },
      methods:{
          add(){
            return this.$router.replace('/addType')
          },
        handleSizeChange(){

        },
        handleCurrentChange(){

        },
        open(){
          this.$message({
            message: '请至少选择一项记录',
            type: 'warning'
          });
        },
        delete(){
          this.$message.error('Request failed with status code 500 ' )
        },
        use(){
         let select=document.getElementById('check');
         if(select!==checked){
  this.$message({
  message: '请至少选择一项记录',
  type: 'warning'
});
         }else{
           this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
             confirmButtonText: '确定',
             cancelButtonText: '取消',
             type: 'warning'
           }).then(() =>
           {
             this.$message({
               type: 'success',
               message: '删除成功!'
             });
           }).catch(() => {
             this.$message({
               type: 'info',
               message: '已取消删除'
             });
           });
         }
        },
        opens() {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() =>
          {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        // submitForm() {
        //     if (valid) {
        //       return this.$options.methods.delect.bind(this)();
        //     } else {
        //
        //       return this.$options.methods.opens.bind(this)();
        //     }
        // },
      },

    }
</script>

<style scoped>
  .pagination{
    float: right;
    margin-top: 20px;
  }
.row1{
  border:1px solid lightgray;
  height: 60px;
  line-height: 350%;
}
  .select{
    margin-top: 20px;
  }
</style>
