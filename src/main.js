import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(Lazyload);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
