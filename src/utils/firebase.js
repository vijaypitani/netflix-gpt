// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO04Y-w1n_i7Xt_xMltWbLUa5ykmnfpm8",
  authDomain: "netflixgpt-14e7b.firebaseapp.com",
  projectId: "netflixgpt-14e7b",
  storageBucket: "netflixgpt-14e7b.firebasestorage.app",
  messagingSenderId: "429471606026",
  appId: "1:429471606026:web:64784a53bf9d3627f646f3",
  measurementId: "G-XYTKTS2XJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();