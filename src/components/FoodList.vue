<template>

  <el-container id="container">
    <el-main id="main22">
<div style="display: block" id="div-1">
<!--  <el-header class="header1">-->
<!--    </el-header>-->
    <el-main class="main1" >
      <el-container class="container">
        <el-main>
          <el-container>
            <el-header>
<el-form >
  <el-row>
    <el-col :span="20">
      <el-form-item>
        <i class="el-icon-search"></i><span>筛选搜索</span>
      </el-form-item>
    </el-col>
    <el-col :span="2">
      <el-form-item  size="mini">
        <el-button  @click="resetForm('options')">重置</el-button>
      </el-form-item>
    </el-col>
    <el-col :span="2" >
      <el-form-item size="mini" style="margin-left: 20px">
        <el-button type="primary"  @click="doFilter" >查询结果</el-button>
      </el-form-item>
<!--      @click="submitForm('numberValidateForm')"-->
    </el-col>
  </el-row>
</el-form >
            </el-header>
          </el-container>
            <el-form  size="medium" class="demo-form-inline"
                      label-width="100px">
              <el-row>
                <el-col :span="7">
                    <el-form-item label="输入搜索：">
                    <el-input v-model="tableDataName" placeholder="商品名称"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="商品货号：" >
                    <el-input v-model="tableDataNames" placeholder="商品货号"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="商品分类：" >
                    <el-cascader :options="options"  clearable></el-cascader>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
  <el-col :span="7">
    <el-form-item label="商品品牌：" >
      <el-select  placeholder="请选择品牌" clearable v-model="value">
        <el-option   v-for="item in option"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
      </el-select>
    </el-form-item>
  </el-col>
  <el-col :span="7">
    <el-form-item label="上架状态：" >
      <el-select  placeholder="全部" clearable v-model="vlaues">
        <el-option
          v-for="item in station"
                   :key="item.id"
                   :label="item.sta"
                   :value="item.value"></el-option>
      </el-select>
    </el-form-item>
  </el-col>
  <el-col :span="7">

    <el-form-item label="审核状态：" >
      <el-select  placeholder="全部" clearable  v-model="valuess">
        <el-option
          v-for="item in check"
          :key="item.id"
          :label="item.che"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-col>
</el-row>
            </el-form>

        </el-main>
      </el-container>

      <el-container class="container2">
        <el-header class="header3">
          <el-row>
            <el-col :span="23">
            <i class="el-icon-document"></i>
            <span>数据列表</span>
            </el-col>
            <el-col :span="1">
         <el-button  size="small" @click="gotoLinks('addFoods')">添加</el-button>
            </el-col>
          </el-row>
        </el-header>
      </el-container>
<el-container>
  <el-header></el-header>

    <el-table
      ref="multipleTable"
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
       border
      style="width: 100%"
      :data="tableDataEnd"
    >

      <el-table-column
        type="selection"
        align="center"
       >
      </el-table-column>
      <el-table-column
        prop="id"
        label="编号"
        align="center"
        width="80px"
       >
      </el-table-column>
      <el-table-column
        prop="photo"
        label="商品图片"
        align="center">
        <template width="90" slot-scope="scope">
          <img style="width:80px;height:80px;border:none;" :src="scope.row.url">
        </template>
      </el-table-column>
      <el-table-column
        prop="names"
        align="center"
        label="商品名称"
      width="170px">
      </el-table-column>
      <el-table-column
        align="center"
        prop="price"
        width="130px"
        label="价格/货号">
      </el-table-column>
      <el-table-column
        label="标签"
        align="center"
      width="110px">
      <template slot-scope="scope">
        <el-switch
          v-model="scope.row.s"
          active="1"
          inactive-value="0"
          inactive-text="上架:" >
        </el-switch>
        <el-switch
          v-model="scope.row.t"
          active="1"
          inactive-value="0"
          inactive-text="新品:" >
        </el-switch>
        <el-switch
          v-model="scope.row.u"
          active="1"
          inactive-value="0"
          inactive-text="推荐:" >
        </el-switch>
      </template>
      </el-table-column>
      <el-table-column
        prop="order"
        align="center"
        label="排序"
      width="100px">
      </el-table-column>
      <el-table-column
        label="SKU库存"
        align="center"
      width="90px">

        <el-button type="primary" round size="mini" @click="dialogFormVisible = true"><i class="el-icon-edit"></i></el-button>
        <el-dialog title="编辑货品信息" :visible.sync="dialogFormVisible"  left :append-to-body='true' :lock-scroll="false" width="40%">
          <el-form>
            <el-form-item label="商品货号:6946605">
              <el-input  placeholder="按sku编号搜索" size="small" style="width: 200px;vertical-align: middle" v-model="tableData12.number" >
                <template slot="append"><el-button class="el-icon-search"></el-button></template>
              </el-input>
            </el-form-item>
          </el-form>

          <el-table
            :data="tableData12"
            border
            style="width: 100%">
            <el-table-column
              prop="number"
              label="SKU编号"
              width="100">
            </el-table-column>
            <el-table-column
              prop="color"
              label="颜色"
              width="103">
            </el-table-column>
            <el-table-column
              prop="accept"
              label="容量">
            </el-table-column>
            <el-table-column
              prop="price"
              label="销售价格">
            </el-table-column>
            <el-table-column
              prop="have"
              label="商品库存">
            </el-table-column>
            <el-table-column
              prop="size"
              label="库存预警值">
            </el-table-column>

          </el-table>


