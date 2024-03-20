import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBhlmK8_2RC_O1Z2D8Aachrv4kRe_H6RHQ",
    authDomain: "portfolio-contact-from.firebaseapp.com",
    projectId: "portfolio-contact-from",
    storageBucket: "portfolio-contact-from.appspot.com",
    messagingSenderId: "819359560589",
    appId: "1:819359560589:web:12be579237c6d4831943c4",
    measurementId: "G-BRMVMBW1VX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);