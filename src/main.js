import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import LandingPage from './components/LandingPage';
import WelcomePage from './components/WelcomePage';
import NewsPage from './components/NewsPage';
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: WelcomePage },
    { path: '/landing', component: LandingPage },
    { path: '/landing/news', component: NewsPage }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
