import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDforLnOmPmO2pcKxqUe-fhVf-KTV-250",
  authDomain: "react-master-iamsunny619.firebaseapp.com",
  projectId: "react-master-iamsunny619",
  storageBucket: "react-master-iamsunny619.appspot.com",
  messagingSenderId: "684252040088",
  appId: "1:684252040088:web:e55e5372d80481eb0539ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
