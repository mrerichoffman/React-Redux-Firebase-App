import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCuXNOJu4FWTaXe8wQUgI6osDcIFTGDNLY",
  authDomain: "eric-project-test.firebaseapp.com",
  databaseURL: "https://eric-project-test.firebaseio.com",
  projectId: "eric-project-test",
  storageBucket: "eric-project-test.appspot.com",
  messagingSenderId: "895714659341"
};
firebase.initializeApp(config);
firebase.firestore().enablePersistence({ experimentalTabSynchronization: true });

export default firebase;