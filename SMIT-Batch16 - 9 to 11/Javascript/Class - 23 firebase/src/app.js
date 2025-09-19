// app.js

import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js';

// Firebase config — must match what's in the HTML
const firebaseConfig = {
    apiKey: "AIzaSyB2daVoVNTWRsV0BhNHGdpiLLpSCyIGfFw",
    authDomain: "smit-0005.firebaseapp.com",
    projectId: "smit-0005",
    storageBucket: "smit-0005.firebasestorage.app",
    messagingSenderId: "341008973799",
    appId: "1:341008973799:web:7085e465a4bcde607f0742",
    measurementId: "G-TEN9ZB6538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

window.register = function () {
    createUserWithEmailAndPassword(auth, emailEl.value, passwordEl.value)
};
