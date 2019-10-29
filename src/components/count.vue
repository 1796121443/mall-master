<template>
    <el-container>
      <el-main>
        <router-view/>
        <div id="div-11">

              <main1></main1>

        <main3></main3>
          <main4></main4>
          <div class="div-2"></div>
          <main5></main5>
        </div>
      </el-main>
    </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import Main1 from "./main1";
    import Main2 from "./main2";
    import Main3 from "./main3";
    import Main4 from "./main4";
    import Main5 from "./main5";

    export default {
        name: "count",
      components: {Main5, Main4, Main3,  Main1, ElMain, ElContainer}
    }
</script>

<style scoped>
  .div2{
    height: 20px;
  }
.div-2{
 height: 30px;
}

  .div-1{
    border:1px solid lightgray;
    height: 245px;
    width: 260px;
    margin-top: 30px;
    text-align: center;
    margin-left: 58px;
  }
</style>
