// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-pRfanUpkL3WtJWDCn5o96EKj-9HIckk",
  authDomain: "cyber-auth99.firebaseapp.com",
  projectId: "cyber-auth99",
  storageBucket: "cyber-auth99.firebasestorage.app",
  messagingSenderId: "550598992559",
  appId: "1:550598992559:web:a7ca400bd4a57fb05a6a5a",
  measurementId: "G-XCNWEJ02PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig ; 