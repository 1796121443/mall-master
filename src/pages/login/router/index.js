import Vue from 'vue'
import VueRouter from 'vue-router'
import  Tab from "../../../components/Tab"
import Form1 from "../../../components/Form1";
Vue.use(VueRouter)
const  routes =[
  {path:"/",
    component:Tab},
  {path:"/tab/ab",Tab},
  {path:"/Form1",Form1}
    ]
const  router = new VueRouter({
  routes
})
export default router
