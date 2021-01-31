import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDFpsT2kdsdHknxsHdfDot5xg4-x5dUMdI",
    authDomain: "sos-app-ef081.firebaseapp.com",
    projectId: "sos-app-ef081",
    storageBucket: "sos-app-ef081.appspot.com",
    messagingSenderId: "349018547259",
    appId: "1:349018547259:web:349010af3ae90406a4681e",
    measurementId: "G-JNQJ71W0XY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 export default firebase.firestore()