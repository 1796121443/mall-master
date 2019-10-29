<template>
    <el-container class="el-container" >
      <el-header class="header" >
        <span>订单统计</span>
      </el-header>

        <el-container>
      <el-aside class="aside" width="200px" >

          <span class="span1">本月订单总数</span>
        <div class="div-number">{{this.$store.state.menu.month1}}</div>
          <div ><span class="diva">{{this.$store.state.menu.add1}}</span><span class="span">同比上月</span></div>

        <div class="div">
          <span class="span1">本周订单总数</span>
          <div class="div-number">{{this.$store.state.menu.week1}}</div>
          <div ><span class="divb">{{this.$store.state.menu.reduce1}}</span><span class="span">同比上周</span></div>
        </div>
        <div class="div">
          <span class="span1">本月销售总额</span>
          <div class="div-number">{{this.$store.state.menu.month2}}</div>
          <div ><span class="diva">{{this.$store.state.menu.add1}}</span><span class="span">同比上月</span></div>
        </div>
        <div class="div">
          <span class="span1">本周销售总额</span>
          <div class="div-number">{{this.$store.state.menu.week2}}</div>
          <div ><span class="divb" >{{this.$store.state.menu.reduce2}}</span><span class="span">同比上周</span></div>
        </div>
      </el-aside>
      <el-main >
            <div class="block">
              <el-date-picker
                v-model="value2"
                type="daterange"
                unlink-panels
                style="position: relative"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </div>
    <x-chart></x-chart>
<!--<vue2></vue2>-->
      </el-main>
        </el-container>

    </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    import ElAside from "element-ui/packages/aside/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import XChart from './chart1.vue'
import Vue2 from './vue2'
    export default {
        name: "main5",
      components: {Vue2,ElMain, ElAside, ElHeader, ElContainer,XChart},
      data() {
        return {
          value2: ''
        };
      }
    }
</script>

<style scoped lang="stylus">

  .header{
  background-color:rgb(242 246 252) ;
    line-height: 250%;
    font-size: 20px;
}
  .aside{
    /*margin-top: 10px;*/
    /*padding-top: 10px;*/
    border-right: 1px lightgray solid;
  }
.div{
  margin-top: 15px;
}
  .div .diva{
    color: green;
  }
  .div .divb{
    color: red;
  }
  .div-number{
    font-size: 23px;
    color: grey;
  }
  .span{
    color: lightgray;
  }
  .span1 {
    color: rgb(144 147 165);
  }
  .block {
    float: right;
    //width: 350px;
  }
  .el-container{
    border 1px lightgray solid

  }
</style>
