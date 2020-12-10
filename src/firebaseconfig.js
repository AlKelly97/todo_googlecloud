import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyBu8EhO4jHcAY9YMpOrnEyiGGpBI03Yebo",
    authDomain: "test-tech-todo.firebaseapp.com",
    projectId: "test-tech-todo",
    storageBucket: "test-tech-todo.appspot.com",
    messagingSenderId: "148120418715",
    appId: "1:148120418715:web:acfd579121b3552b5f893e",
    measurementId: "G-K57G7WC96K"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();

  export { db };