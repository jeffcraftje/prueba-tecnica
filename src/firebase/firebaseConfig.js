import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBCalbkSRMWSkCKSVTfy9tFMX3Ocg0cTaE",
    authDomain: "prueba-tecnica-59b1f.firebaseapp.com",
    projectId: "prueba-tecnica-59b1f",
    storageBucket: "prueba-tecnica-59b1f.appspot.com",
    messagingSenderId: "227535206332",
    appId: "1:227535206332:web:553c5526d48da0803f5db9"
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const google = new GoogleAuthProvider();
const db = getFirestore();
const analytics = getAnalytics(app);
const provider = new FacebookAuthProvider();

export {
    app,
    google,
    db,
    analytics,
    authentication,
    provider
}