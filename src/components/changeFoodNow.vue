<template>
  <el-container>

      <div class="div--" >
        <el-header>
      <el-steps :space="200"  :active="active" finish-status="success">
        <el-step title="填写商品信息" index="1"></el-step>
        <el-step title="填写商品促销" index="2"></el-step>
        <el-step title="填写商品属性" index="3"></el-step>
        <el-step title="选择商品关联" index="4"></el-step>
      </el-steps>
        </el-header>
        <el-main class="el-main">
<!--          addFoods-->
          <div  id="form1">
          <el-form size="small" class="form" :rules="rules"
                ref="ruleForm" :model="ruleForm" label-width="80px"
       >
  <el-form-item label="商品分类"  required >
    <el-cascader  expand-trigger="hover"  v-model="forms1.options" :options="options"   clearable></el-cascader>
  </el-form-item>
         <el-form-item label="商品名称" required >
           <el-input  class='input' v-model="defaultSelect2"></el-input>
         </el-form-item>
         <el-form-item label="副标题" prop="second" required>
           <el-input   class='input' v-model="defaultSelect3"></el-input>
         </el-form-item>
         <el-form-item label="商品品牌"  required>
<!--           <el-cascader :options="ruleForm.options" clearable placeholder="请选择品牌"></el-cascader>-->

           <el-select v-model="defaultSelect" placeholder="请选择品牌">
             <el-option    v-for="item in option"
                          :key="item.id"
                          :label="item.label"
                          :value="item.value"></el-option>
<!--             <el-option label="区域二" value="beijing"></el-option>-->
           </el-select>
         </el-form-item>
         <el-form-item label="商品介绍">
           <el-input class='input' type="textarea" placeholder="请输入内容" v-model="formm.desc"></el-input>
         </el-form-item>
         <el-form-item label="商品货号" >
           <el-input class='input' v-model="defaultSelect4"></el-input>
         </el-form-item>
         <el-form-item label="商品售价" prop="shoujia">
           <el-input class='input' v-model="defaultSelect5"></el-input>
         </el-form-item>
         <el-form-item label="市场价" prop="shichang">
           <el-input class='input' v-model="defaultSelect6"></el-input>
         </el-form-item>
         <el-form-item label="商品库存">
           <el-input class='input' v-model="defaultSelect7"></el-input>
         </el-form-item>
         <el-form-item label="计量单位">
           <el-input class='input' v-model="defaultSelect8"></el-input>
         </el-form-item>
         <el-form-item label="商品重量">
           <el-input class='input' v-model="defaultSelect9"></el-input>克
         </el-form-item>
         <el-form-item label="排序">
           <el-input class='input' v-model="defaultSelect10"></el-input>
         </el-form-item>

  <el-form-item >

<el-form-item>

</el-form-item>
<!--<router-link :to="{path:'/foodsCUXIAO'}">wqeq</router-link>-->

  </el-form-item>
</el-form>

      <el-button style="margin-left: 230px" id="btn2" size="small"  type="primary"
                 @click=" next();blockForm()">下一步，填写商品促销</el-button></div>

