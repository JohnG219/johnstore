
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ9wXjMvZrMBW6lWiKE61oGMnpPaojBPU",
  authDomain: "mobileapp-e8571.firebaseapp.com",
  projectId: "mobileapp-e8571",
  storageBucket: "mobileapp-e8571.appspot.com",
  messagingSenderId: "936115027379",
  appId: "1:936115027379:web:a12e9b370627d78fea1fc6"
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};