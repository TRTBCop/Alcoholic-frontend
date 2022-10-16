import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp({
  apiKey: process.env.FB_API_KEY || 'test',
  authDomain: process.env.FB_AUTH_DOMAIN || 'test',
  projectId: process.env.FB_PROJECT_ID || 'test',
  storageBucket: process.env.FB_STORAGE_BUCKET || 'test',
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID || 'test',
  appId: process.env.FB_APP_ID || 'test',
});

export const authService = getAuth(app);
