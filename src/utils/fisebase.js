import firebase from 'firebase'

  const firebaseConfig = {
    apiKey: "AIzaSyAOmRRtfFiqbGLzV7jIouIOpXn4184OoMU",
    authDomain: "react-crud-8426e.firebaseapp.com",
    projectId: "react-crud-8426e",
    storageBucket: "react-crud-8426e.appspot.com",
    messagingSenderId: "1035541961345",
    appId: "1:1035541961345:web:74339a16ef04a9bc070b80",
    measurementId: "G-XTGRJ2RCMD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;