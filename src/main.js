import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import myUtils from './util/util';

Vue.config.productionTip = false;
Vue.prototype.myUtils = myUtils;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
