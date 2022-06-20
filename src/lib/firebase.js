// firebase version: 9.8.3
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyClon9mREjjdFJOn5YSJKYTgfoOkpfN2r8",

  authDomain: "invoice-app-66d49.firebaseapp.com",

  projectId: "invoice-app-66d49",

  storageBucket: "invoice-app-66d49.appspot.com",

  messagingSenderId: "495979506880",

  appId: "1:495979506880:web:814e6dfc5817bcad40d125",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const users = collection(db, "Habib");
