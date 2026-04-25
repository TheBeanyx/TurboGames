import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCl7wsIHzdHcmnJSMZZCieacZROxlJnxvI",
  authDomain: "creacredit-szuper1212856.firebaseapp.com",
  projectId: "creacredit-szuper1212856",
  storageBucket: "creacredit-szuper1212856.firebasestorage.app",
  messagingSenderId: "480853534754",
  appId: "1:480853534754:web:2a903e866333a8e759427b",
  measurementId: "G-Z67C8VN01S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup };
