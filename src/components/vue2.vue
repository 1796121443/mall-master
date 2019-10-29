
<template>
  <div class="chart1" id="myChart1" >
    <div class="charts1" :id="id"  ></div>
  </div>
</template>
<script>
  // 引入highCharts模块
  import HighCharts from '../../node_modules/highcharts'
  // 引入这个图表的外部资源数据
  import data from '../chart-options/chart.js'

  export default {
    data() {
      // 将引入的数据写在自己的组件中
      let dataObj = data.bar1
      return{
        id: 'chart1',
        dataObj: dataObj
      }
    },
    mounted() {//钩子函数挂载时实例化这个图表
      // chart(参数1,参数2);第一个参数挂载组件的容器，第二个参数为图表所需要的数据对象
      HighCharts.chart(this.id,this.dataObj)
    }
  }
</script>

<style scoped lang='stylus'>
  .chart1{
    float left ;
    background-color #fff;
    padding 10px 0;
    margin-top 30px;
    border-radius 6px
    width 49.5%;
    .charts1{
      min-width 890px;
      height 350px;
    }
  }
</style>
