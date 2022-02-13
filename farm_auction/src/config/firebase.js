import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCNpy4q8RS0V93xzjDwDh4bKE02CbfuxSY",
    authDomain: "farm-auction.firebaseapp.com",
    projectId: "farm-auction",
    storageBucket: "farm-auction.appspot.com",
    messagingSenderId: "431983437092",
    appId: "1:431983437092:web:db7e55293fa5c9abb9bfb1"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth(); 