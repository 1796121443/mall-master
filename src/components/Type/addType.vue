<template>
  <el-container>
    <!--      <el-header></el-header>-->
    <el-main>
      <div class="div1">
        <el-form class="form" :model="ruleForm"
                 status-icon  ref="ruleForm" :inline="true">
          <el-form-item label="属性名称：" required prop="region" style="margin-top: 20px" >
            <el-input v-model="ruleForm.name" ></el-input>
          </el-form-item>
          <el-form-item label="商品类型:" prop="region">
            &nbsp; <el-select  v-model="defaultSelect1"  :clearable="true">
            <el-option v-for="item in suitable"
                       :key="item.value"
                       :value="item.value"
                       :label="item.label"></el-option>

          </el-select>
          </el-form-item>

          <el-form-item label="分类筛选样式：">
            <el-radio  v-model="radio1"

                       v-for="item in toshow"
                       :key="item.value3"
                       :value="item.value3"
                       :label="item.label3"></el-radio>
          </el-form-item>
          <el-form-item label="分类筛选样式：" >
            <el-radio  v-model="radio3"
                       v-for="item in addType"
                       :key="item.value5"
                       :value="item.value5"
                       :label="item.label5"></el-radio>
          </el-form-item>
          <el-form-item label="商品属性关联：">
            <el-radio v-model="radio2"
                      v-for="item in toshow"
                      :key="item.value4"
                      :value="item.value4"
                      :label="item.label4"></el-radio>
          </el-form-item>

          <el-form-item label="属性是否唯一可选：" >
            <el-radio  v-model="radio4"
                       v-for="item in addType"
                       :key="item.value6"
                       :value="item.value6"
                       :label="item.label6"></el-radio>
          </el-form-item>
          <el-form-item label="属性值得录入方式：">
            <el-radio v-model="radio6"
                      v-for="item in toshow"
                      :key="item.value7"
                      :value="item.value7"
                      :label="item.label7"></el-radio>
          </el-form-item>

          <el-form-item label="属性值可选值列表：">
            <el-input v-model="input4"></el-input>
          </el-form-item>
          <el-form-item label="是否支持手动新增：">
            <el-radio v-model="radio5"
                      v-for="item in toshow"
                      :key="item.value8"
                      :value="item.value8"
                      :label="item.label8"></el-radio>
          </el-form-item>

          <el-form-item label="分类描述：">
            <el-input  v-model="input5"></el-input>
          </el-form-item>
          <el-form-item style="margin-left: 80px">
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button @click="reset('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>



  import ElContainer from "element-ui/packages/container/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
  import ElMain from "element-ui/packages/main/src/main";
  import ElUpload from "element-ui/packages/upload/src/index";
  import ElCalendar from "element-ui/packages/calendar/src/main";
  export default {
    components: {ElCalendar, ElUpload, ElMain, ElHeader, ElContainer},
    data() {
      return {
        fileList:[],
        defaultSelect1: '',
        danwei: '',
        order: '',
        radio1: '',
        radio2: '',
        radio3:'',
        radio4:'',
        radio5:'',
        radio6:'',
        forms1: {options: ['shouji', 'shoujitong']},


        input5: '',
        radio: '',
        imageUrl: '',
        ruleForm: {
          name: '',
          level: '',
          select: ''
        }
      }

    },
    created() {
      this.defaultSelect1 = this.$store.state.suitable[0].label
      this.danwei = this.$store.state.suitable[0].danwei
      this.order = this.$store.state.suitable[0].order
      this.radio1 = this.$store.state.toshow[0].label3
      this.radio2 = this.$store.state.toshow[0].label4
      this.radio3 = this.$store.state.addType[0].label5
      this.radio4 = this.$store.state.addType[0].label6
      this.radio5 = this.$store.state.toshow[1].label8
      this.radio6 = this.$store.state.toshow[0].label7
      this.input5= this.$store.state.toshow[0].input


    },
    computed: {
      suitable: function () {
        return this.$store.state.suitable;
      },
      toshow: function () {
        return this.$store.state.toshow;
      },
      options: function () {
        return this.$store.state.options;
      },
      addType:function () {
        return this.$store.state.addType;
      }
    },
    methods:
      {
        add() {
          this.options.push({});
        },
        deleteRow(index) {
          this.data.splice(index, 1);
        },


        submit() {
          this.$message.error('Request failed with status code 500');
        },
        reset(formName) {
          this.$refs[formName].resetFields();
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${file.name}？`);
        }
      }
  }
</script>

<style scoped>
  .div1{
    border:1px solid lightgray;
    width: 700px;
    margin: 0 auto;
  }
  .div1 {
    padding-left: 20px;
  }
  .form{
    width: 400px;
    vertical-align: middle}

</style>
