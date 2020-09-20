import Vue from "vue";
import Router from "vue-router";
import RealtimeGraph from "./views/RealtimeGraph.vue";
import Login from "./views/Login.vue";
import firebase from "firebase/app";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    //{
    //  path: "*",
    //  redirect: "login",
    //},
    {
      path: "/",
      component: RealtimeGraph,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        next();
      } else {
        next("/login");
      }
    });
  } else {
    next();
  }
});

export default router;
