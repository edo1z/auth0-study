import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import authService from './api/auth0'

(async function () {
  await authService.init();
  Vue.prototype.$auth = authService;
  Vue.config.productionTip = false;

  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
}());

