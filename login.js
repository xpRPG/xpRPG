// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
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
      window.location.href = "index.html"; // Redirect to dashboard
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
      window.location.href = "index.html"; // Redirect to dashboard
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
      window.location.href = "index.html"; // Redirect to dashboard
    })
    .catch((error) => {
      console.error('Error signing in with Google:', error);
    });
});
