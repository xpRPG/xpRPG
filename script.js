// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Example: User Authentication
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('User is signed in:', user);
    // Fetch and display user data
  } else {
    console.log('No user signed in');
    // Show login form
  }
});

// Example: Fetching data from database
function fetchData() {
  db.ref('users/USER_ID').once('value').then(snapshot => {
    const data = snapshot.val();
    console.log('User data:', data);
    // Update UI with user data
  });
}
