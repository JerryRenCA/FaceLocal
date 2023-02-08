import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_WEB_FRONT_END,
  authDomain: "face-local-web-front-end.firebaseapp.com",
  projectId: "face-local-web-front-end",
  storageBucket: "face-local-web-front-end.appspot.com",
  messagingSenderId: "959087378986",
  appId: "1:959087378986:web:0ccff23d77d554b3d4f953",
  measurementId: "G-YKCRBQQJKL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore(app);