// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4_YEwbEqUISubT_MirFg106oPcHCk0sg",
  authDomain: "nolanaiclone-6fe16.firebaseapp.com",
  projectId: "nolanaiclone-6fe16",
  storageBucket: "nolanaiclone-6fe16.appspot.com",
  messagingSenderId: "566487704965",
  appId: "1:566487704965:web:7e328103935e57f1b7d0ec",
  measurementId: "G-14G7VC0DDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);