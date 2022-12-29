// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export interface Config {
  apiKey: string;
  authDomain: string;
  storageBucket: string;
  projectId: string;
  messagingSenderId: string;
  appId: string;
}

// Your web app's Firebase configuration
const firebaseConfig: Config = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
