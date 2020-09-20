import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    logout({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setAuth", false);
          router.replace("/login");
        });
    },
    login({ commit }, authData) {
      firebase
        .auth()
        .signInWithEmailAndPassword(authData.email, authData.password)
        .then(() => {
          commit("setAuth", true);
          router.push("/");
        });
    },
    async setAuth({ dispatch }) {
      await dispatch("syncAuth");
    },
    syncAuth({ commit }) {
      return new Promise((resolve) => {
        firebase.auth().onAuthStateChanged((user) => {
          const isAuth = user != null;
          console.log("login: " + isAuth);
          commit("setAuth", isAuth);
          resolve();
        });
      });
    },
  },
});
