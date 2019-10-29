<template>
  <el-container>

      <el-header>
        <el-steps :space="200"  :active="active" finish-status="success">
          <el-step title="填写商品信息"></el-step>
          <el-step title="填写商品促销"></el-step>
          <el-step title="填写商品属性"></el-step>
          <el-step title="选择商品关联"></el-step>
        </el-steps>
      </el-header>
      <el-main class="el-main">
        <el-form  size="small" class="form" :rules="rules"
                  ref="ruleForms" :model="ruleForms" label-width="80px"
                  id="form1"
        >
          <el-form-item label="商品分类" prop="class" required >
            <el-select v-model="ruleForms.class" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品名称" prop="names" required >
            <el-input class='input' v-model="ruleForms.names"></el-input>
          </el-form-item>
          <el-form-item label="副标题" prop="second" required>
            <el-input class='input' v-model="ruleForms.second"></el-input>
          </el-form-item>
          <el-form-item label="商品品牌" prop="brand" required>
            <el-select v-model="ruleForms.brand" placeholder="请选择品牌">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品介绍">
            <el-input class='input' type="textarea" placeholder="请输入内容" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="商品货号">
            <el-input class='input' v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="商品售价">
            <el-input class='input' v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="市场价">
            <el-input class='input' v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="商品库存">
            <el-input class='input' v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="计量单位">
            <el-input class='input' v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="商品重量">
            <el-input class='input' v-model="form.name"></el-input>克
          </el-form-item>
          <el-form-item label="排序">
            <el-input class='input' v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item >


            <!--<router-link :to="{path:'/foodsCUXIAO'}">wqeq</router-link>-->

          </el-form-item>
        </el-form>
        <!--          <el-button style="display: block"  size="middle" :plain="true" type="primary" id="btn1"-->
        <!--                      @click="next;toHidden">-->
        <!--            下一步，填写商品促销</el-button>-->
      </el-main>



  </el-container>

</template>
<script>
  import ElContainer from "element-ui/packages/container/src/main";
  import ElMain from "element-ui/packages/main/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
  export default {
    name:"changeFood",
    components: {ElHeader, ElMain, ElContainer},
    data() {
      return {
        active: 0,

        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        ruleForms: {
          names: '',
          class: '',
          second: '',
          brand: ''
        },
        rules: {
          names: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
            ,
          ],
          class: [
            {required: true, message: '请选择商品分类', trigger: 'blur'},
          ],

          second: [
            {required: true, message: '请输入副标题', trigger: 'blur'},

          ],
          brand:[
            {required: true, message: '请选择商品品牌', trigger: 'blur'},

          ]
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      open(){
        this.$message({
          showClose: true,
          message: '验证失败！',
          type: 'error'
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            return this.$options.methods.next.bind(this)();
          } else {

            return this.$options.methods.open.bind(this)();
          }
        });

      }
    }
  }
</script>
<style>
  .div1{
    border: 1px solid lightgray;
    margin-top:30px;
    margin-left: 30px;
    padding-top: 20px;
    padding-left: 100px;
    width: 700px;
  }
  .input{
    width: 500px;
  }
  .form{
    margin-top: 15px;
  }
</style>
