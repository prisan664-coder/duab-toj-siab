
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
    getDatabase,
    ref,
    push,
    set,
    onValue,
    update,
    remove,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// ========== CONFIG - Firebase ของคุณ ===========
const firebaseConfig = {
    apiKey: "AIzaSyDCE_qqKanTTdVXYwBMBIfPu0M0Xy-kbX8",
    authDomain: "hujai-web.firebaseapp.com",
    databaseURL: "https://hujai-web-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "hujai-web",
    storageBucket: "hujai-web.firebasestorage.app",
    messagingSenderId: "827968973337",
    appId: "1:827968973337:web:ae6ef630b59cf429575888",
    measurementId: "G-XCF3TBNG8L"
};

const app = initializeApp(firebaseConfig);
try { getAnalytics(app); } catch (e) { /* analytics may fail in some env */ }

const auth = getAuth(app);
const db = getDatabase(app);

// ADMIN: set allowed admin emails here (change before deployment)
export const ADMIN_EMAILS = ["admin@hukhujai.com"]; // <- เปลี่ยนเป็นอีเมลแอดมินของคุณ

export {
    app,
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    ref,
    push,
    set,
    onValue,
    update,
    remove
};
