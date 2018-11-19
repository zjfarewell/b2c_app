// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


// //引入路由
import router from './router/router.js';

//引入状态管理
import store from './store/store.js'

//引入ajax
import axios from 'axios'
Vue.prototype.$axios = axios



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
