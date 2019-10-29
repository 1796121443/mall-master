<template>
    <el-container class="container">
      <el-main>
      <el-row  class="row">
        <el-col :span="6" >
          <el-card shadow="always" class="col" :body-style="{ padding: '0px' }" >
            <div class="div"><span>后台项目</span></div>
            <el-link class="link" :underline="false" href="https://github.com/macrozheng/mall">mall</el-link>
          </el-card>
          <el-card class="col" shadow="always" :body-style="{ padding: '0px' }" >
            <div class="div-11"><i class="el-icon-s-order"></i>
              <span class="span">今日订单总数</span>
              <div class="div2">{{this.$store.state.menu.users}}</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" >
          <el-card  shadow="hover" class="col" :body-style="{ padding: '0px' }" >
            <div class="div"><span>前端项目</span></div>
            <el-link class="link" :underline="false" href="https://github.com/macrozheng/mall-admin-web">mall-admin-web</el-link>
          </el-card>
          <el-card class="col" shadow="hover" :body-style="{ padding: '0px' }" >
            <div class="div-11"><i class="el-icon-money"></i>
              <span class="span">今日销售总额</span>
              <div class="div2">{{this.$store.state.menu.words}}</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="never"  class="col" :body-style="{ padding: '0px' }" >
            <div class="div"><span>学习教程</span></div>
            <el-link class="link" :underline="false" href="https://macrozheng.github.io/mall-learning">mall-learning</el-link>
          </el-card>
          <el-card class="col" shadow="never" :body-style="{ padding: '0px' }" >
            <div class="div-11"><i class="el-icon-coin"></i>
              <span class="span">昨日销售总额</span>
              <div class="div2">{{this.$store.state.menu.words}}</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <div class="div-1">
            <img class="img" src="../pages/admin/assets/erweima.jpg">
            <br/>
            <span>mall全套学习教程连载中！<br/><span style="color: dodgerblue">关注公号</span>，第一时间获取。</span>
          </div>
        </el-col>
      </el-row>
      </el-main>
    </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElCard from "element-ui/packages/card/src/main";
    import ElImage from "element-ui/packages/image/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    export default {
        name: "main1",
      components: {ElHeader, ElImage, ElCard, ElContainer},

    }
</script>

<style scoped>
  .div-11{
    width: 230px;
    height: 100px;
    padding-left: 20px;
    padding-top: 20px;
    color: grey;

  }
  .row {
    /*margin: 20px;*/
    padding: 20px;
  }
.col{
  margin-bottom: 20px;
  width: 250px;
}
  .el-icon-s-order,.el-icon-money, .el-icon-coin {
    color: dodgerblue;
    font-size: 80px;
  }
.div2{
  text-align: center;
}
.div{
  background-color: rgb(242 246 252);
  width: 296px;
  height: 30px;
  padding-left: 20px;
  padding-top: 10px;
  font-size: 20px;
  font-family: BrowalliaUPC;
  color: grey;
}
.div-1{
  margin-top: 0px;
  height: 250px;
  /*width: 240px;*/
}
  .link{
    color: dodgerblue!important;
    height: 60px;
    font-size: 18px;
    padding-left: 20px;
    padding-top: 10px;

  }

</style>
