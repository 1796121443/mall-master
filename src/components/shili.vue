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
    <el-cascader :options="options" clearable></el-cascader>
  </el-form-item>
         <el-form-item label="商品名称" prop="names" required >
           <el-input class='input' v-model="ruleForm.names"></el-input>
         </el-form-item>
         <el-form-item label="副标题" prop="second" required>
           <el-input class='input' v-model="ruleForm.second"></el-input>
         </el-form-item>
         <el-form-item label="商品品牌"  required>
<!--           <el-cascader :options="ruleForm.options" clearable placeholder="请选择品牌"></el-cascader>-->

           <el-select v-model="value" placeholder="请选择品牌">
             <el-option   v-for="item in option"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"></el-option>
<!--             <el-option label="区域二" value="beijing"></el-option>-->
           </el-select>
         </el-form-item>
         <el-form-item label="商品介绍">
           <el-input class='input' type="textarea" placeholder="请输入内容" v-model="formm.desc"></el-input>
         </el-form-item>
         <el-form-item label="商品货号">
           <el-input class='input' v-model="formm.name"></el-input>
         </el-form-item>
         <el-form-item label="商品售价">
           <el-input class='input' v-model="formm.name"></el-input>
         </el-form-item>
         <el-form-item label="市场价">
           <el-input class='input' v-model="formm.name"></el-input>
         </el-form-item>
         <el-form-item label="商品库存">
           <el-input class='input' v-model="formm.name"></el-input>
         </el-form-item>
         <el-form-item label="计量单位">
           <el-input class='input' v-model="formm.name"></el-input>
         </el-form-item>
         <el-form-item label="商品重量">
           <el-input class='input' v-model="formm.name"></el-input>克
         </el-form-item>
         <el-form-item label="排序">
           <el-input class='input' v-model="formm.name"></el-input>
         </el-form-item>

  <el-form-item >

<el-form-item>

</el-form-item>
<!--<router-link :to="{path:'/foodsCUXIAO'}">wqeq</router-link>-->

  </el-form-item>
</el-form>

      <el-button style="margin-left: 230px" id="btn2" size="small"  type="primary"
                 @click=" submitForm('ruleForm')">下一步，填写商品促销</el-button></div>

<!--          foodsCUXIAO-->
          <el-form size="small" style="display: none" id="form2" class="form"  ref="forms" :model="forms" label-width="80px">
            <el-form-item label="赠送积分:" label-width="100px">
              <el-input class="el-inputs" v-model="forms.name"></el-input>
            </el-form-item>
            <el-form-item label="赠送成长值:" label-width="100px">
              <el-input class="el-inputs" v-model="forms.name"></el-input>
            </el-form-item>
            <el-form-item label="积分购买限制:" label-width="100px">
              <el-input class="el-inputs" v-model="forms.name"></el-input>
            </el-form-item>


            <el-form-item class="el-inputs" label="预告商品:">
              <el-switch v-model="forms.delivery1"></el-switch>
            </el-form-item>
            <el-form-item class="el-inputs" label="商品上架:">
              <el-switch v-model="forms.delivery2"></el-switch>
            </el-form-item>

            <el-form :inline="true">
              <el-form-item  label="商品推荐:">

              </el-form-item>
              <el-form-item label="新品">
                <el-switch v-model="forms.delivery3"></el-switch>
              </el-form-item>

              <el-form-item label="推荐">
                <el-switch v-model="forms.delivery4"></el-switch>
              </el-form-item>
            </el-form>

            <el-form-item label="活动性质:">
              <el-checkbox-group v-model="forms.type">
                <el-checkbox label="无忧退货" name="type"></el-checkbox>
                <el-checkbox label="快速退款" name="type"></el-checkbox>
                <el-checkbox label="免费包邮" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="详细页标题:" label-width="100px">
              <el-input class="el-inputs" type="text" v-model="forms.desc"></el-input>
            </el-form-item>
            <el-form-item label="详细页描述:" label-width="100px">
              <el-input class="el-inputs" type="text" v-model="forms.desc"></el-input>
            </el-form-item>
            <el-form-item label="商品关键字:" label-width="100px">
              <el-input class="el-inputs" type="text" v-model="forms.desc"></el-input>
            </el-form-item>
            <el-form-item label="商品备注:">
              <el-input class="el-inputs" type="textarea" v-model="forms.desc"></el-input>
            </el-form-item>


            <el-button-group>
              <el-button @click="Nothing">无优惠</el-button>
              <el-button @click="toShow">特惠促销</el-button>
              <el-button @click="toLook">会员价格</el-button>
              <el-button @click="toSee">阶梯价格</el-button>
              <el-button @click="toNotsee">满减价格</el-button>
            </el-button-group>
            <div style="width: 400px;height: 200px">
              <div style="display: none" id="div1">
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
                  <el-select v-model="formf.region" placeholder="请选择属性类型">
                    <el-option label="服装-t恤" value="shanghai"></el-option>
                    <el-option label="服装-裤装" value="beijing"></el-option>
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
                      <el-input v-model="data2" class="input1"></el-input>

                    </el-table-column>

                    <el-table-column
                      prop="cun"
                      label="商品库存">
                      <el-input v-model="data2" class="input1"></el-input>
                    </el-table-column>
                    <el-table-column
                      prop="warning"
                      label="库存预警值">
                      <el-input v-model="data2" class="input1"></el-input>
                    </el-table-column>
                    <el-table-column
                      prop="number"
                      label="SKU编号">
                      <el-input v-model="data2" class="input1"></el-input>
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
                  <div class="divv" >
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
                  <div class="divv" >
                    <el-form-item label="适用人群:"  size="small">
                      <el-select v-model="formf.region" placeholder="请选择">
                        <el-option label="老年" value="shanghai"></el-option>
                        <el-option label="青年" value="beijing"></el-option>
                        <el-option label="中年" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="风格:"  size="small">
                      <el-select v-model="formf.region" placeholder="请选择">
                        <el-option label="嘻哈风格" value="shanghai"></el-option>
                        <el-option label="基础大众" value="beijing"></el-option>
                        <el-option label="商务正装" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="适用场景:"  size="small">
                      <el-select v-model="formf.region" placeholder="请选择">
                        <el-option label="居家" value="shanghai"></el-option>
                        <el-option label="运动" value="beijing"></el-option>
                        <el-option label="正装" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="上市时间:"  size="small">
                      <el-select v-model="formf.region" placeholder="请选择">
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
              <el-button type="primary" size="small"  @click="Open;Submit"> 完成，提交商品</el-button>
            </el-form-item>
          </el-form>
        </el-main>
      </div>

    <el-header></el-header>
  </el-container>

</template>
<script>
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
          delivery1: false,
          delivery2: false,
          delivery3: false,
          delivery4: false,
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

        },
        rules: {
          names: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
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
            {required: true, message: '请输入副标题', trigger: 'blur'},

          ],
          brand: [
            {required: true, message: '请选择商品品牌', trigger: 'blur'},

          ]
        }
      }
    },
    computed: {
      tableData1: function () {
        return this.$store.state.tableData1;
      },
      option: function () {
        return this.$store.state.option;
      },
      options: function () {
        return this.$store.state.options;
      },

    },
    methods: {

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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            return this.$options.methods.blockForm.bind(this)();
          } else {
            return this.$options.methods.open.bind(this)();
          }
        });
      this.$refs[formName].validate((valid) => {
        if (valid) {
          return this.$options.methods.next.bind(this)();
        } else {
          return this.$options.methods.open.bind(this)();
        }
      })
  },
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
