import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDemX_yG-2ZDJCwvpcY-H2MaovvOY1TiXg",
    authDomain: "innovaciondocente-utpl.firebaseapp.com",
    databaseURL: "https://innovaciondocente-utpl.firebaseio.com",
    projectId: "innovaciondocente-utpl",
    storageBucket: "innovaciondocente-utpl.appspot.com",
    messagingSenderId: "1011505668181"
  })
}

firebase.firestore().settings({
  timestampsInSnapshots: true
})

firebase.firestore().enablePersistence()
  .then(function () {
    // Initialize Cloud Firestore through firebase
    var db = firebase.firestore();
  })
  .catch(function (err) {
    if (err.code == 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });

const AFirestore = firebase.firestore();

export {
  AFirestore
}
