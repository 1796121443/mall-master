<template>
  <el-container>
    <el-row :gutter="40">
      <el-col :span="8">
        <el-card shadow="always" :body-style="{ padding: '0px' }" >
              <div class="div"><i class="el-icon-s-order"></i>
                <span class="span">今日订单总数</span>
              <div class="div2">{{this.$store.state.menu.users}}</div>
              </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" :body-style="{ padding: '0px' }" >
          <div class="div"><i class="el-icon-money"></i>
            <span class="span">今日销售总额</span>
            <div class="div2">{{this.$store.state.menu.words}}</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" :body-style="{ padding: '0px' }" >
          <div class="div"><i class="el-icon-coin"></i>
            <span class="span">昨日销售总额</span>
            <div class="div2">{{this.$store.state.menu.words}}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>


  </el-container>
</template>

<script>
  import ElContainer from "element-ui/packages/container/src/main";
  import ElCard from "element-ui/packages/card/src/main";
  export default {
    name: "main2",
    components: {ElCard, ElContainer}
  }
</script>

<style scoped>
  .div{
    width: 230px;
    height: 100px;
    padding-left: 20px;
    padding-top: 20px;
    color: grey;

  }
  .card{
    width: 200px}
  .row {
    margin: 20px;
    padding: 20px;
  }
  .div1{
    display: inline;
  }
  .el-icon-s-order,.el-icon-money, .el-icon-coin {
    color: dodgerblue;
    font-size: 80px;
  }
  .div2{
    margin-left: 90px;
  }
</style>
