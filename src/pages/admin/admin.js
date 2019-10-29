// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/index.js'
import store from '../../store'
import $ from 'jquery'
import VueQuillEditor  from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'



Vue.use(VueQuillEditor);

Vue.use(ElementUI)
Vue.config.productionTip = false
//Vue.prototype.$req = axios;  //将axios实例(函数)绑定到vue实例的原型上，所有的vue实例都有这个属性

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
