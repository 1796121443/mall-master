<template>
    <el-container>
      <el-header>
        <el-form>
          <el-form-item label="属性类型:">
            <el-select v-model="form.region" placeholder="请选择属性类型">
              <el-option label="服装-t恤" value="shanghai"></el-option>
              <el-option label="服装-裤装" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-header>

      <el-main>


        <el-form :inline=true>
          <el-form-item label="商品规格："   >
            <div class="div1" >
<el-row>
              颜色：<el-input
          v-model="input"
          clearable
          size="small"
            class="input"
          :data="tableData"
id="input2">
        </el-input>
              <el-button size="small"  @click="addRow()" v-model="input">增加</el-button>
</el-row>
              <el-row>
              尺码：
              <el-checkbox-group v-model="checkList" >
                <el-checkbox label=" 29"></el-checkbox>
                <el-checkbox label="30"></el-checkbox>
                <el-checkbox label=" 31"></el-checkbox>
                <el-checkbox label=" 32"></el-checkbox>
                <el-checkbox label=" 33"></el-checkbox>
              </el-checkbox-group>
              </el-row>
            </div>
          </el-form-item>
<el-form-item>


  <el-table
    :data="tableData"
    border
    style="width: 617px; margin-top: 20px">
    <el-table-column
            label="颜色"
            prop="color"
            width="88px">
          </el-table-column>
                <el-table-column
                  prop="size"
                  label="尺码"
                  width="88px">
                </el-table-column>
    <el-table-column
      prop="price"
      label="销售价格">
      <el-input v-model="data" class="input1"></el-input>

    </el-table-column>

    <el-table-column
      prop="cun"
      label="商品库存">
      <el-input v-model="data" class="input1"></el-input>
    </el-table-column>
    <el-table-column
      prop="warning"
      label="库存预警值">
      <el-input v-model="data" class="input1"></el-input>
    </el-table-column>
    <el-table-column
      prop="number"
      label="SKU编号">
      <el-input v-model="data" class="input1"></el-input>
    </el-table-column>
    <el-table-column

      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click="addRow(tableData)"
          type="text"
          size="small">
          添加
        </el-button>

        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</el-form-item>
<!--          上传本地图片-->
          <el-form-item label="属性图片："   >
            <div class="div1" >
              <el-upload
                class="avatar-uploader"
                v-loading="loading"
                :show-file-list="false"
                multiple: false
                action="http://接口地址/api/common/uploadFile"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
<!--                <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
               <el-button v-else type="primary" size="small">点击上传</el-button>
       <br/>
               fwrw: <span style="font-size: 12px;color: grey">&nbsp;&nbsp;只能上传jpg/png文件，且不超过10MB</span>

              </el-upload>
              <el-upload
                class="avatar-uploader"
                v-loading="loading"
                :show-file-list="false"
                multiple: false
                action="http://接口地址/api/common/uploadFile"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <!--                <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                <el-button v-else type="primary" size="small">点击上传</el-button>
                <br/>
                qwe: <span style="font-size: 12px;color: grey">&nbsp;&nbsp;只能上传jpg/png文件，且不超过10MB</span>

              </el-upload>
              <el-upload
                class="avatar-uploader"
                v-loading="loading"
                :show-file-list="false"
                multiple: false
                action="http://接口地址/api/common/uploadFile"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <!--                <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                <el-button v-else type="primary" size="small">点击上传</el-button>
                <br/>
                qweq: <span style="font-size: 12px;color: grey">&nbsp;&nbsp;只能上传jpg/png文件，且不超过10MB</span>
              </el-upload>

            </div>
          </el-form-item>
          <el-form-item label="商品参数："  >
            <div class="div1" >
              <el-form-item label="适用人群:"  size="small">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="老年" value="shanghai"></el-option>
                  <el-option label="青年" value="beijing"></el-option>
                  <el-option label="中年" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="风格:"  size="small">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="嘻哈风格" value="shanghai"></el-option>
                  <el-option label="基础大众" value="beijing"></el-option>
                  <el-option label="商务正装" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="适用场景:"  size="small">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="居家" value="shanghai"></el-option>
                  <el-option label="运动" value="beijing"></el-option>
                  <el-option label="正装" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="上市时间:"  size="small">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="2018年春" value="shanghai"></el-option>
                  <el-option label="2018年夏" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-form-item>

