<template>
  <el-container>
    <el-main >
      <div style="border: 1px lightgray solid;width: 700px">
      <el-form inline="true" style="margin-left:90px;margin-top: 20px">
        <el-form-item label="品牌名称:" required >
          <el-input class="input" v-model="input1" ></el-input>
        </el-form-item>
        <el-form-item label="品牌首字母:" >
          <el-input class="input" v-model="input2" ></el-input>
        </el-form-item>
<el-form-item label="品牌LOGO：" required>
  <el-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList1"
    list-type="picture">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10MB</div>
  </el-upload>
</el-form-item>
        <br/>
<el-form-item label="品牌专区大图">
  <el-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList2"
    list-type="picture">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10MB</div>
  </el-upload>
</el-form-item>
        <el-form-item label="品牌故事:" >
          <el-input v-model="input3" class="input"></el-input>
        </el-form-item>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-form-item label="排序:" >
          <el-input v-model="input4" class="input"></el-input>
        </el-form-item>

<el-form-item label="是否显示:">
  <el-radio v-model="radio1"
  v-for="item in toshow"
  :key="item.value9"
  :value="item.value9"
  :label="item.label9"></el-radio>
</el-form-item>
        <br/>
        <el-form-item label="品牌制造商:">
          <el-radio v-model="radio2"
                    v-for="item in toshow"
                    :key="item.value10"
                    :value="item.value10"
                    :label="item.label10"></el-radio>
        </el-form-item>
        <br/>
<el-form-item>
  <el-button @click="submit" type="primary" style="margin-left: 100px">提交</el-button>
</el-form-item>
      </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElRadio from "element-ui/packages/radio/src/radio";
    export default {
        name: "changePin",
      components: {ElRadio, ElContainer},
      data(){
          return{
            input1:'',
            input2:'',
            input3:'',
            input4:'',
             radio1:'',
            radio2:'',

            fileList1:[],
            fileList2:[{name:'tupian',url:'https://up.enterdesk.com/edpic_360_360/45/03/5d/45035d1e2c0e7cfa80fa0abfd606a336.jpg'}]
          }
      },
      computed:{
          toshow:function () {
            return this.$store.state.toshow;
          }
      },
      created(){
          this.radio1=this.$store.state.toshow[0].label9;
        this.radio2=this.$store.state.toshow[0].label10;
        this.input1=this.$store.state.toshow[0].inputs;

      },
      methods:{
          submit(){
            this.$confirm('是否提交数据', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message.error('\n' +
                'Request failed with status code 500');
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消提交'
              });
            });
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
          return this.$confirm(`确定移除 ${ file.name }？`);
        }
      }
    }
</script>

<style scoped>
.input{
  width: 450px;
  text-align: center;
}
</style>
