import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNLtIkHHFFDgVt67nTMWYp80qTYBWiwV4",
  authDomain: "inkjet-6309d.firebaseapp.com",
  projectId: "inkjet-6309d",
  storageBucket: "inkjet-6309d.firebasestorage.app",
  messagingSenderId: "100473314526",
  appId: "1:100473314526:web:faadd79f9d2749da02364f",
  measurementId: "G-0Z843FFS40"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app)

const storage = getStorage(app);

export {db, storage};