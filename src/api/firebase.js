import { initializeApp } from 'firebase/app';

import { getFirestore, collection } from 'firebase/firestore';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "bbc-news-8f513.firebaseapp.com",
  projectId: "bbc-news-8f513",
  storageBucket: "bbc-news-8f513.firebasestorage.app",
  messagingSenderId: "800703342021",
  appId: "1:800703342021:web:ca0f5628eba6001a8e97ac",
  measurementId: "G-6JS7W3P8ZB"
};



const collectionURL = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/collection_name?key=${firebaseConfig.apiKey}`
// `https://firestore.googleapis.com/v1/projects/bbc-news-8f513/databases/(default)/documents/article-topics?key=AIzaSyCLxDFM3rg_fkqSsBpRVVX6BTQtrgufrxc`

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionn = collection(db,'article-topics')
console.log('collection:',collectionn)
export {db,collectionURL };