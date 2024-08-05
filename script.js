// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

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
const auth = getAuth();
const database = getDatabase(app);

// Handle user authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, display user info and load data
    document.getElementById('user-info').innerHTML = `<p>Welcome, ${user.displayName || user.email}</p>`;
    loadUserData(user.uid);
  } else {
    // No user is signed in, show login message or form
    document.getElementById('user-info').innerHTML = `<p>Please sign in to view your quests.</p>`;
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
  }).catch((error) => {
    console.error("Error signing out:", error);
  });
});
