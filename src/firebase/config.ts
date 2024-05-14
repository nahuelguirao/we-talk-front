import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNiWAu0q6qXeHn2Rp4upRs53agx4DV4Wk",
  authDomain: "wetalk-a9806.firebaseapp.com",
  projectId: "wetalk-a9806",
  storageBucket: "wetalk-a9806.appspot.com",
  messagingSenderId: "660390466748",
  appId: "1:660390466748:web:63abf0b2ce54542d226cb9",
  measurementId: "G-VEPFGW8QEY",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
