<template>


        <el-row class="row1">
     <el-col :span="8">
          <el-dropdown trigger="click" @command="handleCommend">
            <span>
      <img src="../pages/admin/assets/apple.jpg" width="40px" >

</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-s-home">
                <el-link href="http://localhost:8080/admin.html#/" :underline="false">首页</el-link></el-dropdown-item>
              <el-dropdown-item icon="el-icon-minus">
                <el-link href="http://localhost:8080/login.html#/" :underline="false">退出</el-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>


          <el-col :span="6">
            <el-dropdown trigger="click" @command="handleCommend">
      <span class="el-dropdown-link">
           <i class="el-icon-arrow-down"></i>
      </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-s-home">
                  <el-link href="http://localhost:8080/admin.html#/" :underline="false">首页</el-link></el-dropdown-item>
                <el-dropdown-item icon="el-icon-minus
">
                  <el-link href="http://localhost:8080/login.html#/" :underline="false">退出</el-link></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>

</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import ElLink from "element-ui/packages/link/src/main";
    export default {
      name: "Form2",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        }
      },
      components: {ElLink, ElMain, ElHeader, ElContainer},
          methods:{
          handleSelect(key, keyPath)
          {
            console.log(key, keyPath);
        },
            handleCommend(commend){
            }
      }
    }
</script>

<style scoped>
.el-header{
 line-height: 300%;
}
  /*.row1{*/
  /*  background-color: dodgerblue;*/
  /*  width: 800px;*/
  /*  float: left;*/
  /*  margin-top: 0px;*/
  /*}*/
  /*.div1{*/
  /*  width: 800px;*/
  /*  border-bottom: black 1px solid;*/
  /*  float: left;*/
  /*  margin-left: -50px;*/
  /*}*/

</style>
