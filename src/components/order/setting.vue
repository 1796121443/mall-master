<template>
  <el-container>
    <el-main class="el-main">
      <div class="div1">
      <el-form :label-position="labelPosition" label-width="100px"
               :model="ruleForm"  class="form" label-position="right">
        <el-form-item label="秒杀订单超过:">
          <el-input style="width: 280px"  v-model="ruleForm.name" >
            <template slot="append">分</template>
          </el-input>
         &nbsp;&nbsp; 未付款，订单自动关闭
        </el-form-item>
      <el-form-item label="正常订单超过:">
        <el-input style="width: 280px"  v-model="ruleForm.mail" >
          <template slot="append">分</template>
        </el-input>
        &nbsp;&nbsp; 未付款，订单自动关闭
      </el-form-item>
      <el-form-item label="发货超过:">
        <el-input style="width: 280px"  v-model="ruleForm.begin" >
          <template slot="append">天</template>
        </el-input>
        &nbsp;&nbsp; 未收货，订单自动完成
      </el-form-item>
        <el-form-item label="订单完成超过:">
          <el-input style="width: 280px"  v-model="ruleForm.over" >
            <template slot="append">天</template>
          </el-input>
          &nbsp;&nbsp; 自动结束交易,不能申请售后
        </el-form-item>
        <el-form-item label="订单完成超过:">
          <el-input style="width: 280px"  v-model="ruleForm.overs" >
            <template slot="append">天</template>
          </el-input>
          &nbsp;&nbsp; 自动五星好评
        </el-form-item>
<el-form-item >
  <el-button type="primary">提交</el-button>
</el-form-item>
      </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    export default {
        name: "Setting",
      components: {ElMain, ElHeader, ElContainer},
      data(){
          return{
            labelPosition:'right',
            ruleForm:{
              over:'',
              overs:'',
              name:'',
              mail:'',
              begin:'',
            }
          }
      }
    }
</script>

<style scoped>

.div1{
  border: 1px lightgray solid;
  padding-left: 60px;
  padding-top: 30px;
width: 600px;
}
  .el-main{

  }
</style>
