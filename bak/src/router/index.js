import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import AA from "@/components/AA.vue";

const BB = () => import("@/components/BB.vue");

export default new Router({
  routes: [
    {
      path: "/",
      component: AA,
      name: "aa"
    },
    {
      path: "/b",
      component: BB,
      name: "bb"
    }
  ]
});
