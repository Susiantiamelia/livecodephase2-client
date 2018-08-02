import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDrXn8rrF2n0MlElkurmx-uSVDsgXsuqe8",
    authDomain: "live-code-phase2.firebaseapp.com",
    databaseURL: "https://live-code-phase2.firebaseio.com",
    projectId: "live-code-phase2",
    storageBucket: "live-code-phase2.appspot.com",
    messagingSenderId: "713859960557"
  };
  firebase.initializeApp(config);

  export const storageRef = firebase.storage()
  