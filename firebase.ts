import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsMW2VTe9bLq3Rkhcp9OyCyRYrADEDH5A",
  authDomain: "saas-translator-app-2fab8.firebaseapp.com",
  projectId: "saas-translator-app-2fab8",
  storageBucket: "saas-translator-app-2fab8.appspot.com",
  messagingSenderId: "754448651362",
  appId: "1:754448651362:web:5611e525aab4122149ad3b",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
