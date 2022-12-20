import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOTv6Va8YhR-WfyFfD6no2syqo47nebXM",
  authDomain: "foodorderapp-6d6b0.firebaseapp.com",
  projectId: "foodorderapp-6d6b0",
  storageBucket: "foodorderapp-6d6b0.appspot.com",
  messagingSenderId: "308977286381",
  appId: "1:308977286381:web:93ada80a03e1d4258d60e4",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
