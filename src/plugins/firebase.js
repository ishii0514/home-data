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
  apiKey: "AIzaSyDQZQbgni9ECcmkfIhdXTHqHislgFTqF6M",
  authDomain: "moisture-6f216.firebaseapp.com",
  databaseURL: "https://moisture-6f216.firebaseio.com",
  projectId: "moisture-6f216",
  storageBucket: "moisture-6f216.appspot.com",
  messagingSenderId: "841098403922",
  appId: "1:841098403922:web:5937541984f7295c393f8b",
  measurementId: "G-DWG77GWVDW",
};
//他のプロジェクトへの接続
const moisutureProject = firebase.initializeApp(
  moistureProjectFirebaseConfig,
  "moisture"
);

export const moisture_db = moisutureProject.database();
export const db = firebaseApp.firestore();
