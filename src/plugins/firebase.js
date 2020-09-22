import Vue from "vue";
//import { firestorePlugin } from "vuefire";
import { rtdbPlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

//Vue.use(firestorePlugin);
Vue.use(rtdbPlugin);

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGEING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
});

const moistureProjectFirebaseConfig = {
  apiKey: process.env.VUE_APP_SECONDARY_API_KEY,
  authDomain: process.env.VUE_APP_SECONDARY_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_SECONDARY_DATABASE_URL,
  projectId: process.env.VUE_APP_SECONDARY_PROJECT_ID,
  storageBucket: process.env.VUE_APP_SECONDARY_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_SECONDARY_MESSAGEING_SENDER_ID,
  appId: process.env.VUE_APP_SECONDARY_APP_ID,
  measurementId: process.env.VUE_APP_SECONDARY_MEASUREMENT_ID,
};
//他のプロジェクトへの接続
const moisutureProject = firebase.initializeApp(
  moistureProjectFirebaseConfig,
  "moisture"
);

export const moisture_db = moisutureProject.database();
export const db = firebaseApp.firestore();
