// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNr7oiIk72F3-GGcLGBkJh8QAq28XVPgs",
  authDomain: "auth-02-b5598.firebaseapp.com",
  projectId: "auth-02-b5598",
  storageBucket: "auth-02-b5598.appspot.com",
  messagingSenderId: "645370736015",
  appId: "1:645370736015:web:117b33387a7f1c6585affa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app