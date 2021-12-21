import { initializeApp }  from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseApp = initializeApp( {
        apiKey: "AIzaSyBuNerQfe-amX_eREbdipwMMZ-pSifwX5s",
        authDomain: "giveaway-da482.firebaseapp.com",
        projectId: "giveaway-da482",
        storageBucket: "giveaway-da482.appspot.com",
        messagingSenderId: "530503900672",
        appId: "1:530503900672:web:94b499f78b069cee9d82e5"
});

const auth = getAuth(firebaseApp)
const db = getFirestore();
export {auth, db};