import Vue from "vue";
import Router from "vue-router";
//import Home from "./views/Home.vue";
import Graph from "./views/Graph.vue";
import Login from "./views/Login.vue";
import store from "./store";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Graph,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/login",
      component: Login,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next("/");
        } else {
          next();
        }
      },
    },
  ],
});
