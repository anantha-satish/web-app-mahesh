// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzfxM0AU20qthZSeEBJEeVw8C79lQKkY0",
    authDomain: "rydlme.firebaseapp.com",
    databaseURL: "https://rydlme-default-rtdb.firebaseio.com",
    projectId: "rydlme",
    storageBucket: "rydlme.firebasestorage.app",
    messagingSenderId: "34798878777",
    appId: "1:34798878777:web:5bcccc04f5568ba23ccde8",
    measurementId: "G-HBLSPGCWZN"
};

// Initialize Firebase
const fbInitialize = initializeApp(firebaseConfig);
export default fbInitialize;