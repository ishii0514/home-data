import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    isAuth: false,
  },
  getters: {
    isAuth: (state) => state.isAuth,
  },
  mutations: {
    setAuth(state, isAuth) {
      // 状態を変更する
      state.isAuth = isAuth;
    },
  },
  actions: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          router.replace("/login");
        });
    },
    login(context, authData) {
      firebase
        .auth()
        .signInWithEmailAndPassword(authData.email, authData.password)
        .then(router.push("/"));
    },
    isAuth() {
      firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
        const isAuth = user != null;
        this.$commit("setAuth", isAuth);
      });
    },
  },
});
