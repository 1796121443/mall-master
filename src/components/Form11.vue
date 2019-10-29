<template>

  <el-container>

    <el-aside class="el-aside" i>

  <el-col :span="16" class="el-col1">
    <el-menu
      default-active="01"
      active-text-color="rgb(64 158 255)"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(48 65 86)"
      text-color="rgb(168 181 196)"
      :collapse="isCollapse"
      v-show="getCollapse"
      id="el-menu"
     >
<!--      rgb(31 45 61)-->
<!--      style="color: rgb(64 158 255)"-->
      <el-menu-item index="/Form1" class="el-menu-1" >
        <i class="el-icon-s-home"></i>
      <span>首页</span>
        <el-button @click="getCollapse">a</el-button>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span>商品</span>
        </template>
        <el-menu-item-group class="el-menu-2">
          <el-menu-item index="1-1"><i class="el-icon-s-order"></i>商品列表</el-menu-item>
          <el-menu-item index="1-2"><i class="el-icon-plus"></i>添加商品</el-menu-item>
          <el-menu-item index="1-3"><i class="el-icon-menu"></i>商品分类</el-menu-item>
          <el-menu-item index="1-4"><i class="el-icon-s-grid"></i>商品类型</el-menu-item>
          <el-menu-item index="1-5"><i class="el-icon-s-flag"></i>品牌管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


        <el-submenu index="1-5">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>订单</span>
          </template>
          <el-menu-item index="1-6"><i class="el-icon-menu"></i>订单列表</el-menu-item>
          <el-menu-item index="1-7"><i class="el-icon-setting"></i>订单设置</el-menu-item>
          <el-menu-item index="1-8"><i class="el-icon-s-management"></i>退货申请处理</el-menu-item>
          <el-menu-item index="1-9"><i class="el-icon-s-claim"></i>退货原因设置</el-menu-item>
        </el-submenu>



        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-management"></i>
            <span>营销</span>
          </template>
          <el-menu-item index="2-1"><i class="el-icon-alarm-clock"></i>秒杀活动列表</el-menu-item>
          <el-menu-item index="2-2"><i class="el-icon-coin"></i>优惠券列表</el-menu-item>
          <el-menu-item index="2-3"><i class="el-icon-discount"></i>品牌推荐</el-menu-item>
          <el-menu-item index="2-4"><i class="el-icon-wind-power"></i>新品推荐</el-menu-item>
          <el-menu-item index="2-5"><i class="el-icon-sunrise-1"></i>人气推荐</el-menu-item>
          <el-menu-item index="2-6"><i class="el-icon-suitcase"></i>专题推荐</el-menu-item>
          <el-menu-item index="2-7"><i class="el-icon-notebook-1"></i>广告列表</el-menu-item>

        </el-submenu>

    </el-menu>
  </el-col>
    </el-aside>


    <el-main >
     <Form2></Form2>
    </el-main>
  </el-container>
</template>
<script>
  import ElContainer from "element-ui/packages/container/src/main";
  import ElAside from "element-ui/packages/aside/src/main";
  import ElMain from "element-ui/packages/main/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
  import Form2 from "./Form2";
  export default {
    name: "Form1",
    data() {
      return {
        collapseBtnClick: false,
        isCollapse: false,
        activeNames: ['1']
      };
    },
    components: {Form2, ElHeader, ElMain, ElAside, ElContainer},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      collapseStatus() {
        this.collapseBtnClick = this.isCollapse;
        this.isCollapse = !this.isCollapse;
      },
      collapseOpen() {
        if (this.collapseBtnClick) return;
        this.isCollapse = false;
      },
      collapseClose() {
        if (this.collapseBtnClick) return;
        this.isCollapse = true;
      },
      handleChange(val) {
        console.log(val);
      },
      getCollapse(){
        let el_menu = document.getElementById("el-menu");
        if (el_menu.style.width ==="400px") {
          el_menu.style.width = "100px";
        }else(el_menu.style.width="400px")
      }
    }
  }
</script>
<style>
/*.el-col1{*/
/*  background-color: rgb(48 65 86);*/
/*  height: 800px;*/
/*}*/
/*.el-menu-vertical-demo:not(.el-menu--collapse) {*/
/*  width: 200px;*/
/*  min-height: 400px;*/
/*}*/
/*  .el-collapse-item__arrow{*/
/*    display: none;*/
/*  }*/
  /*.el-aside{*/
  /*  margin-top: 0px;*/
  /*}*/
  .radio{

  }
  .div1{
    padding-left: 200px
  }

</style>
