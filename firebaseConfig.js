// firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCYJeEfMxCV8P93RcMVqPX909D11o9TVn4",
  authDomain: "naunidh-astroliv3.firebaseapp.com",
  projectId: "naunidh-astroliv3",
  storageBucket: "naunidh-astroliv3.appspot.com",
  messagingSenderId: "757689578229",
  appId: "1:757689578229:android:28d1fdb50bdce550444bbc"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase initialized");
}

// Export the auth instance for use in other components
const auth = firebase.auth();
export { auth };
