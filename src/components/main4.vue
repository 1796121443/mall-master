<template>
    <el-container>
      <el-main>
      <el-row  class="row">
        <el-col :span="12">
          <el-card shadow="always" :body-style="{ padding: '0px' }" class="card">
            <div class="div"><span>商品总览</span></div>
            <div class="div2">
              <el-row class="row1">
                <el-col :span="6">{{this.$store.state.data.first}}</el-col>
                <el-col :span="6">{{this.$store.state.data.second}}</el-col>
                <el-col :span="6">{{this.$store.state.data.third}}</el-col>
                <el-col :span="6">{{this.$store.state.data.forth}}</el-col>
              </el-row>
              <el-row>
                <el-col :span="6">已下架</el-col>
                <el-col :span="6">已上架</el-col>
                <el-col :span="6">库存紧张</el-col>
                <el-col :span="6">全部商品</el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card shadow="always" :body-style="{ padding: '0px' }" class="card">
            <div class="div"><span>商品总览</span></div>
            <div class="div2">
              <el-row class="row1">
                <el-col :span="6">{{this.$store.state.user.now}}</el-col>
                <el-col :span="6">{{this.$store.state.user.used}}</el-col>
                <el-col :span="6">{{this.$store.state.user.month}}</el-col>
                <el-col :span="6">{{this.$store.state.user.count}}</el-col>
              </el-row>
              <el-row>
                <el-col :span="6">今日新增</el-col>
                <el-col :span="6">昨日新增</el-col>
                <el-col :span="6">本月新增</el-col>
                <el-col :span="6">会员总数</el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
</el-main>
    </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    export default {
        name: "main4",
      components: {ElHeader, ElMain, ElContainer}
    }
</script>

<style scoped>
.div{
background-color: rgb(242 246 252);
  height: 35px;
line-height: 240%;
  padding-left: 20px;
}
  .card{
width: 557px;

  }
  .div2{
    height: 80px;
    margin: 40px;
  }
  .row {
    /*margin-top: 20px;*/
  }
  .row1{
    color: red;
    font-size: 25px;
  }
</style>
