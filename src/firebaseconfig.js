// Import the functions you need from the SDKs you need
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
const Provider = new GoogleAuthProvider();
let isLogin = auth.currentUser
const signInWithGoogle = async () => {
  if(isLogin == null){
  signInWithPopup(auth, Provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
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

const signUpWithEmailAndPassword = async (email,password)=>{
  if(isLogin==null){
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user :- ' + user.email +'\n' + user.displayName + '\n' )
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });}
}

const signInWithEmailnPassword = async (email,password) =>{
  if(isLogin == null ){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    console.log('user :- ' + user.email +'\n' + user.displayName + '\n' )
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });}
}
const sendPasswordResetinEmail = async(email) => {
  if(isLogin == null){
    sendPasswordResetEmail(auth, email)
  .then(() => {

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
  }
}

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
  signUpWithEmailAndPassword,
  signInWithEmailnPassword,
  sendPasswordResetinEmail,
  logout,
};