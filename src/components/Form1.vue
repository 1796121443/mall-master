<template>

  <el-container id="el-container">
    <el-aside   @mouseenter.native="collapseOpen"
                @mouseleave.native="collapseClose"
               width="auto" class="el-aside" id="aside" style="position: relative">
    <el-menu
      @mouseover="eenter"
      :default-active='this.$route.path'
      router
      :collapse="isCollapse"
      active-text-color="rgb(64 158 255)"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(48 65 86)"
      text-color="rgb(168 181 196)"
      id="el-menu"
     >
      <el-menu-item class="el-menu-1" index="/count" @click="unFoodsClick">
<!--        index="/count"-->
        <i class="el-icon-s-home"></i>
      <span>首页</span>
      </el-menu-item>
      <el-submenu index="/">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span>商品</span>
        </template>
        <el-menu-item-group class="el-menu-2" >
          <el-menu-item index="/FoodList" @click="FoodsClick"><i class="el-icon-s-order"></i>商品列表</el-menu-item>
          <el-menu-item index="/shili" @click="FoodsClick"><i class="el-icon-plus"></i>添加商品</el-menu-item>
          <el-menu-item index="/Fenlei" @click="FoodsClick"><i class="el-icon-menu"></i>商品分类</el-menu-item>
          <el-menu-item index="/Type" @click="FoodsClick"><i class="el-icon-s-grid"></i>商品类型</el-menu-item>
          <el-menu-item index="/PinGuan" @click="FoodsClick"><i class="el-icon-s-flag"></i>品牌管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


        <el-submenu index="1-5">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span >订单</span>
          </template>
          <el-menu-item index="/orderList" @click="FoodsClick"><i class="el-icon-menu"></i>订单列表</el-menu-item>
          <el-menu-item index="/setting" @click="FoodsClick"><i class="el-icon-setting"></i>订单设置</el-menu-item>
          <el-menu-item index="/returns" @click="FoodsClick"><i class="el-icon-s-management"></i>退货申请处理</el-menu-item>
          <el-menu-item index="/opinions" @click="FoodsClick"><i class="el-icon-s-claim"></i>退货原因设置</el-menu-item>
        </el-submenu>



        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-management"></i>
            <span >营销</span>
          </template>
          <el-menu-item index="/flash" @click="FoodsClick"><i class="el-icon-alarm-clock"></i>秒杀活动列表</el-menu-item>
          <el-menu-item index="/cheap" @click="FoodsClick"><i class="el-icon-coin"></i>优惠券列表</el-menu-item>
          <el-menu-item index="/Tuijian" @click="FoodsClick"><i class="el-icon-discount"></i>品牌推荐</el-menu-item>
          <el-menu-item index="/xinPin" @click="FoodsClick"><i class="el-icon-wind-power"></i>新品推荐</el-menu-item>
          <el-menu-item index="/renQi" @click="FoodsClick"><i class="el-icon-sunrise-1"></i>人气推荐</el-menu-item>
          <el-menu-item index="/zhuanTi" @click="FoodsClick"><i class="el-icon-suitcase"></i>专题推荐</el-menu-item>
          <el-menu-item index="/guang" @click="FoodsClick"><i class="el-icon-notebook-1"></i>广告列表</el-menu-item>

        </el-submenu>

    </el-menu>
    </el-aside>

  <el-container id="containers">
    <el-header width="auto"  class="header1" style="padding-top: 20px;">
      <el-row >
        <el-col :span="1" style="margin-top: -15px; font-size: 30px" >
            <i class="el-icon-s-fold" id="ii"  @click="collapseStatus" ></i>
        </el-col>
