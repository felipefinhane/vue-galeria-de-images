import Vue from 'vue'
import App from './App.vue'

import vueResource from 'vue-resource';
import vueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(vueResource)
Vue.use(vueRouter);
const router = new vueRouter({
  routes,
  mode : 'history'
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
