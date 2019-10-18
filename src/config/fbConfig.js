import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA7-x47UjhWTXvuS_SkaoMfsLRtCOOVrIo",
  authDomain: "simpleblog-ef4f8.firebaseapp.com",
  databaseURL: "https://simpleblog-ef4f8.firebaseio.com",
  projectId: "simpleblog-ef4f8",
  storageBucket: "simpleblog-ef4f8.appspot.com",
  messagingSenderId: "202879861725",
  appId: "1:202879861725:web:7d149a78dd61d84ecbec34",
  measurementId: "G-CJP1Y275RM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
