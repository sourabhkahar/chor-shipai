// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEERLq5BaK4CKKkzCCVndZ2JaCOmfLajE",
  authDomain: "chor-shipai.firebaseapp.com",
  projectId: "chor-shipai",
  storageBucket: "chor-shipai.appspot.com",
  messagingSenderId: "845931104555",
  appId: "1:845931104555:web:5ce5c210d90ef97a3e1d6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const auth = getAuth(app);

export default auth