<!--          foodsCUXIAO-->
          <el-form size="small" style="display: none" id="form2" class="form"  ref="forms" :model="forms" label-width="80px">
            <el-form-item label="赠送积分:" label-width="100px">
              <el-input class="el-inputs"  v-model="defaultSelects1"></el-input>
            </el-form-item>
            <el-form-item label="赠送成长值:" label-width="100px">
              <el-input class="el-inputs" v-model="defaultSelects2"></el-input>
            </el-form-item>
            <el-form-item label="积分购买限制:" label-width="100px">
              <el-input class="el-inputs" v-model="defaultSelects3"></el-input>
            </el-form-item>


            <el-form-item class="el-inputs" label="预告商品:">
              <el-switch v-model="defaultSelects4"></el-switch>
            </el-form-item>
            <el-form-item class="el-inputs" label="商品上架:">
              <el-switch v-model="defaultSelects5"></el-switch>
            </el-form-item>

            <el-form :inline="true">
              <el-form-item  label="商品推荐:">

              </el-form-item>
              <el-form-item label="新品">
                <el-switch v-model="defaultSelects6"></el-switch>
              </el-form-item>

              <el-form-item label="推荐">
                <el-switch v-model="defaultSelects7"></el-switch>
              </el-form-item>
            </el-form>

            <el-form-item label="活动性质:">
              <el-checkbox-group v-model="defaultSelects8">
                <el-checkbox  checked="true" label="无忧退货" name="type"></el-checkbox>
                <el-checkbox checked="true" label="快速退款" name="type"></el-checkbox>
                <el-checkbox checked="true" label="免费包邮" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="详细页标题:" label-width="100px">
              <el-input class="el-inputs" type="text" v-model="defaultSelects9"></el-input>
            </el-form-item>
            <el-form-item label="详细页描述:" label-width="100px">
              <el-input class="el-inputs" type="text" v-model="defaultSelects10"></el-input>
            </el-form-item>
            <el-form-item label="商品关键字:" label-width="100px">
              <el-input class="el-inputs" type="text" v-model="defaultSelects11"></el-input>
            </el-form-item>
            <el-form-item label="商品备注:">
              <el-input class="el-inputs" type="textarea" v-model="defaultSelects12"></el-input>
            </el-form-item>


            <el-button-group>
              <el-button @click="Nothing">无优惠</el-button>
              <el-button @click="toShow">特惠促销</el-button>
              <el-button @click="toLook">会员价格</el-button>
              <el-button @click="toSee">阶梯价格</el-button>
              <el-button @click="toNotsee">满减价格</el-button>
            </el-button-group>
            <div style="width: 400px;height: 200px">
              <div style="display: block" id="div1">
                <el-row class="row11">
                  <el-col :span="6">
                    <span class="demonstration">开始时间：</span>
                  </el-col>
                  <el-col :span="8">
                    <el-date-picker
                      v-model="value12"
                      type="datetime"
                      placeholder="选择开始时间"
                      size="small" class="inputs">
                    </el-date-picker>
                  </el-col>
                </el-row>
                <el-row class="row11">
                  <el-col :span="6">
                    <span class="demonstration">结束时间：</span>
                  </el-col>
                  <el-col :span="8">
                    <el-date-picker
                      v-model="value14"
                      type="datetime"
                      placeholder="选择结束时间"
                      size="small" class="inputs">
                    </el-date-picker>
                  </el-col>
                </el-row>
                <el-row class="row11">
                  <el-col :span="6">
                    <span>促销价格：</span>
                  </el-col>
                  <el-col :span="8">
                    <el-input class="inputs" v-model="input12" placeholder="请输入促销价格" size="small"></el-input>
                  </el-col>
                </el-row>
              </div>

              <div id="div2" style="display: none">
                <el-row class="row11">
                  <el-col :span="6">
                    黄金会员：
                  </el-col>
                  <el-col :span="7">
                    <el-input class="inputs"
                              v-model="input12"
                              clearable size="small">
                    </el-input>
                  </el-col>
                </el-row>

                <el-row class="row11">
                  <el-col :span="6">
                    白金会员：
                  </el-col>
                  <el-col :span="7">
                    <el-input class="inputs"
                              v-model="input12"
                              clearable size="small">
                    </el-input>
                  </el-col>
                </el-row>

                <el-row class="row11">
                  <el-col :span="6">
                    钻石会员：
                  </el-col>
                  <el-col :span="7"><el-input class="inputs"
                                              v-model="input12"
                                              clearable size="small">
                  </el-input>
                  </el-col>
                </el-row>
              </div>

              <div id="div3" style="display: none">

                <el-table
                  :data="tableData"
                  border
                  style="width: 400px; margin-top: 20px">
                  <el-table-column
                    prop="amount1"
                    label="数量">
                    <el-input v-model="data1" class="inputs1"></el-input>

                  </el-table-column>

                  <el-table-column
                    prop="amount2"
                    label="折扣">
                    <el-input v-model="data1" class="inputs1"></el-input>

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
              </div>
              <div id="div4" style="display: none">

                <el-table
                  :data="tableData"
                  border
                  style="width: 400px; margin-top: 20px">
                  <el-table-column
                    prop="amount1"
                    label="数量">
                    <el-input v-model="data1" class="inputs1"></el-input>

                  </el-table-column>

                  <el-table-column
                    prop="amount2"
                    label="折扣">
                    <el-input v-model="data1" class="inputs1"></el-input>

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
              </div>
            </div>
            <el-form-item>
              <el-button @click="blockForm();provice()">上一步,填写商品信息</el-button>
              <el-button type="primary" @click="blockFrom();next()">下一步,填写商品属性</el-button>

            </el-form-item>
          </el-form>


