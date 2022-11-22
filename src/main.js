import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify/index'
import '@/styles/styles.scss'
import Carousel3d from 'vue-carousel-3d'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  Carousel3d,
  render: h => h(App)
}).$mount('#app')
