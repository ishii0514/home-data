import Vue from "vue";
import { firestorePlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(firestorePlugin);

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbr4TORURVqqNCBX14db21mppV2iZH5aI",
  authDomain: "home-data-b109b.firebaseapp.com",
  databaseURL: "https://home-data-b109b.firebaseio.com",
  projectId: "home-data-b109b",
  storageBucket: "home-data-b109b.appspot.com",
  messagingSenderId: "51941888253",
  appId: "1:51941888253:web:ec5211047b682f594aee94",
  measurementId: "G-PKBJCE50G9",
});

export const db = firebaseApp.firestore();
