// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyApinDWE99fh0reC1CpuIXuinIMYoDFFgg",
  authDomain: "fridge-manager-952bd.firebaseapp.com",
  projectId: "fridge-manager-952bd",
  storageBucket: "fridge-manager-952bd.firebasestorage.app",
  messagingSenderId: "812527576406",
  appId: "1:812527576406:web:6278d5bfd4932b4e6ca2f7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
