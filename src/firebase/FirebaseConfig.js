// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQxXEMmpA-KpdnWmb-uxx5EVwJAGiT4hw",
    authDomain: "chatroom-6dd4b.firebaseapp.com",
    projectId: "chatroom-6dd4b",
    storageBucket: "chatroom-6dd4b.appspot.com",
    messagingSenderId: "305148287322",
    appId: "1:305148287322:web:ac61475e112d5824297b63",
    measurementId: "G-73TKL0S7EG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export const db = getFirestore(app);