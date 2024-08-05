// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZseNZmomSdKzeSykrSIRafzoop9UKe48",
  authDomain: "xprpg-e24f1.firebaseapp.com",
  databaseURL: "https://xprpg-e24f1-default-rtdb.asia-southeast1.firebasedatabase.app", // Ensure this URL is correct
  projectId: "xprpg-e24f1",
  storageBucket: "xprpg-e24f1.appspot.com",
  messagingSenderId: "572521034105",
  appId: "1:572521034105:web:0aa0db131973cb760affa8",
  measurementId: "G-7M9XBRQC62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get buttons
const signUpButton = document.getElementById('sign-up');
const signInButton = document.getElementById('sign-in');
const signInGoogleButton = document.getElementById('sign-in-google');

// Sign up with email and password
signUpButton.addEventListener('click', async () => {
  const email = prompt("Enter your email:");
  const password = prompt("Enter your password:");

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
});

// Sign in with email and password
signInButton.addEventListener('click', async () => {
  const email = prompt("Enter your email:");
  const password = prompt("Enter your password:");

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
  } catch (error) {
    console.error("Error signing in:", error.message);
  }
});

// Sign in with Google
signInGoogleButton.addEventListener('click', async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User signed in with Google:", result.user);
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
  }
});
