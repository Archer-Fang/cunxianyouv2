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
require('bootstrap-loader');
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);


Vue.config.productionTip = false
Vue.filter("formatDate", function (value) {
  var middleState = value.split("");
  middleState.splice(4,0,"年");
  middleState.splice(7,0,"月")
  middleState.splice(middleState.length,0,"日")
  var middleState2 = middleState.toString().replace(/,/g,'')
  return middleState2
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
