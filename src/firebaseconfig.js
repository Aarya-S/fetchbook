// Import the functions you need from the SDKs you need
import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider,signOut,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
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
const storage  = getStorage(app)
const Provider = new GoogleAuthProvider();
let isLogin = auth.currentUser
const signInWithGoogle = () => {
  if(isLogin === null){
    console.log('in firebase '+isLogin)
  return signInWithPopup(auth, Provider)
}}

const signUpWithEmailAndPassword = (email,password)=>{
  if(isLogin===null){
  return createUserWithEmailAndPassword(auth, email, password)
}}

const signInWithEmailnPassword = (email,password) =>{
  if(isLogin === null ){
  return signInWithEmailAndPassword(auth, email, password)
}}
const sendPasswordResetinEmail = (email) => {
  if(isLogin === null){
  return  sendPasswordResetEmail(auth, email)
}}


const logout = () => {
  return signOut(auth)
};
export {
  auth,
  signInWithGoogle,
  signUpWithEmailAndPassword,
  signInWithEmailnPassword,
  sendPasswordResetinEmail,
  logout,
  storage,
};