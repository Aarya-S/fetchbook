import React,{ useState } from "react";
import { Link } from "react-router-dom";
import '../css/signup.css';
import { signInWithGoogle,signInWithEmailnPassword,auth } from "../firebaseconfig";

const SignUP =()=>{
        const [loginid, setloginid] = useState('')
        const [pwd, setpwd] = useState('')
        const [logedin,setlogedin] = useState('')
        const submit = ()=>{
            signInWithEmailnPassword(loginid,pwd)
            setlogedin(auth.currentUser)
        }
        return(
            <>  
        <div className="signup-form">
		<h2>Login</h2>
		<p className="hint-text">Sign in with your social media account or email address</p>
		<div className="social-btn text-center">
			<a onClick={signInWithGoogle} class="btn btn-primary btn-lg"><i class="fa fa-google"></i> Google</a>
		</div>
		<div className="or-seperator"><b>or</b></div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" value={loginid} name="Login ID" placeholder="Email ID" onChange={(e)=>{setloginid(e.target.value)}} required="required"/>
        </div>  
        <div className="form-group">
            <input type="password" class="form-control input-lg" value={pwd} name="password" placeholder="password" onChange={(e)=>{setpwd(e.target.value)}} required="required"/>
        </div> 
        <Link to='/forgotpassword'><p>forgot password</p></Link>
        <div className="form-group"> 
            <button onClick={submit} class="btn btn-success btn-lg btn-block signup-btn">Sign in</button>
        </div>
        <div className="text-center">Dont have an account?<Link to='/signup'> <a>Sign up here</a></Link></div>
            </div>
            </>
        )
}


export default SignUP
