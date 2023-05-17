import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

Vue.config.productionTip = false
// 定义全局根地址
axios.defaults.baseURL = "https://applet-base-api-t.itheima.net";
// 在vue原型对象上挂载axios函数
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
