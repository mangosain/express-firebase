// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvaaqroK9DayMosr36jLb-v8W-55RG66c",
  authDomain: "node-express-trial-af8cb.firebaseapp.com",
  projectId: "node-express-trial-af8cb",
  storageBucket: "node-express-trial-af8cb.appspot.com",
  messagingSenderId: "481677669404",
  appId: "1:481677669404:web:15a0403178f6b5180e5bd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = { db };