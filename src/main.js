import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入样式初始化文件
import './stylesheets/mine.less';
// 引入rem
import './modules/rem';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
