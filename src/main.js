// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import jsonLoader from 'json-loader'
import axios from 'axios'
import VueECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import wowtoken from './components/wowtoken.vue';
import wowprice from './components/wowprice.vue';

// 开启debug模式
Vue.config.debug = true;
Vue.config.productionTip = false

Vue.component('chart', VueECharts);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(jsonLoader);

// 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等
Vue.prototype.$http = axios

const routes = [
  {path: '/', component: wowprice},
  {path: '/wowprice', component: wowprice},
  {path: '/wowtoken', component: wowtoken}
]
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // （缩写）相当于 routes: routes
})

/* eslint-disable no-new */
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
