import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC2uBvfIaffS--pHzt9Pgf_gwBg8EqA4-8",
    authDomain: "burger-queen-c709c.firebaseapp.com",
    databaseURL: "https://burger-queen-c709c.firebaseio.com",
    projectId: "burger-queen-c709c",
    storageBucket: "",
    messagingSenderId: "252062502278",
    appId: "1:252062502278:web:c15e2d4c7b39ee8bb4b007"
};

firebase.initializeApp(config);

export default firebase;