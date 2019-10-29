import Vue from 'vue'
import VueRouter from 'vue-router'
import  Tab from "../../../components/Tab"
import Form1 from "../../../components/Form1"
import FoodList from "../../../components/FoodList"
import addFoods from "../../../components/addFoods"
import foodsCUXIAO from "../../../components/foodsCUXIAO"
import KindsFood from "../../../components/KindsFood"
import Guanxi from "../../../components/Guanxi"
import  Fenlei from '../../../components/Fenlei'
import  AddKinds from '../../../components/AddKinds'
import  Type from '../../../components/Type/Type'
import TypeList from '../../../components/Type/TypeList'
import PinGuan from '../../../components/Pinpai/PinGuan'
import orderList from '../../../components/order/orderList'
import  setting from '../../../components/order/setting'
import  returns from  '../../../components/order/returns'
import opinions from '../../../components/order/opinions'
import flash from '../../../components/marking/flash'
import cheap from '../../../components/marking/cheap'
import Tuijian from '../../../components/marking/Tuijian'
import xinPin from '../../../components/marking/xinPin'
import renQi from '../../../components/marking/renQi'
import zhuanTi from '../../../components/marking/zhuanTi'
import guang from '../../../components/marking/guang'
import count from '../../../components/count'
import changeFood from '../../../components/changeFood'
import shili from '../../../components/shili'
import changeFoodNow from '../../../components/changeFoodNow'
import FenFuZhuang from  '../../../components/FenFuZhuang'
// import FenShou from '../../../components/FenShou'
// import addFoodFen from  '../../../components/addFoodFen'
import numList from '../../../components/Type/numList'
import addType from '../../../components/Type/addType'
import changePin from '../../../components/Pinpai/changePin'
import addTypePin from '../../../components/Pinpai/addPinType'
import aboutOrder from '../../../components/order/aboutOrder'

Vue.use(VueRouter)
const  routes =[
  {
    path: "/",
    component: Form1,
    name: '首页'},{
      path: "/Form1",
      component: Form1,
      name: '首页',
      children: [
        {
          path: '/FoodList',
          component: FoodList,
          name: '商品列表',
          meta: {title: 'FoodList', noCache: true},
          children:[{
            path:'/changeFoodNow',
            component:changeFoodNow,
            name: '修改商品',
          },
          ]
        },
        {
          path: '/shili',
          component: shili,
          name: '添加商品',
          meta: {title: ' shili', noCache: true},
          children: [{

            path: '/foodsCUXIAO',
            component: foodsCUXIAO,
          },
            {
              path: '/KindsFood', component: KindsFood
            },
            {
              path: '/Guanxi', component: Guanxi,
            },
          ]
        },

        {
          path: '/addFoods',
          component: addFoods,
          name: '添加商品',
          meta: {title: ' addFoods', noCache: true},
          children: [{

            path: '/foodsCUXIAO',
            component: foodsCUXIAO,

          },
         {
              path: '/KindsFood', component: KindsFood
            },
            {
              path: '/Guanxi', component: Guanxi,
            },
          ]
        },
        {
          path: '/Fenlei',
          component: Fenlei,
          name: '商品分类',
          meta: {title: 'Fenlei'}
          }, {
           path:'/FenFuZhuang',
           component:FenFuZhuang,
          name:'商品分类'
         },
        //  ,{
        //   path:'/FenShou',
        //   component:FenShou,
        // },
        {
          path: '/AddKinds', component: AddKinds,
          name: '添加商品分类',
          meta: {title: 'AddKinds'},
        },
        {
          path: '/Type', component: Type,
          name: '商品类型',
          meta: {title: 'Type'}
        },
        {
          path: '/TypeList', component: TypeList,
          name: '商品属性列表',
          meta: {title: 'TypeList'}
        },{
          path: '/numList', component: numList,
          name: '商品属性列表',
          meta: {title: 'numList'}
        },{
          path: '/addType', component: addType,
          name: '添加商品属性',
          meta: {title: 'addType'}
        },
        {
        path:'/PinGuan',component:PinGuan,
           name:'品牌管理',
          meta: {title: 'PinGuan'}
      }, {
          path:'/changePin',component:changePin,
          name:'编辑品牌',
          meta: {title: 'changePin'}
        },{
          path:'/addTypePin',component:addTypePin,
          name:'添加品牌',
          meta: {title: 'addTypePin'}
        },
        {
        path:'/orderList',component:orderList,
          name:'订单列表',
          meta:{title:'orderList'}
        }, {
          path:'/aboutOrder',component:aboutOrder,
          name:'订单详情',
          meta:{title:'aboutOrder'}
        },{
        path:'/setting',component:setting,
          name:'订单设置',
          meta:{title:'setting'}
        },{
        path:'/returns',component:returns,
          name:'退货申请处理',
          meta:{title:'returns'}
        },{
        path:'/opinions',component:opinions,
          name:'退货原因设置',
          meta:{title:'opinions'}
        },{
          path:'/flash',component:flash,
          name:'秒杀活动列表',
          meta:{title:'flash'}
        },{
          path:'/cheap',component:cheap,
          name:'优惠券列表',
          meta:{title:'cheap'}
        },{
          path:'/Tuijian',component:Tuijian,
          name:'品牌推荐',
          meta:{title:'Tuijian'}
        },{
          path:'/xinPin',component:xinPin,
          name:'新品推荐',
          meta:{title:'xinPin'}
        },{
          path:'/renQi',component:renQi,
          name:'人气推荐',
          meta:{title:'renQi'}
        },{
          path:'/zhuanTi',component:zhuanTi,
          name:'专题推荐',
          meta:{title:'zhuanTi'}
        },{
          path:'/guang',component:guang,
          name:'广告列表',
          meta:{title:'guang'}
        },{
          path:'/count',component:count,
          // name:'首页',
          meta:{title:'count'}
        },
        // ,{
        //   path:'/addFoodFen',
        //   component:addFoodFen,
        //   name:'添加商品分类'
        // },
      ]

  }
  ]
const  router = new VueRouter({
  routes
})
//
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

export default router
