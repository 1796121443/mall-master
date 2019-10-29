<template>
    <el-container>
      <el-header >
        <el-steps :space="200" :active="1" finish-status="success" align-center>
          <el-step title="提交订单"  description="2018-09-15 12:24:27"></el-step>
          <el-step title="支付订单"></el-step>
          <el-step title="平台发货"></el-step>
          <el-step title="确认收货"></el-step>
          <el-step title="完成评价"></el-step>
        </el-steps>
      </el-header>
      <el-main>
          <el-container>
          <el-header>
          </el-header>
          <el-main >
            <div style="border: 1px solid lightgray;width: 750px;margin-left: 100px;height: auto">
            <el-row style="background-color: #b3d4fc">
              <el-col :span="18">
                <span style="color: red;"><i class="el-icon-warning-outline"></i>当前订单状态:已关闭</span>
              </el-col>
              <el-col :span="3">
                <el-button size="small">删除订单</el-button>
                </el-col>
              <el-col :span="1">
                <el-button size="small">备注订单</el-button>
              </el-col>
            </el-row>
              <span><i class="el-icon-s-flag"></i>基本信息</span>

              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
            </div>
          </el-main>
          </el-container>

      </el-main>
    </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    export default {
        name: "aboutOrder",
      components: {ElMain, ElHeader, ElContainer}
    }
</script>

<style scoped>

</style>
