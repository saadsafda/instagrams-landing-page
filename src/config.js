import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAUT_42pANzP3X1EKkUZzJYC9airBivVMw",
  authDomain: "instagrams-266ba.firebaseapp.com",
  projectId: "instagrams-266ba",
  storageBucket: "instagrams-266ba.appspot.com",
  messagingSenderId: "645802042706",
  appId: "1:645802042706:web:1cbb9287dd4d123a96c68b",
  measurementId: "G-C67PEZ932S"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
