import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAQjj7vbd__mRxygZxXFsrBvzJV-a7kPtE",
  authDomain: "telsa-4702b.firebaseapp.com",
  projectId: "telsa-4702b",
  storageBucket: "telsa-4702b.appspot.com",
  messagingSenderId: "866747417076",
  appId: "1:866747417076:web:810d97d6f2d1f45c3db9a1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
export { auth };
