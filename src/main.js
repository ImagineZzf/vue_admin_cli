import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@plugins/element.js'
import '@scss/base.scss'

import { axios, axiosLoading } from '@plugins/axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$axiosLoading = axiosLoading

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
