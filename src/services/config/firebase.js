import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmMeb3swnzw7E7ev9G2d2XEJcUK4nD9-o",
    authDomain: "coderhouse-react-js-af793.firebaseapp.com",
    projectId: "coderhouse-react-js-af793",
    storageBucket: "coderhouse-react-js-af793.firebasestorage.app",
    messagingSenderId: "604711270303",
    appId: "1:604711270303:web:012c27d1c03348f2466faa",
    measurementId: "G-Q6KW8BTDTN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();