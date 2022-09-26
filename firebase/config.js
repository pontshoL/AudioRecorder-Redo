// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAvjbz-AzPVzjj23qzIC21QVAZZKlTSJHs",
  authDomain: "audiorecorderapp-1f9b9.firebaseapp.com",
  projectId: "audiorecorderapp-1f9b9",
  storageBucket: "audiorecorderapp-1f9b9.appspot.com",
  messagingSenderId: "448741791656",
  appId: "1:448741791656:web:6ce9d7eeb17383aec32f9d",
  measurementId: "G-X732P1188V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);
export {auth,db};
