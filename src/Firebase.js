import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoGjSAZ_LR2J6qZHNC7qSdeT3WK1mKSVw",
  authDomain: "my-portfolio-backend-45d13.firebaseapp.com",
  projectId: "my-portfolio-backend-45d13",
  storageBucket: "my-portfolio-backend-45d13.appspot.com",
  messagingSenderId: "270282397291",
  appId: "1:270282397291:web:e928b73d7fe1b0a70b832e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage=getStorage(app)
export default app;