<!--        getCollapse-->
<!--        Hidden()-->
        <el-col :span="20">
      <el-breadcrumb >
        <el-breadcrumb-item v-for="item in levelList" :key="item.name"
                            :to="item.path"
                            class="breadcrumb"
        >{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
        </el-col>

        <el-col :span="1">
          <el-dropdown trigger="click" @command="handleCommend">
            <span><img src="../pages/admin/assets/apple.jpg" width="40px" ></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-s-home">
                <el-link href="http://localhost:8080/admin.html#/" :underline="false">首页</el-link></el-dropdown-item>
              <el-dropdown-item icon="el-icon-minus">
                <el-link href="http://localhost:8080/login.html#/" :underline="false">退出</el-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>

            <el-col :span="1">
          <el-dropdown trigger="click" @command="handleCommend">
      <span ><i class="el-icon-arrow-down"></i>
      </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-s-home">
                <el-link href="http://localhost:8080/admin.html#/" :underline="false">首页</el-link></el-dropdown-item>
              <el-dropdown-item icon="el-icon-minus">
                <el-link href="http://localhost:8080/login.html#/" :underline="false">退出</el-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>

      </el-header>

    <el-main class="main" id="main">
      <div id="div-22">
        <router-view/>
      </div>

      <div id="div-11">
      <main1></main1>
<!--      <main2></main2>-->
<div class="div-2">
  <main3></main3>
</div>
<div style="margin-left: 20px">
  <main4></main4>
</div>
      <main5></main5>
      </div>
    </el-main>
  </el-container>
  </el-container>

</template>
<script>
  // window.onload = function () {
  //   let div = document.getElementById("div-11")
  //   if (div.style = "display:block") {
  //     div.style = "display:none"
  //
  //   }
      // document.getElementById("aside").style.height = document.getElementById("containers").clientHeight;
    // }
  import ElContainer from "element-ui/packages/container/src/main";
  import ElAside from "element-ui/packages/aside/src/main";
  import ElMain from "element-ui/packages/main/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
  import Form2 from "./Form2";
  import ElDivider from "element-ui/packages/divider/src/main";
  import Main1 from "./main1";
  import Main2 from "./main2";
  import Main3 from "./main3";
  import Main4 from "./main4";
  import Main5 from "./main5";

  export default {
    provide(){
      return{
        reload:this.reload
      }
    },
    data() {
      isRouterAlive:true
    },

    name: "Form1",
    data() {
      return {
        collapseBtnClick: false,
        isCollapse: true,
        activeNames: ['1'],
        activeIndex: '/Form1',
        levelList:[],
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    created(){
      this.getBreadcrumb()
    },


    components: {Main5, Main4, Main3, Main2, Main1, ElDivider, Form2, ElHeader, ElMain, ElAside, ElContainer},
    methods: {
      eenter(){

        document.getElementById("el-menu").style.background="rgb(31 45 61)";

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
      handleSelect(key, keyPath)
      {
        console.log(key, keyPath);
      },
      handleCommend(commend){
      },
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0];
        if (first && first.name.trim().toLocaleLowerCase() !== 'Form1'.toLocaleLowerCase()) {
          matched = [{path: '/Form1', meta: {title: 'Form1'}}].concat(matched)
        }
        this.levelList = matched
      },
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
      // getCollapse() {
      //   let el_menu = document.getElementById("el-menu");
      //   let text = document.getElementsByTagName("span");
      //   if (el_menu.style.width === "300px") {
      //     el_menu.style.width = "50px",
      //       text.style = "display:none";
      //   } else (
      //     el_menu.style.width = "300px",
      //       text.style = "display:block"
      //   )
      // },
      FoodsClick() {
        let el_foodList = document.getElementById("div-11");
        if (el_foodList.style = "display:block") {
          el_foodList.style = "display:none"
        }
      },
      unFoodsClick(){
        let el_foodList = document.getElementById("div-11");
        let router=document.getElementById("div-22")
        if (el_foodList.style =="display:none" && router.style=="display:block") {
          el_foodList.style = "display:block";
          router.style="display:none"
        }
      },
      Hidden(){
        let it=document.getElementById("ii");
        if(it.style="display:block" ){
          it.style="display:none";

        }


      }
    }
  }
</script>
<style>
.el-menu-vertical-demo {
  float: left;
  margin-bottom: -3000px;
  padding-bottom: 3000px;

}
.img{
  height: 150px;
  width: 150px;
margin-top: 20px;
}

.div-2{
margin-left: 40px;
width: auto;
}

.div-1{
  border:1px solid lightgray;
  height: 245px;
  width: 260px;
  margin-top: 30px;
  text-align: center;
}
body,#el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
  .header1 {
    background-color: rgb(242 246 252);
       line-height: 340%;
  }
.wrap {
  overflow: hidden;
}
  .el-aside{
    float: left;
    margin-bottom: -3000px;
    padding-bottom: 3000px;
}

</style>
