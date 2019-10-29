<template>
    <el-container class="container">
        <el-header class="header">
          <span>待处理事物</span>
      </el-header>
      <el-main>
<el-container>
  <el-main>
    <el-row>
      <el-col  :span="4"> 待付款订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="div-n">{{this.$store.state.event.order}}</span>
        <el-divider></el-divider>
      </el-col>

      <el-col  class="col" :span="8">待付款订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="div-n">{{this.$store.state.event.order}}</span>
        <el-divider></el-divider>

      </el-col>
      <el-col  class="col" :span="8">待付款订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="div-n">{{this.$store.state.event.order}}</span>
        <el-divider></el-divider>

      </el-col>
    </el-row>

    <el-row>
      <el-col  :span="4">待付款订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="div-n">{{this.$store.state.event.order}}</span>
        <el-divider></el-divider>

      </el-col>

      <el-col  class="col" :span="8">待付款订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="div-n">{{this.$store.state.event.order}}</span>
        <el-divider></el-divider>

      </el-col>
      <el-col  class="col" :span="8">待付款订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="div-n">{{this.$store.state.event.order}}</span>
        <el-divider></el-divider>

      </el-col>
    </el-row>

    <el-row>
      <el-col  :span="4">待付款订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="div-n">{{this.$store.state.event.order}}</span>
        <el-divider></el-divider>

      </el-col>

      <el-col  class="col" :span="8">待付款订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="div-n">{{this.$store.state.event.order}}</span>
        <el-divider></el-divider>

      </el-col>
      <el-col  class="col" :span="8">待付款订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="div-n">{{this.$store.state.event.order}}</span>
        <el-divider></el-divider>

      </el-col>
    </el-row>
  </el-main>


</el-container>
      </el-main>
    </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElDivider from "element-ui/packages/divider/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    export default {
        name: "main3",
      components: {ElHeader, ElMain, ElDivider, ElContainer}
    }
</script>

<style scoped>
.col{

  margin-left: 190px;
  width: 200px;
}
  /*.col1{*/

  /*  width: 200px;*/
  /*}*/

  .header{
    background-color: rgb(242 246 252);
  }
.container{
  border: 1px solid lightgray;
  margin-top: 40px;
}
  .div-n{
  color: red
  }

</style>
