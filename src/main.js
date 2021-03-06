// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import jquery from 'jquery'
/*
  引入bootstap
*/
/*import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'*/

/*
require('bootstrap-loader');
*/
/*import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);*/

/*
  引入element
*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import structure from "./structure/stucture.vue"
  Vue.component('structure',structure)

Vue.config.productionTip = false
/*Vue.filter("formatDate", function (value) {
  var middleState = value.split("");
  middleState.splice(4,0,"年");
  middleState.splice(7,0,"月")
  middleState.splice(middleState.length,0,"日")
  var middleState2 = middleState.toString().replace(/,/g,'')
  return middleState2
})*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
