import firebase from 'firebase/app'
//import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA8eGq1GuD0okhKzaguSG1XXn5W5GWBhWg",
    authDomain: "fir-app-17eba.firebaseapp.com",
    projectId: "fir-app-17eba",
    storageBucket: "fir-app-17eba.appspot.com",
    messagingSenderId: "119607088183",
    appId: "1:119607088183:web:5dfdb3b508a926f4111bb2"
  };

  export default firebase.initializeApp(firebaseConfig)