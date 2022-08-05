// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB-_DuuzSJJf5xt9qZyMAaUaii__5d8FOU',
  authDomain: 'netflix-clone-c81eb.firebaseapp.com',
  projectId: 'netflix-clone-c81eb',
  storageBucket: 'netflix-clone-c81eb.appspot.com',
  messagingSenderId: '465615004121',
  appId: '1:465615004121:web:f6ec613eb2be35eb4279c8',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
