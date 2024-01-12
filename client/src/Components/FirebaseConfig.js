import { initializeApp } from 'firebase/app';
import { auth } from 'firebase/auth';
// Initialize Firebase

const FirebaseConfig = { 
    apiKey: "AIzaSyCLOQaEFgMnqPZRy6pyclol6uuHEMcLaNE",
    authDomain: "task-management-tool-46158.firebaseapp.com",
    projectId: "task-management-tool-46158",
    storageBucket: "task-management-tool-46158.appspot.com",
    messagingSenderId: "197878805268",
    appId: "1:197878805268:web:a470c1f67d366180c90801",
    measurementId: "G-P838XRWXV6"
 };
const app = initializeApp(FirebaseConfig);
const authInstance = auth(app);
