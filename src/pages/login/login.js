// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from '../../../node_modules/element-ui'
import $ from 'jquery'
import '../../../node_modules/element-ui/lib/index.js'
import '../../../node_modules/element-ui/lib/theme-chalk/index.css'
import "../../../node_modules/bootstrap/dist/js/bootstrap.js"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import store from "../../store"
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
