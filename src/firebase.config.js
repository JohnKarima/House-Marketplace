import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_JJ8jBQnQgxyWd6xxtlEoR6yEVsjzQYo',
  authDomain: 'house-marketplace-app-a8e48.firebaseapp.com',
  projectId: 'house-marketplace-app-a8e48',
  storageBucket: 'house-marketplace-app-a8e48.appspot.com',
  messagingSenderId: '423847410738',
  appId: '1:423847410738:web:78e0b04a21c5f3e048502b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
