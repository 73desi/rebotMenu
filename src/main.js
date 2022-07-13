import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import waterfall from "vue-waterfall2";
import axios from 'axios' //引入 axios
Vue.prototype.$axios = axios //把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求
Vue.config.productionTip = false
Vue.use(waterfall);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
