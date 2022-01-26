import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD4ktadBRCetYGatZMY9Hikm22dNPIYzoQ",
  authDomain: "react-login-bcc91.firebaseapp.com",
  projectId: "react-login-bcc91",
  storageBucket: "react-login-bcc91.appspot.com",
  messagingSenderId: "115683381775",
  appId: "1:115683381775:web:2556217c7ea5883bc3c97a",
  measurementId: "G-MKQ3BMZYBH"
});

export default firebaseConfig;