import firebase from 'firebase/app'
// eslint-disable-next-line
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDVjO0IHKLB6dRVE6qc8gRvEHMX5tJHPbc",
    authDomain: "geolocation-215f3.firebaseapp.com",
    databaseURL: "https://geolocation-215f3.firebaseio.com",
    projectId: "geolocation-215f3",
    storageBucket: "",
    messagingSenderId: "683368312179",
    appId: "1:683368312179:web:c52c5375dea4c88a5a6906",
    measurementId: "G-XNNQJVNEQD"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()