<!--          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">-->

<!--            <el-form-item label="账号" prop="num">-->
<!--              <el-input v-model.number="ruleForm2.num"></el-input>-->
<!--            </el-form-item>-->

<!--            <el-form-item label="密码" prop="pass">-->
<!--              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>-->
<!--            </el-form-item>-->

<!--            <el-form-item label="记住密码" prop="delivery">-->
<!--              <el-switch v-model="ruleForm2.delivery"></el-switch>-->
<!--            </el-form-item>-->
<!--            <span><a>忘记密码？</a></span>-->

<!--          </el-form>-->


          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false; resetForm('ruleForm2')">取 消</el-button>
            <el-button type="primary" @click="open">确定</el-button>
<!--            submitForm('ruleForm2');-->
          </div>

        </el-dialog>

      </el-table-column>
      <el-table-column
        prop="sole"
        label="销量"
        align="center"
      width="100px">
      </el-table-column>
      <el-table-column
        label="审核状态"
        align="center"
      width="110px">
        <span>未审核</span>
        <el-link :underline="false" type="primary">审核详情</el-link>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
      width="160px"
     >
        <template slot-scope="scope"  >
          <el-row style="margin: 10px">
            <el-col :span="12">
              <el-button
                size="mini">
                查看
              </el-button>
            </el-col>
            <el-col :span="12">
              <el-button
                size="mini"
              @click="blockForm();gotoLink('changeFoodNow')">
               编辑
              </el-button>
            </el-col>
          </el-row>

          <el-row style="margin: 10px">
            <el-col :span="12">
              <el-button
                size="mini">
                日志
              </el-button>
            </el-col>
            <el-col :span="12">
              <el-button
                type="danger"
                size="mini">
                删除
              </el-button>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>

</el-container>
<el-container>
  <el-header>
    <el-form class="form1" :inline="true">
      <el-row>
        <el-col :span="12">
          <el-form-item size="small">
            <el-select  v-model="form.order">
              <el-option label="商品上架" value="fahuo"></el-option>
              <el-option label="商品下架" value="dingdan"></el-option>
              <el-option label="设为推荐" value="shanchu"></el-option>
              <el-option label="取消推荐" value="quxiao"></el-option>
              <el-option label="设为新品" value="shewei"></el-option>
              <el-option label="取消新品" value="xinpim"></el-option>
              <el-option label="转移到分类" value="sfenlei"></el-option>
              <el-option label="移入回收站" value="huishou"></el-option>

            </el-select>
            <el-button type="primary" size="small">确定</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="pageSize"
              :page-sizes="[5,10,15]"
              layout="total,sizes, prev, pager, next, jumper"
              :total="totalItems"
              background
            >
            </el-pagination>
          </el-form-item>
        </el-col>
      </el-row>
        </el-form>
  </el-header>
</el-container>
      </el-main>

</div>
    </el-main>
    <router-view></router-view>
  </el-container>
</template>

