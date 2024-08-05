// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

// Handle user authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, display the dashboard and load data
    document.getElementById('app').style.display = 'block';
    document.getElementById('user-info').innerHTML = `<p>Welcome, ${user.displayName || user.email}</p>`;
    loadUserData(user.uid);
  } else {
    // No user is signed in, redirect to login page
    window.location.href = "login.html";
  }
});

// Load user data from Firebase
function loadUserData(uid) {
  const userRef = ref(database, 'users/' + uid);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    displayUserData(data);
  });
}

// Display user data in the UI
function displayUserData(data) {
  document.getElementById('main-quests').innerHTML = data ? JSON.stringify(data.mainQuests) : 'No main quests available.';
  document.getElementById('side-quests').innerHTML = data ? JSON.stringify(data.sideQuests) : 'No side quests available.';
  document.getElementById('daily-quests').innerHTML = data ? JSON.stringify(data.dailyQuests) : 'No daily quests available.';
}

// Logout functionality
document.getElementById('logout-button').addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log("User signed out");
    window.location.href = "login.html"; // Redirect to login page after logout
  }).catch((error) => {
    console.error("Error signing out:", error);
  });
});
