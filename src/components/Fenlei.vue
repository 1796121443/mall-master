<template>
    <el-container class="container" >

      <el-main>
        <el-row style="border: 1px solid lightgray;margin-bottom: 40px;height:60px;line-height: 350%">
          <el-col :span="22">
            <i class="el-icon-document"></i>
            <span>数据列表</span>
          </el-col>
          <el-col :span="2">
            <el-button  size="mini" @click="gotoLink('AddKinds')">添加</el-button>
          </el-col>
        </el-row>

        <el-table
            ref="multipleTable"
            tooltip-effect="dark"

            border
            router
            :data="tableData1.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          >
            <el-table-column
              prop="id"
              label="编号"
width="80px"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="kinds"
              label="分类名称"
width="200px"
            align="center">
            </el-table-column>
            <el-table-column
              prop="level"
              label="级别"
width="90px"
            align="center">
            </el-table-column>
            <el-table-column
              prop="count"
              label="商品数量"
              align="center"
         >
            </el-table-column>
            <el-table-column
              prop="min"
              label="数量单位"

            align="center">
            </el-table-column>
            <el-table-column
              prop="nav"
              label="导航栏"
width="100px"
            align="center">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.t"
                  active="1"
                  inactive-value="0"
                  @click.native="handelUpdate"
                 >
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column
              prop="show"
              label="是否显示"

            align="center">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.u"
                  active="1"
                  inactive-value="0"
                  @click.native="handelUpdate"
                >
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column
              prop="order"
              label="排序"
width="100px"
            align="center">
            </el-table-column>
            <el-table-column
              prop="set"
              label="设置"
              width="180px"
           align="center">
              <el-row>
                <el-col :span="13">
                  <template >
              <el-button size="mini" @click="goTolink('FenFuZhuang')">查看下级</el-button>
                  </template>
                </el-col>
                <el-col :span="4">
              <el-button size="mini">转移商品</el-button>
                </el-col>
              </el-row>
            </el-table-column>
            <el-table-column
              label="操作"

            align="center">
              <el-row>
                <el-col :span="12">
                  <el-button size="mini">编辑</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button size="mini" type="danger">删除</el-button>
                </el-col>
              </el-row>
            </el-table-column>
          </el-table>
        <el-pagination
              class="block"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage4"
              :page-sizes="[5,10,15]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableData1.length">
            </el-pagination>
      </el-main>
    </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import ElFooter from "element-ui/packages/footer/src/main";
    import {mapState} from 'vuex'
    export default {
        name: "Fenlei",
      components: {ElHeader, ElFooter, ElMain, ElContainer,},
      data(){

      return {
        currentPage4: 4,
        value1: true,
        currentPage: 1,
        pageSize:5,
        formInline: {
          user: '',
          region: '',
          activeIndex: '1',
          foods: '',
          size: '',

          numberValidateForm: {
            age: ''
          }
        },

        multipleSelection: []
      }
    },
      computed:{

        tableData1:function(){
          return this.$store.state.tableData1;
        },
      },

      methods: {

          next(){

          },
        goTolink(){
          this.$router.replace('/FenFuZhuang');

        },
        gotoLink(){
           this.$router.replace('/AddKinds');

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
        // handleSelectionChange(val) {
        //   this.multipleSelection = val;
        // },

      }
    }
</script>

<style scoped>
.div1{
  border:1px solid lightgray;
  height:40px;
  width: 1035px;
  margin-left: 0px;
  padding-top: 10px;
}
  .div2{
    height: 850px;
    margin-top: 30px;
  }
  .block{
    float: right;
  }
</style>
