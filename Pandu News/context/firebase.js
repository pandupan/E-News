// // Import the functions you need from the SDKs you need
// import { firebase } from "@react-native-firebase/auth";
// import { initializeApp, getApps } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // <https://firebase.google.com/docs/web/setup#available-libraries>

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBfcFXJwv2ncKF-Ez6uHMSZR_upcCUuxaw",
//     authDomain: "newsnativeapp.firebaseapp.com",
//     projectId: "newsnativeapp",
//     storageBucket: "newsnativeapp.appspot.com",
//     messagingSenderId: "168864470630",
//     appId: "1:168864470630:web:f99ce805de6d368f89ffa7"
//   };

// // Initialize Firebase
// // Doing checking to prevent app crash when hot reloading
// if (!getApps().length) {
// 	initializeApp(firebaseConfig);
// }



import {  initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfcFXJwv2ncKF-Ez6uHMSZR_upcCUuxaw",
  authDomain: "newsnativeapp.firebaseapp.com",
  projectId: "newsnativeapp",
  storageBucket: "newsnativeapp.appspot.com",
  messagingSenderId: "168864470630",
  appId: "1:168864470630:web:f99ce805de6d368f89ffa7"
};


const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp;

