'use strict';

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects

firebase.initializeApp({
  apiKey: "AIzaSyCd0qjFCXIUvPYgOQaTK_zMGIbXED_qIm0",
  authDomain: "flora-247.firebaseapp.com",
  databaseURL: "https://flora-247.firebaseio.com",
  projectId: "flora-247",
  storageBucket: "flora-247.appspot.com",
  messagingSenderId: "159426383092"
});

// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore();
// db.settings({
// 	timestampsInSnapshots: true,
// });

// Initialize Cloud Storage for images / media
export const storage = firebase.storage();
