import Vue from 'vue'
import App from './App.vue'

import vueResource from 'vue-resource';
import vueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(vueRouter);
const router = vueRouter({
  routes,
  mode : 'history'
});

Vue.use(vueResource)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
