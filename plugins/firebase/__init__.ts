import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from '../../firebase.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authService = getAuth(app);
