import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBmmr3nuh-S0zgQfhtmPO9PXzxZHKANQE",
    authDomain: "apptuvi-phucmap.firebaseapp.com",
    databaseURL: "https://apptuvi-phucmap.firebaseio.com",
    projectId: "apptuvi-phucmap",
    storageBucket: "apptuvi-phucmap.appspot.com",
    messagingSenderId: "525691376714",
    appId: "1:525691376714:web:0949cac63415c3afb502b3",
    measurementId: "G-LZJTJ1YBDW"
  };
firebase.initializeApp(firebaseConfig);
firebase.database();
firebase.firestore();
export default firebase;
