<template>
  <div id="app">

<!--    <router-link to="/main/mall"></router-link>-->
    <router-link to="/From1"></router-link>
<!--<Form1></Form1>-->
    <router-view/>

  </div>
</template>

<script>

import Form1 from "../../components/Form1";
export default {
  name: 'App',
  components: {Form1},
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
