import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAgAxBFVgaOzJWmhBbcz5tOqykigvJw_gA",
   authDomain: "reactjs-45000-dacunhaeduardo.firebaseapp.com",
   projectId: "reactjs-45000-dacunhaeduardo",
   storageBucket: "reactjs-45000-dacunhaeduardo.appspot.com",
   messagingSenderId: "315665829766",
   appId: "1:315665829766:web:dc4e7aae33cd5070b62607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Root code
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
   <App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
