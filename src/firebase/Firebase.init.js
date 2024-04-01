// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvtgjiDW1Vh7kyvCU8qmYqYdVeA_mYnGI",
  authDomain: "simple-firebase-ee113.firebaseapp.com",
  projectId: "simple-firebase-ee113",
  storageBucket: "simple-firebase-ee113.appspot.com",
  messagingSenderId: "890011885182",
  appId: "1:890011885182:web:7ba636131239d1c78d422f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;