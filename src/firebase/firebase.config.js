// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOq8kJIxG7IDi9TkcFf5l9l4joHeAyhF4",
    authDomain: "wizard-platform-client.firebaseapp.com",
    projectId: "wizard-platform-client",
    storageBucket: "wizard-platform-client.appspot.com",
    messagingSenderId: "793840152764",
    appId: "1:793840152764:web:f246727f3baca22d5ee0b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;