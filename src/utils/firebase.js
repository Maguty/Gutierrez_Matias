
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "proyecto-react-a11a9.firebaseapp.com",
    projectId: "proyecto-react-a11a9",
    storageBucket: "proyecto-react-a11a9.appspot.com",
    messagingSenderId: "249447913719",
    appId: "1:249447913719:web:92154dabbd61e5768e1bf2",
    measurementId: "G-4MDQHJ1DM5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);