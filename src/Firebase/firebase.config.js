// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLRolDxpwnGwwisoiWYIA1jXkg6OKgplw",
    authDomain: "coffee-server-4ba89.firebaseapp.com",
    projectId: "coffee-server-4ba89",
    storageBucket: "coffee-server-4ba89.firebasestorage.app",
    messagingSenderId: "869800117137",
    appId: "1:869800117137:web:bb65f9707be29ee500d030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);