import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC1sG7l20jEpw72Xx4PAi8KtigyCo1kCt8",
  authDomain: "tinder-clone-c95b2.firebaseapp.com",
  databaseURL: "https://tinder-clone-c95b2.firebaseio.com",
  projectId: "tinder-clone-c95b2",
  storageBucket: "tinder-clone-c95b2.appspot.com",
  messagingSenderId: "1048349763551",
  appId: "1:1048349763551:web:08bc8693dd48ec4e73466a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
