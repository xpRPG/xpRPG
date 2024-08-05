// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZseNZmomSdKzeSykrSIRafzoop9UKe48",
  authDomain: "xprpg-e24f1.firebaseapp.com",
  databaseURL: "https://xprpg-e24f1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "xprpg-e24f1",
  storageBucket: "xprpg-e24f1.appspot.com",
  messagingSenderId: "572521034105",
  appId: "1:572521034105:web:0aa0db131973cb760affa8",
  measurementId: "G-7M9XBRQC62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Get elements
const signUpButton = document.getElementById('sign-up');
const signInButton = document.getElementById('sign-in');
const signInGoogleButton = document.getElementById('sign-in-google');

// Sign up with email and password
signUpButton.addEventListener('click', () => {
  const email = prompt("Enter your email:");
  const password = prompt("Enter your password:");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      console.log("User signed up:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error signing up:", error);
    });
});

// Sign in with email and password
signInButton.addEventListener('click', () => {
  const email = prompt("Enter your email:");
  const password = prompt("Enter your password:");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log("User signed in:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error signing in:", error);
    });
});

// Sign in with Google
signInGoogleButton.addEventListener('click', () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // Signed in
      console.log("User signed in with Google:", result.user);
    })
    .catch((error) => {
      console.error("Error signing in with Google:", error);
    });
});
