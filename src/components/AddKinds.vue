<template>
    <el-container>
<!--      <el-header></el-header>-->
    <el-main>
      <div class="div1">
      <el-form class="form" :model="ruleForm"
               status-icon  ref="ruleForm" :inline="true">
        <el-form-item label="分类名称：" required prop="region" style="margin-top: 20px" >
          <el-input v-model="ruleForm.name" ></el-input>
        </el-form-item>
        <el-form-item label="上下级分类:" prop="region">
          &nbsp; <el-select  v-model="defaultSelect1"  :clearable="true">
            <el-option v-for="item in suitable"
                :key="item.value"
                :value="item.value"
                :label="item.label"></el-option>

          </el-select>
        </el-form-item>
        <el-form-item label="数量单位：">
      <el-input v-model="danwei"></el-input>
        </el-form-item>
        <el-form-item label="排序：">
          <el-input v-model="order"></el-input>
        </el-form-item>
<el-form-item label="是否显示：">
  <el-radio  v-model="radio1"   v-for="item in toshow"
                 :key="item.value1"
                  :value="item.value1"
                  :label="item.label1"></el-radio>
</el-form-item>
        <el-form-item label="是否显示在导航栏：">
          <el-radio v-model="radio2"
          v-for="item in toshow"
          :key="item.value2"
          :value="item.value2"
          :label="item.label2"></el-radio>
        </el-form-item>
        <el-form-item label="分类图标：">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :file-list="fileList"
            :on-exceed="handleExceed">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10MB</div>
          </el-upload>
        </el-form-item>

        <el-form-item label="筛选属性：" prop="region" >

          <el-cascader id="select" expand-trigger="hover"  v-model="options"
                        :options="options"   clearable></el-cascader>

          <el-button >
            删除
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="add" type="primary" size="small" style="margin-left: 80px">新增</el-button>
        </el-form-item><br/>
        <el-form-item label="关键词：">
          <el-input v-model="input4"></el-input>
        </el-form-item>
        <el-form-item label="分类描述：">
          <el-input type="textarea" v-model="input5"></el-input>
        </el-form-item>
 <el-form-item>
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
          forms1: {options: ['shouji', 'shoujitong']},

          select: '',
          input3: '',
          input1: '',
          input2: '',
          input4: '',
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
        this.radio1 = this.$store.state.toshow[1].label1
        this.radio2 = this.$store.state.toshow[1].label2


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
