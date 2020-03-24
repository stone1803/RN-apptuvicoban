import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

import "firebase/auth";

const firebaseConfig = {
 
  };
firebase.initializeApp(firebaseConfig);
firebase.database();
firebase.firestore();
export default firebase;