<!--         KindsFood-->
          <el-container style="display: none" id="form3">
            <el-header>
              <el-form>
                <el-form-item label="属性类型:">
                  <el-select v-model="value" >
                    <el-option v-for="item in type"
                               :key='item.value'
                               :label="item.label"
                               :value="item.value"
                                ></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-header>

            <el-main>


              <el-form :inline=true>
                <el-form-item label="商品规格："   >
                  <div class="divv" >
                    <el-row>
                      颜色：<el-input
                      v-model="input"
                      clearable
                      size="small"
                      class="inputt"
                      :data="tableData"
                      id="input2">
                    </el-input>
                      <el-button size="small"  @click="addRow()" v-model="input">增加</el-button>
                    </el-row>
                    <el-row>
                      容量：
                      <el-checkbox-group v-model="checkList" >
                        <el-checkbox label=" 16G"></el-checkbox>
                        <el-checkbox checked="true" label="32G"></el-checkbox>
                        <el-checkbox label=" 64G"></el-checkbox>
                        <el-checkbox label=" 128G"></el-checkbox>
                      </el-checkbox-group>
                    </el-row>
                  </div>
                </el-form-item>
                <el-form-item>


                  <el-table
                    :data="tableData12"
                    border
                    style="width: 617px; margin-top: 20px">
                    <el-table-column
                      label="颜色"
                      prop="color"
                      align="center"
                      width="88px">
                    </el-table-column>
                    <el-table-column
                      prop="accept"
                      label="容量"
                      align="center"
                      width="88px">
                    </el-table-column>
                    <el-table-column
                      prop="price"
                      align="center"
                      label="销售价格">
                      <el-input v-model="data2" class="input1"></el-input>

                    </el-table-column>

                    <el-table-column
                      prop="cun"
                      align="center"
                      label="商品库存">
                      <el-input v-model="data2" class="input1"></el-input>
                    </el-table-column>
                    <el-table-column
                      prop="warning"
                      align="center"
                      label="库存预警值">
                      <el-input v-model="data2" class="input1"></el-input>
                    </el-table-column>
                    <el-table-column
                      prop="number"
                      align="center"
                      label="SKU编号">
                      <el-input v-model="data2" class="input1"></el-input>
                    </el-table-column>
                    <el-table-column

                      label="操作"
                      align="center"
                      width="120">
                      <template slot-scope="scope">
<!--                        <el-button-->
<!--                          @click="addRow(tableData)"-->
<!--                          type="text"-->
<!--                          size="small">-->
<!--                          添加-->
<!--                        </el-button>-->

                        <el-button
                          @click.native.prevent="deleteRow(scope.$index, tableData)"
                          type="text"
                          align="center"
                          size="small">
                          删除
                        </el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-form-item style="margin-top: 10px">
                    <el-button type="primary" size="small">刷新列表</el-button>
                    <el-button type="primary" size="small">同步价格</el-button>

                  </el-form-item>
                </el-form-item>
                <!--          上传本地图片-->
                <el-form-item label="属性图片："   >
                  <div class="divv" >
                    <el-upload
                      style="padding-top: 10px"
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
                金色: &nbsp;<span style="font-size: 12px;color: grey">只能上传jpg/png文件，且不超过10MB</span>

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
                      银色: &nbsp;<span style="font-size: 12px;color: grey">只能上传jpg/png文件，且不超过10MB</span>


                    </el-upload>
                  </div>
                </el-form-item>
                <el-form-item label="商品参数："  >
                  <div class="divv" >
                    <el-form-item label="屏幕尺寸:"  size="small">
                    <el-input v-model="inputs1"></el-input>
                    </el-form-item>
                    <el-form-item label="网络:"  size="small">
                      <el-select v-model="Network"  >
                        <el-option
                          v-for="item in network"
                          :key='item.value'
                          :label="item.label"
                          :value="item.value"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="系统:"  size="small">
                      <el-select v-model="suitable" >
                        <el-option v-for="item in network"
                                   :key="item.value"
                                   :value="item.value"
                                   :label="item.label"
                                        ></el-option>

                      </el-select>
                    </el-form-item>
                    <el-form-item label="电池容量:"  size="small">
                      <el-input v-model="inputs2"></el-input>
                    </el-form-item>
                  </div>
                </el-form-item>

                <el-form-item label="商品相册：">
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    limit="10"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img  width="100%" :src="dialogImageUrl" alt="" >
                  </el-dialog>
