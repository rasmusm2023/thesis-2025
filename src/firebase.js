import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  // TODO: Replace with your Firebase config object
  apiKey: "AIzaSyC8xad2aNBZPQBjh5AqXV5djrtR79ssvD8",
  authDomain: "thesis-2025-37b48.firebaseapp.com",
  projectId: "thesis-2025-37b48",
  storageBucket: "thesis-2025-37b48.firebasestorage.app",
  messagingSenderId: "225175780752",
  appId: "1:225175780752:web:aee919eade870375a74715",
  measurementId: "G-1Z28YS61J7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
