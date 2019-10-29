<template>
  <div>
    <div class="div1" >
      <Tab></Tab>
    </div>
  </div>
</template>

<script>
    import Tab from "./Tab";
    export default {
        name: "Blue",
      components: {Tab}
    }
</script>

<style scoped>
.div1 {
  width: 100%;
  height: 200px;
  background-color: dodgerblue;
  margin-top: 300px;
  padding-bottom: 300px;
}
</style>
