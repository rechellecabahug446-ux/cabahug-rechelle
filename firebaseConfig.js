// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAED2oyuoh-EkKAf7BhZg010fWVo6iLpO8",
  authDomain: "mobileapp-tracker-cabahug.firebaseapp.com",
  projectId: "mobileapp-tracker-cabahug",
  storageBucket: "mobileapp-tracker-cabahug.firebasestorage.app",
  messagingSenderId: "673779954534",
  appId: "1:673779954534:web:51dc7b6c3639eb44064ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);