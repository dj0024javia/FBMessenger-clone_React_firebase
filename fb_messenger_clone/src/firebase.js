

import firebase from "firebase"

const firebaseapp = firebase.initializeApp({
apiKey: "AIzaSyAYtDZi7tgs5cvIO6xVysf_5FKddIqLn5M",
authDomain: "fb-messenger-clone-afd4b.firebaseapp.com",
databaseURL: "https://fb-messenger-clone-afd4b.firebaseio.com",
projectId: "fb-messenger-clone-afd4b",
storageBucket: "fb-messenger-clone-afd4b.appspot.com",
messagingSenderId: "213146619361",
appId: "1:213146619361:web:4cbdffadde662d291256a0",
measurementId: "G-7W1E2DSQY2"
});

const db = firebaseapp.firestore()

export {db}