// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {

  apiKey: "AIzaSyDPANBlJK1rWd1JWVu1UjYCZLYNe69KLK8",

  authDomain: "damian-42e65.firebaseapp.com",

  projectId: "damian-42e65",

  storageBucket: "damian-42e65.appspot.com",

  messagingSenderId: "202279693474",

  appId: "1:202279693474:web:ae274e7425a7866e52bbfb",

  measurementId: "G-BXTQGZD7HT"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
/* export const firebaseDataBase = getDatabase(app);

export const analytics = getAnalytics(app); */