<script>

    import ElContainer from "element-ui/packages/container/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import ElFooter from "element-ui/packages/footer/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    import {mapState} from 'vuex'
    export default {
        name: "FoodList",
      components: {ElHeader, ElFooter, ElMain, ElContainer},
      data() {
        /*插入form方法*/
        let checkNum = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('账号不能为空'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
            let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
              if (!myreg.test(value) ) {
                callback(new Error('请输入正确的手机号码'));
              } else {
                callback();
              }

            }
          }, 1000);
        };
       let validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {

            callback();
          }
        };
        return {
          tableDataName: "",
          tableDataNames:"",
          tableDataNamess:"",
          value:'',
          tableDataEnd: [],
          currentPage: 4,
          pageSize: 2,
          totalItems: 0,
          filterTableDataEnd:[],
          flag:false,

          value:'',
          vlaues:'',
          valuess:'',
          form:{
            order:''
          },
    ruleForm:{

},

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

            multipleSelection: [],
        loginPower:false,
          /*插入form方法*/
          /*设定规则指向*/
          ruleForm2: {
          pass: '',
            num: '',
            delivery: false,
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],

            num: [
            { validator: checkNum, trigger: 'blur' }
          ]
        },

        /*插入form方法*/

        dialogTableVisible: false,
          dialogFormVisible: false,
          form: {
          name: '',
            type: [],
            resource: '',
            desc: ''
        },
        formLabelWidth: '120px'
      }
      },
      // created () {
      //   this.getList()
      // },
      created() {
        this.totalItems = this.tableData.length;
        if (this.totalItems > this.pageSize) {
          for (let index = 0; index < this.pageSize; index++) {
            this.tableDataEnd.push(this.tableData[index]);
          }
        } else {
          this.tableDataEnd = this.tableData;
        }
      },
      computed:{

        // mapState([
        //  'id'
//         //          ]),
            tableData:function(){
          return this.$store.state.tableData;
},
            tableData12:function(){
          return this.$store.state.tableData12;
        },
            options:function () {
          return this.$store.state.options;
        },
        huohao:function () {
          return this.$store.state.huohao;
        },
        FormData:function(){
          return this.$store.state.FormData;
        },
       option:function(){
          return this.$store.state.option;
        },
        station:function () {
          return this.$store.state.station;
        },
        check:function () {
          return this.$store.state.check;
        }

      },

      methods:{


        //前端搜索功能需要区分是否检索,因为对应的字段的索引不同
        //用两个变量接收currentChangePage函数的参数
        doFilter() {
          if (this.tableDataName == "" && this.tableDataNames == "" && this.tableDataNamess == "") {
            this.$message.warning("查询条件不能为空！");
            return;
          }
          this.tableDataEnd = []
          //每次手动将数据置空,因为会出现多次点击搜索情况
          this.filterTableDataEnd = []

          this.tableData.forEach((value, index) => {
            if (value.names || value.price  ) {
              if (value.names.indexOf(this.tableDataName) >= 0
                && value.price.indexOf(this.tableDataNames) >= 0) {
                this.filterTableDataEnd.push(value)
              }
            }
          }),
          //页面数据改变重新统计数据数量和当前页
          this.currentPage=1
          this.totalItems=this.filterTableDataEnd.length
          //渲染表格,根据值
          this.currentChangePage(this.filterTableDataEnd)
          //页面初始化数据需要判断是否检索过
          this.flag=true
        },
        openData() {},
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.pageSize = val;
          this.handleCurrentChange(this.currentPage);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.currentPage = val;
          //需要判断是否检索
          if(!this.flag){
            this.currentChangePage(this.tableDataEnd)
          }else{
            this.currentChangePage(this.filterTableDataEnd)
          }
        }, //组件自带监控当前页码
        currentChangePage(list) {
          let from = (this.currentPage - 1) * this.pageSize;
          let to = this.currentPage * this.pageSize;
          this.tableDataEnd = [];
          for (; from < to; from++) {
            if (list[from]) {
              this.tableDataEnd.push(list[from]);
            }
          }
        },

        open() {
          this.$confirm('是否要进行修改?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message.error('Request failed with status code 500');
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消修改'
            });
          });
        },
          Open(){
            this.$prompt('商品货号 :6946605', '编辑货品信息', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage: '邮箱格式不正确'
            }).then(({ value }) => {
              this.$message({
                type: 'success',
                message: '你的邮箱是: ' + value
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '取消输入'
              });
            });
          },
        gotoLink(){
          this.$router.replace('/changeFoodNow')
        },
        gotoLinks(){
          this.$router.replace('/addFoods')
        },
        blockForm(){
          let form=document.getElementById('main22');
          if(form.style.display==""){
            form.style.display="none"
          }else {
            form.style.display="block"
          }
        },
        deleteRow(index, rows) {
          rows.splice(index, 1);
        },
        addRow(tableData,event){//新增一行
          //之前一直想不到怎么新增一行空数据，最后幸亏一位朋友提示：表格新增一行，其实就是源数据的新增，从源数据入手就可以实现了，于是 恍然大悟啊！
          tableData.push({ name: '', xpath: '',desc:'',value:'',defVal:'' })
        },
              onSubmit(){
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
                if (this.$refs[formName] !== undefined) {
                  this.$refs[formName].resetFields();
                }

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
              handleSelectionChange(val) {
                this.multipleSelection = val;
              },
              handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
              },
              handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
              },

              // tablePagination(data=[]){
              //   /**
              //    * 表格数据分页的方法
              //    */
              //   let array = [], startNum=0, endNum = 0;
              //   this.total = data.length;
              //   startNum = (this.currentPage-1)*this.pageSize;
              //   if(this.currentPage*this.pageSize<this.total){
              //     endNum = this.currentPage*this.pageSize;
              //   } else {
              //     endNum = this.total;
              //   }
              //   array = data.slice(startNum, endNum);
              //   return array;
              // },
            },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //提交成功做的动作
            dialogFormVisible = false;
            /* alert('submit!') ; */
            this.$message({
              type: 'success',
              message: '提交成功'
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }


    }
</script>

<style scoped>

  .header1{
height: 0px!important;
  }
.header2{
  height: 30px!important;
  /*padding-top: 10px;*/
}
  .container{
    border:1px lightgray solid;
  /*margin-top: 10px;*/
  }
  .col_1{
    /*margin-left: 20px;*/
  }
  .header3{
    border:1px solid lightgray;
line-height: 350%;
  }
.container2{
  margin-top: 15px;
}
  .form1{margin-top: 10px}

</style>
