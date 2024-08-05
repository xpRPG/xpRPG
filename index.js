
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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
const auth = getAuth();

// Sign Up
document.getElementById('sign-up-button').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('User signed up:', userCredential.user);
      window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => {
      console.error('Error signing up:', error);
    });
});

// Sign In
document.getElementById('sign-in-button').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('User signed in:', userCredential.user);
      window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => {
      console.error('Error signing in:', error);
    });
});

// Google Sign In
document.getElementById('google-sign-in-button').addEventListener('click', () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('User signed in with Google:', result.user);
      window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => {
      console.error('Error signing in with Google:', error);
    });
});

// Check for signed-in user and redirect accordingly
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, redirect to dashboard
    window.location.href = "dashboard.html";
  }
});
