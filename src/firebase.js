// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyDHF7mIhy175OmkTt2JyL0dIsFLsdL9dmM",

    authDomain: "world-cup-champions-path.firebaseapp.com",

    databaseURL: "https://world-cup-champions-path-default-rtdb.firebaseio.com",

    projectId: "world-cup-champions-path",

    storageBucket: "world-cup-champions-path.appspot.com",

    messagingSenderId: "234565182617",

    appId: "1:234565182617:web:0a032bf22e98cf5db48408"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app