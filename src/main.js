import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BackToTop from 'vue-backtotop'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  BackToTop,
  render: function (h) { return h(App) }
}).$mount('#app')
