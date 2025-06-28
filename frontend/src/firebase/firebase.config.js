// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgXqAdyNXNL1eLQQHhMhpJDSHxnjxeHc4",
  authDomain: "book-store-a5cf0.firebaseapp.com",
  projectId: "book-store-a5cf0",
  storageBucket: "book-store-a5cf0.firebasestorage.app",
  messagingSenderId: "857194175040",
  appId: "1:857194175040:web:230daa92311f8caea0dda5",
  measurementId: "G-MFJZNPG41T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
