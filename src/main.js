import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify/index'
import axios from 'axios'
import jquery from 'jquery'
import '@/styles/styles.scss'
import Carousel3d from 'vue-carousel-3d'

Vue.use(axios)
window.jquery = window.$ = jquery
Vue.config.productionTip = true;
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://10.192.197.42:8080/api";


new Vue({
  router,
  store,
  vuetify,
  Carousel3d,
  render: h => h(App)
}).$mount('#app')
