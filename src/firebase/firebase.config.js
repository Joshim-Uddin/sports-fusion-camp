// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdC4ULyFV_Yv3hE5KYZxLJmsFAZ18-6nk",
  authDomain: "sports-fushion-camp-a87dd.firebaseapp.com",
  projectId: "sports-fushion-camp-a87dd",
  storageBucket: "sports-fushion-camp-a87dd.appspot.com",
  messagingSenderId: "711748323184",
  appId: "1:711748323184:web:3f1f2779d8df00aa66b1b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;