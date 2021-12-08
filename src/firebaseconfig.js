// Import the functions you need from the SDKs you need
import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";

import { getAuth,updateProfile,updateEmail,GoogleAuthProvider,signOut,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = /* ADD CONFIG DETAILS HERE */

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage  = getStorage(app)
const Provider = new GoogleAuthProvider();
let isLogin = auth.currentUser;
const signInWithGoogle = () => {
  if(isLogin === null){
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
  updateProfile,
  updateEmail,
  logout,
  storage,
};
