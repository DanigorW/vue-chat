  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD8AeRhB9GFy1YuyFaF5oTcBtcD-Xlne1M",
    authDomain: "vue-chat-da811.firebaseapp.com",
    databaseURL: "https://vue-chat-da811.firebaseio.com",
    projectId: "vue-chat-da811",
    storageBucket: "vue-chat-da811.appspot.com",
    messagingSenderId: "662413807374",
    appId: "1:662413807374:web:2a4368d61823b491dc915f"
  };
  // Initialize Firebase
 const fireBaseApp = firebase.initializeApp(firebaseConfig);

 export default fireBaseApp.firestore()