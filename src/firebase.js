// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8llTBit7DhPF6dBqPQQlG_OHJF65etl0",
  authDomain: "group-incubator-project.firebaseapp.com",
  projectId: "group-incubator-project",
  storageBucket: "group-incubator-project.appspot.com",
  messagingSenderId: "1017172657419",
  appId: "1:1017172657419:web:ccd12905394d5ff2af0e0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);


