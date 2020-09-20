import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import "./plugins/firebase";

Vue.config.productionTip = false;

store.dispatch("setAuth").then(() => {
  new Vue({
    vuetify,
    router,
    store,
    render: (h) => h(App),
    //mounted() {
    //  store.dispatch("setAuth");
    //},
  }).$mount("#app");
});
