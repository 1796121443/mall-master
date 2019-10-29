<template>
    <el-container class="container">
      <el-main >
          <el-row class="row1" >
            <el-col :span="22">
              <i class="el-icon-document"></i>
              <span>数据列表</span>
            </el-col>
            <el-col :span="2">
              <el-button  size="small" @click="addType">添加</el-button>
            </el-col>
          </el-row>

        <el-table
          class="table"
          router
          ref="multipleTable"
          tooltip-effect="dark"
          border
          :data="tableData2.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        >
          <el-table-column
            align="center"
            prop="id"
            label="编号"
            width="110px"
          >
          </el-table-column>
          <el-table-column
            prop="kinds"
            align="center"
            label="类型名称"
            width="auto">
          </el-table-column>

          <el-table-column
            prop="count"
            align="center"
            label="属性数量"
            width="200px">
          </el-table-column>
          <el-table-column
            prop="min"
            label="参数数量"
            align="center"
            width="200px">
          </el-table-column>

          <el-table-column
            prop="set"
            label="设置"
            align="center"
            width="203px">
            <el-row>
              <el-col :span="13">
                <el-button size="mini" @click="goToLinkList('TypeList')">属性列表</el-button>
              </el-col>
              <el-col :span="4">
                <el-button size="mini" @click="goToLinklist('numList')">参数列表</el-button>
              </el-col>
            </el-row>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center"
          width="203px">
            <el-row>
              <el-col :span="13">
                <el-button size="mini" @click="types()">编辑</el-button>
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
          :total="tableData2.length">
        </el-pagination>

      </el-main>
    </el-container>
</template>

<script>
  import ElContainer from "element-ui/packages/container/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
  import ElMain from "element-ui/packages/main/src/main";
  import ElFooter from "element-ui/packages/footer/src/main";
    export default {
        name: "Type",
      components: {ElMain, ElContainer,ElFooter,ElHeader},
      data(){
          return{
            value1: true,
            currentPage: 1,
            pageSize:5,
            multipleSelection: []
        }
      },
      computed:{

        tableData2:function(){
          return this.$store.state.tableData2;
        },
        numList:function(){
          return this.$store.state.numList;
        },
      },

      methods: {
        goToLinklist(){
          this.$router.replace('/numList')
        },
       types() {
          this.$prompt('类型名称', '编辑类型', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputValue: '服装-T恤',

          }).then(({ value }) => {
            this.$message.error('Request failed with status code 500')
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        },

        addType(){
          this.$prompt('类型名称', '添加类型', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
           inputValue:'服装-T恤',
          }).then(({ value }) => {
            this.$message.error('Request failed with status code 500 ' )
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            })
          })
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
        onSubmit() {
          console.log('sumbmit!')

        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        goToLinkList(){
          this.$router.replace('/TypeList')

        }
      },

    }
</script>

<style scoped>
.row1 {
  border: 1px solid lightgray;
  height: 60px;
  line-height: 340%;
  margin-bottom: 40px;
}
  .container{

     }
  .table{
    width: 100%;
  }
</style>
