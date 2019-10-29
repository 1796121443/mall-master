
<template>
  <el-container>
    <el-header>

    </el-header>
    <el-main class="main">
      <div class="div1">
    <div class="div2">
      <el-row>
    <i class="el-icon-s-shop"></i>
      </el-row>
      <el-row>
      <span style="margin-left: -30px">mall-admin-web</span>
      </el-row>
    </div>
    <el-form status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="name">
        <el-input type="text" prefix-icon="el-icon-s-custom" v-model="name" >

        </el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input prefix-icon="el-icon-lock" show-password type="password" v-model="password" ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">
          <el-link :underline="false" href="http://localhost:8080/admin.html#/">
            提交
          </el-link>
        </el-button>
      </el-form-item>
    </el-form>
  </div>

    </el-main>
  </el-container>
</template>
<script>

  import ElLink from "element-ui/packages/link/src/main";
  export default {
    components: {ElLink},
    data() {
      return {

          name: 'admin',
          password: '123456',
        rules: {
          password: [
            {validator: validatePass, trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '正确的用户名', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
        }
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      }
    },
    methods : {
      login : function () {
        this.$router.push({path: '/Form1'});
      }

    }
  }
    // methods: {
      // submitForm(formName) {
      //   this.$refs[formName].validate((valid) => {
      //     if (valid) {
      //       alert('submit!');
      //     } else {
      //       console.log('error submit!!');
      //       return false;
      //     }
      //   });
      // },

</script>
<style>
  .div1{
   border: 1px  solid black;
    width: 400px;
    height: 400px;
    margin: 0 auto;
    padding-top: 200px;
    padding-right: 80px;
  }
.main{
margin-top: 100px;

}
 .el-icon-s-shop{
    font-size: 100px;

  }
 .div2{
   margin-top: -200px;
   padding-top: 20px;
   margin-left: 140px;
   margin-bottom: 20px;
   color: dodgerblue;
   font-size:25px;
 }
 .el-icon-s-shop{
  color: dodgerblue;
 }
</style>
