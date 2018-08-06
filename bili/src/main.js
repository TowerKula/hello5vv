// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 以模块化方式 引入vue
import App from './App'
import router from './router' //引入路由文件
import store from "./store"; //导入store
Vue.config.productionTip = false

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //es6 对象简写,
  store,
  components: { App },
  template: '<App/>'
})
