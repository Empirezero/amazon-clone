import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRRtfF5YpPin3JoJWlz4oijSTSsEuhX1k",
  authDomain: "clone-5274a.firebaseapp.com",
  projectId: "clone-5274a",
  storageBucket: "clone-5274a.appspot.com",
  messagingSenderId: "969988948864",
  appId: "1:969988948864:web:82fe4be11731b2c5887765",
  measurementId: "G-MZENKN8ZG5",
};
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
