import firebase from 'firebase';
require('@firebase/firestore');

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDxQwJ9bhZvfckNj6CxjFDIvllm09FRHv0",
    authDomain: "storyh-55c66.firebaseapp.com",
    projectId: "storyh-55c66",
    storageBucket: "storyh-55c66.appspot.com",
    messagingSenderId: "776111474355",
    appId: "1:776111474355:web:2091b29f52aa04538092c6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();