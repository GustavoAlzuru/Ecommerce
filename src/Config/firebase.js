import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = { 
    apiKey: "AIzaSyAmDEeAv2ws9VBkEsG23V2fRp_W2lO00sc",
    authDomain: "mercadolibre-app-a577c.firebaseapp.com",
    projectId: "mercadolibre-app-a577c",
    storageBucket: "mercadolibre-app-a577c.appspot.com",
    messagingSenderId: "699167421244",
    appId: "1:699167421244:web:06a803e59c1726bc04e439"
};
firebase.initializeApp(firebaseConfig)
firebase.auth = firebase.auth()

export default firebase  