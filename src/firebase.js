// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd7dnp5ZA19GhgdVxUvfQ6V9ScfwegzrY",
  authDomain: "authentication-c893b.firebaseapp.com",
  projectId: "authentication-c893b",
  storageBucket: "authentication-c893b.appspot.com",
  messagingSenderId: "457991976568",
  appId: "1:457991976568:web:fe82b6bd3d586020ab9f8d",
  measurementId: "G-V5P49R5L92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export{app,auth};