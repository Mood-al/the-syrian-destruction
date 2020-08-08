import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyBjYHFSwwjXYDDPBg9wGT2MZaZYJwm1qbc",
  authDomain: "syrian-destruction.firebaseapp.com",
  databaseURL: "https://syrian-destruction.firebaseio.com",
  projectId: "syrian-destruction",
  storageBucket: "syrian-destruction.appspot.com",
  messagingSenderId: "341642738394",
  appId: "1:341642738394:web:67978a3e9082e8a27683e3",
  measurementId: "G-5QQFJ7ZH3K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, storage, timeStamp };
