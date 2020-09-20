import Vue from "vue";
import Router from "vue-router";
import RealtimeGraph from "./views/RealtimeGraph.vue";
import Login from "./views/Login.vue";
import store from "./store";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/",
    },
    {
      path: "/",
      component: RealtimeGraph,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.getters.isAuth) {
          next("/");
        } else {
          next();
        }
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  console.log("beforeEarch:" + store.getters.isAuth);

  if (requiresAuth) {
    if (store.getters.isAuth) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});
export default router;