<!--                  <el-upload-->
<!--                    class="avatar-uploader"-->
<!--                    v-loading="loading"-->
<!--                    :show-file-list="false"-->
<!--                    multiple: false-->
<!--                    action="http://接口地址/api/common/uploadFile"-->
<!--                    :on-success="handleAvatarSuccess"-->
<!--                    :before-upload="beforeAvatarUpload"-->
<!--                  >-->
<!--                    <img v-if="imageUrl" :src="imageUrl" class="avatar">-->
<!--                    &lt;!&ndash;                <i v-else class="el-icon-plus avatar-uploader-icon"></i>&ndash;&gt;-->
<!--                    <el-button   v-else style="width: 130px;height: 130px;border:2px dotted lightgray"-->
<!--                    ><i class="el-icon-plus"style="font-size: 30px" ></i></el-button>-->
<!--                  </el-upload>-->
                </el-form-item>
                <el-form-item label="规格参数：">

                  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="电脑端详情" name="first">
                      <div class="divv1">
                        <QuillEditor></QuillEditor>
                      </div>

                    </el-tab-pane>
                    <el-tab-pane label="移动端详情" name="second">
                      <div class="divv1">
                        <QuillEditor></QuillEditor>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </el-form-item>
              </el-form>
            </el-main>
            <el-footer>
              <el-button id="btn1" size="small" :plain="true" type="primary"
                         @click="blockFrom();provice()">
                上一步，填写商品促销</el-button>
              <el-button  size="small" :plain="true" type="primary"
                         @click="blockFomr();next()">
                下一步，填写商品关联</el-button>
            </el-footer>
          </el-container>

<!-- Guanxi-->
          <el-form style="display: none" id="form4">
            <el-form-item label="关联专题：">
              <el-transfer

                filterable
                :filter-method="filterMethod"
                filter-placeholder="请输入城市拼音"
                v-model="value11"
                :data="data">
              </el-transfer>
            </el-form-item>
            <el-form-item label="关联优选：">
              <el-transfer

                filterable
                :filter-method="filterMethod"
                filter-placeholder="请输入城市拼音"
                v-model="value11"
                :data="data">
              </el-transfer>
            </el-form-item>
            <el-form-item class="form1">
              <el-button size="small"@click="blockFomr();provice()">上一步，填写商品属性</el-button>
              <el-button type="primary" size="small"  @click="Open();Submit()"> 完成，提交商品</el-button>
            </el-form-item>
          </el-form>
        </el-main>
      </div>

    <el-header></el-header>
  </el-container>

