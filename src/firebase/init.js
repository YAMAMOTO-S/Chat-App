import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDwChynpTqZEIY1Kl6JOrNNMeORezYkGVU",
  authDomain: "chat-app-cc949.firebaseapp.com",
  databaseURL: "https://chat-app-cc949.firebaseio.com",
  projectId: "chat-app-cc949",
  storageBucket: "chat-app-cc949.appspot.com",
  messagingSenderId: "750376912359",
  appId: "1:750376912359:web:88bfa1a60d5913d2a2a942",
  measurementId: "G-TH25V2NGFG"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()