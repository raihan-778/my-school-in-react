// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeK3LxK6gq3Zgj1PQzSJ1mU0G-6PSJ71U",
  authDomain: "my-school-firebase-auth.firebaseapp.com",
  projectId: "my-school-firebase-auth",
  storageBucket: "my-school-firebase-auth.appspot.com",
  messagingSenderId: "566826870258",
  appId: "1:566826870258:web:ae10a4bc29cd5b7c3eb76b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
