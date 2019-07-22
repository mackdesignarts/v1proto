import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
