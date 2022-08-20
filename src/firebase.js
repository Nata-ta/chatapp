import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDEaOmiSblKebj_n4QlxKajItEqn-VqGUg",
    authDomain: "reenbit-chat-83569.firebaseapp.com",
    projectId: "reenbit-chat-83569",
    storageBucket: "reenbit-chat-83569.appspot.com",
    messagingSenderId: "158947727611",
    appId: "1:158947727611:web:9327887e9843458700f85e"
}).auth();