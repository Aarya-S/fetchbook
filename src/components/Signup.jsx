import React,{useState} from "react";
import { Link } from "react-router-dom";
import { signUpWithEmailAndPassword } from "../firebaseconfig";
import '../css/signup.css';

const SignUP=()=>{
        const [userid, setuserid] = useState()
        const [password, setpassword] = useState()
        const [cnfrmpwd, setcnfrmpwd] = useState()
        const submit = ()=>{
            console.log(password+'\n'+cnfrmpwd)
            if(password == cnfrmpwd){
                console.log('this is uid : -'+userid+'this is password'+ password)
                signUpWithEmailAndPassword(userid,password)
            }
            else{
                alert('Password missmatch Check the Password')
            }
        }
        return(
            <>  
        <div className="signup-form">
		<h2>Create an Account</h2>
		<p className="hint-text">Sign up with your social media account or email address</p>
		<div className="social-btn text-center">
			<a href="#" class="btn btn-primary btn-lg"><i class="fa fa-google"></i> Google</a>
		</div>
		<div className="or-seperator"><b>or</b></div>   
        <div className="form-group">
            <input type="text" class="form-control input-lg" name="userid" value={userid} onChange={(e)=>{setuserid(e.target.value)}} placeholder="Email ID" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" class="form-control input-lg" name="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" class="form-control input-lg" name="confirm_password"value={cnfrmpwd} onChange={(e)=>{setcnfrmpwd(e.target.value)}} placeholder="Confirm Password" required="required"/>
        </div>  
        <div className="form-group">
            <button  onClick={submit} class="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
        </div>
        <div className="text-center">Already have an account?<Link to='/login'> <a>Login here</a></Link></div>
        </div>
            </>
        )
    }



export default SignUP
