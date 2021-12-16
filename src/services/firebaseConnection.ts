import firebase from 'firebase/app'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBY2f-7a12db5R7vCXsYbq5VkYPssw-Ctk",
    authDomain: "board-app-a6061.firebaseapp.com",
    projectId: "board-app-a6061",
    storageBucket: "board-app-a6061.appspot.com",
    messagingSenderId: "147749941363",
    appId: "1:147749941363:web:63612a092e3df784ce7a06",
    measurementId: "G-42H0SPMTWE"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase