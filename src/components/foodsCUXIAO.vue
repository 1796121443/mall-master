<template>

  <el-form size="small" class="form"  ref="form" :model="form" label-width="80px">
    <el-form-item label="赠送积分:" label-width="100px">
      <el-input class="el-input" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="赠送成长值:" label-width="100px">
      <el-input class="el-input" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="积分购买限制:" label-width="100px">
      <el-input class="el-input" v-model="form.name"></el-input>
    </el-form-item>


    <el-form-item class="el-input" label="预告商品:">
      <el-switch v-model="form.delivery1"></el-switch>
    </el-form-item>
    <el-form-item class="el-input" label="商品上架:">
      <el-switch v-model="form.delivery2"></el-switch>
    </el-form-item>

    <el-form :inline="true">
      <el-form-item  label="商品推荐:">

      </el-form-item>
      <el-form-item label="新品">
        <el-switch v-model="form.delivery3"></el-switch>
      </el-form-item>

      <el-form-item label="推荐">
        <el-switch v-model="form.delivery4"></el-switch>
      </el-form-item>
    </el-form>

    <el-form-item label="活动性质:">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="无忧退货" name="type"></el-checkbox>
        <el-checkbox label="快速退款" name="type"></el-checkbox>
        <el-checkbox label="免费包邮" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="详细页标题:" label-width="100px">
      <el-input class="el-input" type="text" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item label="详细页描述:" label-width="100px">
      <el-input class="el-input" type="text" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item label="商品关键字:" label-width="100px">
      <el-input class="el-input" type="text" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item label="商品备注:">
      <el-input class="el-input" type="textarea" v-model="form.desc"></el-input>
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
   <el-row class="row1">
     <el-col :span="6">
      <span class="demonstration">开始时间：</span>
     </el-col>
     <el-col :span="8">
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择开始时间"
      size="small" class="input">
      </el-date-picker>
     </el-col>
   </el-row>
    <el-row class="row1">
      <el-col :span="6">
      <span class="demonstration">结束时间：</span>
      </el-col>
      <el-col :span="8">
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择结束时间"
      size="small" class="input">
      </el-date-picker>
      </el-col>
    </el-row>
<el-row class="row1">
 <el-col :span="6">
   <span>促销价格：</span>
 </el-col>
    <el-col :span="8">
<el-input class="input" v-model="input" placeholder="请输入促销价格" size="small"></el-input>
    </el-col>
</el-row>
</div>

    <div id="div2" style="display: none">
      <el-row class="row1">
        <el-col :span="6">
      黄金会员：
        </el-col>
        <el-col :span="7">
          <el-input class="input"
        v-model="input"
        clearable size="small">
      </el-input>
        </el-col>
      </el-row>

      <el-row class="row1">
        <el-col :span="6">
      白金会员：
        </el-col>
        <el-col :span="7">
          <el-input class="input"
      v-model="input"
      clearable size="small">
    </el-input>
      </el-col>
      </el-row>

      <el-row class="row1">
        <el-col :span="6">
      钻石会员：
        </el-col>
        <el-col :span="7"><el-input class="input"
      v-model="input"
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
          <el-input v-model="data" class="input1"></el-input>

        </el-table-column>

        <el-table-column
          prop="amount2"
          label="折扣">
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
    </div>
    <div id="div4" style="display: none">

      <el-table
        :data="tableData"
        border
        style="width: 400px; margin-top: 20px">
        <el-table-column
          prop="amount1"
          label="数量">
          <el-input v-model="data" class="input1"></el-input>

        </el-table-column>

        <el-table-column
          prop="amount2"
          label="折扣">
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
    </div>
    </div>
    <el-form-item>
      <el-button @click="gotoLink2('addFoods')">上一步,填写商品信息</el-button>
      <el-button type="primary" @click="next;gotoLink1('KindsFood')">下一步,填写商品属性</el-button>

    </el-form-item>
  </el-form>

</template>

<script>
    import ElPopover from "element-ui/packages/popover/src/main";
    export default {
      name: "foodsCUXIAO",
      components: {ElPopover},
      data() {
        return {
          data:'0',
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
          value1: '',
          value:'',
          value2:'',
          input:'',

          activeName: 'first',
          tabPosition:'bottom',
          visible: false,
          form: {
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
          }
        }
      },
      methods: {
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
        gotoLink1(){
          this.$router.replace('/KindsFood')
        },
gotoLink2(){
  this.$router.replace('/addFoods')
}
      }
    }
</script>

<style scoped>
.form{
vertical-align: middle;
}
 .el-input{
    width: 500px!important;
   vertical-align: center;
  }
  /*.row1{*/
  /*  margin-top: 20px;*/
  /*  margin-bottom: 5px;*/
  /*}*/
  .input{
    width: 200px!important;
  }
  /*#div2{*/
  /*  margin-bottom: 20px;*/
  /*}*/
  .row1{
    margin: 10px;
  }
  .input1{
    width: 100px!important;
  }
.div1{
  border: 1px solid lightgray;
  margin-top:30px;
  margin-left: 30px;
  padding-top: 20px;
  padding-left: 100px;
  width: 700px;
}
</style>
