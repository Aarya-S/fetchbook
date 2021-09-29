// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {useState} from 'react'
import { getAuth, GoogleAuthProvider,signOut,signInWithPopup  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVoEO85JaiECGTca5OmgIXapyd_RvRSkY",
  authDomain: "fetchbook-99357.firebaseapp.com",
  projectId: "fetchbook-99357",
  storageBucket: "fetchbook-99357.appspot.com",
  messagingSenderId: "265483738954",
  appId: "1:265483738954:web:80c047f283cf74ad1eabb3"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const Provider = new GoogleAuthProvider();
let isLogin = null
const signInWithGoogle = async () => {
  if(isLogin == null){
  signInWithPopup(auth, Provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    isLogin = token
    // The signed-in user info.
    console.log('Token :- ' + token)
    const user = result.user;
    console.log('user : - ' + user.email +'\n'+ user.photoURL +'\n' +user.displayName)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // The email of the user's account used.
    const email = error.email;
    console.log('email :- ' + email)
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log('creds : - ' + credential)
    // ...
  })}else{alert('already Logged IN')}
};
// const signInWithEmailAndPassword = async (email, password) => {
//   try {
//     await auth.signInWithEmailAndPassword(email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await auth.createUserWithEmailAndPassword(email, password);
//     const user = res.user;
//     await db.collection("users").add({
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const sendPasswordResetEmail = async (email) => {
//   try {
//     await auth.sendPasswordResetEmail(email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
const logout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    isLogin=null;
  }).catch((error) => {
    // An error happened.
    alert(error)
  });
};
export {
  signInWithGoogle,
  logout,
};