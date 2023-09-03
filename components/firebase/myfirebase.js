import * as firebase from 'firebase/compat';

const firebaseConfig = {
  apiKey: 'AIzaSyAoL5B-1WGypDWuZd7b9xi4SkpHooA_oDA',
  authDomain: 'ecomsample-c7865.firebaseapp.com',
  projectId: 'ecomsample-c7865',
  storageBucket: 'ecomsample-c7865.appspot.com',
  messagingSenderId: '1094994421009',
  appId: '1:1094994421009:web:1802ef4c4ec4dda00598b0',
  measurementId: 'G-N7MN7GWKPE',
};
let app;
if (firebase.apps.length === 0) app = firebase.initializeApp(firebaseConfig);
else app = firebase.app();
const auth = firebase.auth();

// Initialize Firebase
export default auth;