</template>
<script>
  // window.onload=function(){
  //   $(function () {
  //     $('#select3').val('AI智慧全面屏 6GB +64GB 亮黑色 全网通版 移动联通电信4G手机 双卡双待手机 双卡双待')
  //   }),
  //     $(function () {
  //       $('#select2').val("华为HUAWEI P20");
  //     })
  // }


  import ElContainer from "element-ui/packages/container/src/main";
  import ElMain from "element-ui/packages/main/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
  import ElPopover from "element-ui/packages/popover/src/main";
  import ElFooter from "element-ui/packages/footer/src/main";
  import QuillEditor from "./Quill-editor";
  import {mapState} from 'vuex'
  export default {
    name: "shili",
    components: {ElHeader, ElMain, ElContainer, ElPopover, QuillEditor, ElFooter,},
    data() {

      //Guanxi
      const generateData = _ => {
        const datas = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          datas.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return datas;
      };
      return {
    forms1:{options:['shouji','shoujitong']},
        dialogImageUrl: '',
        dialogVisible: false,
        suitable:'',
        Network:'',
        value:'',
        defaultSelect:'',
        defaultSelect2:'',
        defaultSelect3:'',
        defaultSelect4:'',
        defaultSelect5:'',
        defaultSelect6:'',
        defaultSelect7:'',
        defaultSelect8:'',
        defaultSelect9:'',
        defaultSelect10:'',

        defaultSelects1:'',
        defaultSelects2:'',
        defaultSelects3:'',
        defaultSelects4:'',
        defaultSelects5:'',
        defaultSelects6:'',
        defaultSelects7:'',
        defaultSelects8:[],
        defaultSelects9:'',
        defaultSelects10:'',
        defaultSelects11:'',
        defaultSelects12:'',
        inputs1:'',
        inputs2:'',
        currentPage4: 4,
        value1: true,
        currentPage: 1,
        pageSize: 5,
        formInline: {
          user: '',
          region: '',
          activeIndex: '1',
          foods: '',
          size: '',

          numberValidateForm: {
            age: ''
          }
        },

        multipleSelection: [],


        //KindFood
        data2: '0',
        tableData: [{
          price: '',
          cun: '',
          color: '',
          size: '',
          warning: '',
          number: ''
        }],

        activeName: 'first',

        input: '',
        formf: {
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
        checkList: ['选中且禁用', '复选框 A'],


        //关系Guanxi
        dynamicValidateForm: {
          domains: [{
            value11: ''
          }],
          email: ''
        },
        data: generateData(),
        value11: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },

        //促销CUXIAO

        data1: '0',
        tableData: [{
          amount1: '',
          amount2: '',
        }],
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value12: '',
        value14: '',
        input12: '',

        activeName: 'first',
        tabPosition: 'bottom',
        visible: false,
        forms: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          type: [],
          resource: '',
          desc: ''
        },
//addFoods
        value: '',
        active: 0,
        formm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        ruleForm: {

          names: '',
          class: '',
          second: '',
          brand: '',
              huohao:'',
          shoujia:'',
          shichang:''
        },
        rules: {
          names: [
            {required: true, message: '请输入商品名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
            ,
          ],
          options: [
            {required: true, message: '请选择商品分类', trigger: 'blur'},
          ],
          class: [
            {required: true, message: '请选择商品分类', trigger: 'blur'},
          ],

          second: [
            {required: true, message: '请输入商品副标题', trigger: 'blur'},

          ],
          brand: [
            {required: true, message: '请选择商品品牌', trigger: 'blur'},

          ]
        }
      }
    },
    created(){

      //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
      this.defaultSelect = this.$store.state.option[0].label;
      this.defaultSelect2 = this.$store.state.FormData[0].name;
      // this.defaultSelect1= this.$store.state['shouji','shoujipei']
      this.defaultSelect3 = this.$store.state.header[0].label;
      this.defaultSelect4 = this.$store.state.FormData[0].name;
      this.defaultSelect5 = this.$store.state.header[0].price;
      this.defaultSelect6 = this.$store.state.header[0].sprice;
      this.defaultSelect7 = this.$store.state.header[0].kucun;
      this.defaultSelect8 = this.$store.state.header[0].danwei;
      this.defaultSelect9 = this.$store.state.header[0].weight;
      this.defaultSelect10 = this.$store.state.header[0].order;
      this.defaultSelects1 = this.$store.state.header[0].jifen;
      this.defaultSelects2 = this.$store.state.header[0].chengzhang;
      this.defaultSelects3 = this.$store.state.header[0].xianzhi;
      this.defaultSelects4 = this.$store.state.header[0].station;
      this.defaultSelects5 = this.$store.state.header[0].station;
      this.defaultSelects6 = this.$store.state.header[0].station;
      this.defaultSelects7 = this.$store.state.header[0].station;
      // this.defaultSelects4 = this.$store.state.header[0].station;
      // this.defaultSelects4 = this.$store.state.header[0].station;
      // this.defaultSelects4 = this.$store.state.header[0].station;
      this.value= this.$store.state.type[2].label;
      this.inputs1= this.$store.state.header[0].size;
      this.Network= this.$store.state.network[1].label;
      this.suitable= this.$store.state.network[0].xitong;
      this.inputs2= this.$store.state.header[0].accept;

    },
    computed: {
      tableData1: function () {
        return this.$store.state.tableData1;
      },
      tableData12: function () {
        return this.$store.state.tableData12;
      },
      option: function () {
        return this.$store.state.option;
      },
      options: function () {
        return this.$store.state.options;
      },
      FormData:function () {
        return this.$store.state.FormData;
      },
      type:function () {
        return this.$store.state.type;
      },
      network:function () {
        return this.$store.state.network;
      }

    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handelUpdate() {
        this.$message.error('Request failed with status code 500');
      },
      onSubmit() {
        console.log('sumbmit!')

      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      // submitForm(formName) {
      //   this.$refs[formName].validate((valid) => {
      //     if (valid) {
      //       alert('submit!');
      //     } else {
      //       console.log('error submit!!');
      //       return false;
      //     }
      //   });
      // },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },


      toHidden() {
        let form = document.getElementById("form1");
        let btn = document.getElementById("btn1")
        if (form.style = "display:none") {
          btn.style = "display:block"
        }
      },
      Submit() {
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
        this.imageUrl = res.data.url
        $picName = res.data.name
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


//Guanxi
      Open() {
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
      },

      onSubmit() {
        console.log('submit!');
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      provice(){
        if (this.active-- < 2) this.active = 0;
      },
      open() {
        this.$message({
          showClose: true,
          message: '验证失败！',
          type: 'error'
        });
      },
  //     submitForm(formName) {
  //       // this.$refs[formName].validate((valid) => {
  //       //   if (valid) {
  //       //     return this.$options.methods.blockForm.bind(this)();
  //       //   } else {
  //       //     return this.$options.methods.open.bind(this)();
  //       //   }
  //       // });
  //     this.$refs[formName].validate((valid) => {
  //       if (valid) {
  //         return this.$options.methods.next.bind(this)();
  //       }
  //       // else {
  //       //   return this.$options.methods.open.bind(this)();
  //       // }
  //     })
  // },
      blockForm(){
        let form1=document.getElementById("form1");
        let form2=document.getElementById("form2");
        if(form1.style.display=="" &&  form2.style.display=="none"){
          form1.style.display="none",
            form2.style.display="block"
        }else{
          form1.style.display="",
            form2.style.display="none"
        }
      },
      blockFrom(){
        let form3=document.getElementById("form3");
        let form2=document.getElementById("form2");
        if(form2.style.display=="none" &&  form3.style.display=="block"){
          form2.style.display="block",
            form3.style.display="none"
        }else{
          form2.style.display="none",
            form3.style.display="block"
        }
      },
      blockFomr(){
        let form3=document.getElementById("form3");
        let form4=document.getElementById("form4");

        if(form3.style.display=="" &&  form4.style.display=="none"){
          form3.style.display="none",
            form4.style.display=""
        }else{
          form3.style.display="",
            form4.style.display="none"
        }
      },
      hidden(){
        let form2=document.getElementById("form2");
        let form3=document.getElementById("form3");

        if(form2.style.display=="" &&  form3.style.display=="none"){
          form2.style.display="none",
            form3.style.display="block"
        }
      },
      // blockForm2(){
      //   let form2=document.getElementById("form2");
      //   let form3=document.getElementById("form2");
      //
      //   if(form1.style.display=="" &&  form2.style.display=="none"){
      //     form1.style.display="none",
      //       form2.style.display="block"
      //   }},
      toHidden(){
        let form=document.getElementById("form1");
        let btn=document.getElementById("btn2")
        if(form.style.display=="none"){
          btn.style.display="none"
        }
      },


      //foodsCUXIAO
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      addRow(tableData,event){//新增一行
        //之前一直想不到怎么新增一行空数据，最后幸亏一位朋友提示：表格新增一行，其实就是源数据的新增，从源数据入手就可以实现了，于是 恍然大悟啊！
        tableData.push({ name: '', xpath: '',desc:'',value:'',defVal:'' })
      },

      onSubmit() {
        console.log('submit!');
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleClick(row) {
        console.log(row);
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      Nothing(){
        let div4 = document.getElementById("div4");
        let div3 = document.getElementById("div3");
        let div2 = document.getElementById("div2");
        let div1 = document.getElementById("div1");
        if (div4.style.display == ""||div2.style.display == "" || div1.style.display == "" || div3.style.display == "") {
          div1.style.display = "none",
            div2.style.display = "none";
          div3.style.display = "none";
          div4.style.display = "none";
        }
      },
      toShow() {
        let div4 = document.getElementById("div4");
        let div3 = document.getElementById("div3");
        let div2 = document.getElementById("div2");
        let div1 = document.getElementById("div1");
        if (div4.style.display == ""||div2.style.display == "" || div1.style.display == "" || div3.style.display == "") {
          div1.style.display = "none",
            div2.style.display = "none";
          div3.style.display = "none";
          div4.style.display = "none";
        }else {
          div1.style.display="";
        }
      },
      toLook(){
        let div4 = document.getElementById("div4");
        let div3 = document.getElementById("div3");
        let div2 = document.getElementById("div2");
        let div1 = document.getElementById("div1");
        if (div4.style.display == ""||div2.style.display == "" || div1.style.display == "" || div3.style.display == "") {
          div1.style.display = "none",
            div2.style.display = "none";
          div3.style.display = "none";
          div4.style.display = "none";
        }else {
          div2.style.display="";
        }
      },
      toSee(){
        let div4 = document.getElementById("div4");
        let div3 = document.getElementById("div3");
        let div2 = document.getElementById("div2");
        let div1 = document.getElementById("div1");
        if (div4.style.display == ""||div2.style.display == "" || div1.style.display == "" || div3.style.display == "") {
          div1.style.display = "none",
            div2.style.display = "none";
          div3.style.display = "none";
          div4.style.display = "none";
        }else {
          div3.style.display="";
        }
      },
      toNotsee() {

        let div4 = document.getElementById("div4");
        let div3 = document.getElementById("div3");
        let div2 = document.getElementById("div2");
        let div1 = document.getElementById("div1");
        if (div4.style.display == ""||div2.style.display == "" || div1.style.display == "" || div3.style.display == "") {
          div1.style.display = "none",
            div2.style.display = "none";
          div3.style.display = "none";
          div4.style.display = "none";
        } else {
          div4.style.display = "";
        }
      },
    }
  }
</script>
<style>
  .form{
    vertical-align: middle;
  }
  .el-inputs{
    width: 500px!important;
    vertical-align: center;
  }
  /*.row1{*/
  /*  margin-top: 20px;*/
  /*  margin-bottom: 5px;*/
  /*}*/
  .inputs{
    width: 200px!important;
  }
  /*#div2{*/
  /*  margin-bottom: 20px;*/
  /*}*/
  .row11{
    margin: 10px;
  }
  .inputs1{
    width: 100px!important;
  }
  /*.div1{*/
  /*  border: 1px solid lightgray;*/
  /*  margin-top:30px;*/
  /*  margin-left: 30px;*/
  /*  padding-top: 20px;*/
  /*  padding-left: 100px;*/
  /*  width: 700px;*/
  /*}*/

  .div--{
    border: 1px solid lightgray;
    margin-top:30px;
    margin-left: 30px;
    padding-top: 20px;
    padding-left: 100px;
    width: 700px;
  }
  .input{
    width: 500px;
  }
  .form{
    margin-top: 15px;
      }



/*  Guanxi*/
  .form1{
    text-align: center;
  }



  .divv{
    width: 585px;
    margin-top: 10px;
    margin-left: 0px;
    padding-left: 30px;
    background-color: rgb(242 246 252);
  }
  .inputt{
    width: 200px;

  }
  .divv1{
    height: 400px;
  }
</style>
