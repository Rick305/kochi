
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCudSeOoCwbKqGu00nx4EHGRgDcttkyKfg",
    //process.env.REACT_APP_API_KEY,
    authDomain: "kochi-kochbuch.firebaseapp.com",
    projectId: "kochi-kochbuch",
    storageBucket: "kochi-kochbuch.appspot.com",
    messagingSenderId: "138908700354",
    appId: "1:138908700354:web:f145526ed1c380fe48f55b"
  };


  firebase.initializeApp(firebaseConfig);

  

  export default firebase;