// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PID,
  storageBucket: import.meta.env.VITE_APP_SB,
  messagingSenderId: import.meta.env.VITE_APP_SID,
  appId: import.meta.env.VITE_APP_APPID,
  measurementId: import.meta.env.VITE_APP_MID,
};

if (import.meta.env.VITE_APP_APIKEY) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}