<el-form-item label="商品相册：">
          <el-upload
            class="avatar-uploader"
            v-loading="loading"
            :show-file-list="false"
            multiple: false
            action="http://接口地址/api/common/uploadFile"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <!--                <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
            <el-button   v-else style="width: 130px;height: 130px;border:2px dotted lightgray"
            ><i class="el-icon-plus"style="font-size: 30px" ></i></el-button>
          </el-upload>
</el-form-item>
          <el-form-item label="规格参数：">

          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="电脑端详情" name="first">
           <div class="div2">
             <QuillEditor></QuillEditor>
           </div>

            </el-tab-pane>
            <el-tab-pane label="移动端详情" name="second">
              <div class="div2">
                <QuillEditor></QuillEditor>
              </div>
            </el-tab-pane>
          </el-tabs>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        <el-button id="btn1" size="small" :plain="true" type="primary"
                   @click="gotoLink1('foodsCUXIAO');">
          上一步，填写商品促销</el-button>
        <el-button id="btn2" size="small" :plain="true" type="primary"
                   @click="gotoLink2('Guanxi');Submit">
          下一步，填写商品关联</el-button>
      </el-footer>
    </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import ElFooter from "element-ui/packages/footer/src/main";
    import QuillEditor from "./Quill-editor";
    export default {
      name: "KindsFood",
      components: {QuillEditor, ElFooter, ElMain, ElHeader, ElContainer},
      data() {
        return {
data:'0',
          tableData: [{
           price: '',
            cun: '',
            color:'',
            size:'',
            warning:'',
            number:''
          }],

          activeName: 'first',

          input: '',
          form: {
            region: '',
            date1: '',
            date2: '',
            delivery1: false,
            delivery2: false,
            delivery3: false,
            delivery4: false,
            type: [],
            resource: '',
            desc: ''
          },
          checkList: ['选中且禁用', '复选框 A']
        }
      },
      methods: {
        gotoLink2(){
          this.$router.replace('/Guanxi')
        },
        gotoLink1(){
          this.$router.replace('/foodsCUXIAO')
        },
        toHidden() {
          let form = document.getElementById("form1");
          let btn = document.getElementById("btn1")
          if (form.style = "display:none") {
            btn.style = "display:block"
          }
        },
Submit(){
  this.$alert('是否要提交该产品', '提示', {
    confirmButtonText: '确定',
    callback: action => {
      this.$message({
        type: 'info',
        message: `action: ${action}`
      });
    }
  });
},
        handleClick(tab, event) {
          console.log(tab, event);
        },

        deleteRow(index, rows) {
          rows.splice(index, 1);
        },
        addRow(tableData, event) {//新增一行
          //表格新增一行，其实就是源数据的新增，从源数据入手就可以实现了
          tableData.push({name: '', xpath: '', desc: '', value: '', defVal: ''})
        },

        handleAvatarSuccess(res, file) {
       this.loading = false
         imageUrl = res.data.url
     this.$picName = res.data.name
          Message({
            type: 'success',
            message: '上传成功',
            showClose: true
          })
        },
        beforeAvatarUpload(file) {
          this.loading = true
          this.progressData = 0
          let timer2 = setInterval(() => {
            this.progressData = this.progressData + 1
            if (this.progressData >= 100) {
              clearInterval(timer2)
            }
          }, 200)
          // const isJPG = file.type === 'image/jpeg'
          const isLt5M = file.size / 1024 / 1024 < 5
          // if (!isJPG) {
          //   Message.error('上传头像图片只能是 JPG 格式!');
          // }
          if (!isLt5M) {
            Message({
              type: 'warning',
              message: '上传头像图片大小不能超过 5MB!',
              showClose: true
            })
          }
          return isLt5M
        },
      }
    }
</script>

<style scoped>
.div1{
  width: 585px;
 margin-top: 10px;
  margin-left: 0px;
  padding-left: 30px;
  background-color: rgb(242 246 252);
}
  .input{
    width: 200px;

  }
  .div2{
    height: 400px;
  }
</style>
