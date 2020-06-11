import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import A from '@/components/A.vue';

const B = () => import('@/components/B.vue');

export default new Router({
  routes: [
    {
      path: '/',
      component: A,
      name: 'a',
    },
    {
      path: '/b',
      component: B,
      name: 'b',
    },
  ],
});
