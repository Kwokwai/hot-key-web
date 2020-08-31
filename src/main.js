import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import https from './fetch/https';

Vue.use(Antd);

Vue.config.productionTip = false
Vue.prototype.$https = https;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
