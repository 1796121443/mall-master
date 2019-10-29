<template>
  <el-container>
    <el-header></el-header>
    <el-main>
  <el-form>
    <el-form-item label="关联专题：">
  <el-transfer

    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市拼音"
    v-model="value"
    :data="data">
  </el-transfer>
    </el-form-item>
    <el-form-item label="关联优选：">
      <el-transfer

        filterable
        :filter-method="filterMethod"
        filter-placeholder="请输入城市拼音"
        v-model="value"
        :data="data">
      </el-transfer>
    </el-form-item>
<el-form-item class="form1">
  <el-button size="small"@click="gotoLink('/KindsFood')">上一步，填写商品属性</el-button>
  <el-button type="primary" size="small"  @click="open"> 完成，提交商品</el-button>
</el-form-item>
  </el-form>
    </el-main>
  </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    export default {
        name: "Guanxi",
      components: {ElMain, ElHeader, ElContainer},
      data(){
        const generateData = _ => {
          const data = [];
          const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
          const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
          cities.forEach((city, index) => {
            data.push({
              label: city,
              key: index,
              pinyin: pinyin[index]
            });
          });
          return data;
        };
        return {
          dynamicValidateForm: {
            domains: [{
              value: ''
            }],
            email: ''
          },
          data: generateData(),
          value: [],
          filterMethod(query, item) {
            return item.pinyin.indexOf(query) > -1;
          }
        };
      },
      methods:{
          gotoLink(){
            this.$router.replace('/KindsFood')
          },
        open() {
          this.$confirm('是否要提交该产品', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(() => {

              this.$message.error('Request failed with status code 500');
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      }
    }
</script>

<style scoped>
.form1{
  text-align: center;
}
</style>
