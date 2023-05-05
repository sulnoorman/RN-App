// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCejewMZb0aD46M7GFXKv4tOyq-s1FTzYU",
//   authDomain: "fooddelivery-native-2be7e.firebaseapp.com",
//   projectId: "fooddelivery-native-2be7e",
//   storageBucket: "fooddelivery-native-2be7e.appspot.com",
//   messagingSenderId: "459726824167",
//   appId: "1:459726824167:web:857db6a99286c2a57b3842",
//   measurementId: "G-2KQJ39Q5NW"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBk9cqMJMgNd5TgUaH7K50AcuP4qXKJwT4",
  authDomain: "project-2-dd011.firebaseapp.com",
  projectId: "project-2-dd011",
  storageBucket: "project-2-dd011.appspot.com",
  messagingSenderId: "333570345679",
  appId: "1:333570345679:web:02b05400ee651109d005ba",
  measurementId: "G-JSH04QFXY7"
};

// Initialize Firebase
export const FIREBASE = initializeApp(firebaseConfig)
export const FIREBASE_FS = getFirestore(FIREBASE)