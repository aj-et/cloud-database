// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVm_rlQSMgNSkvBHnWXf09K58UnbZ5Pe0",
    authDomain: "cloud-database-247b9.firebaseapp.com",
    projectId: "cloud-database-247b9",
    storageBucket: "cloud-database-247b9.appspot.com",
    messagingSenderId: "361834187521",
    appId: "1:361834187521:web:fcf550165bd5468920a900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
