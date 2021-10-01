import React,{useState} from "react";
import { Link } from "react-router-dom";
import '../css/signup.css';
import { signInWithEmailnPassword } from "../firebaseconfig";
const MemberSignUp=()=>{
    const [sellername, setsellername] = useState('')
    const [email, setemail] = useState('')
    const [phoneno, setphoneno] = useState('')
    const [exp, setexp] = useState('')
    const [password, setpassword] = useState('')
    const [cnfrmpwd, setcnfrmpwd] = useState('')
        const submit=()=>{
            if(password == cnfrmpwd){
                signInWithEmailnPassword(email,password)
            }else{
                alert('password mismatch')
            }
        }
        return(
            <>  
                <div className="signup-form">
                    <form>
		<h2>Create an Account</h2>
		<p className="hint-text">Sign up with your social media account or email address</p>
		<div className="social-btn text-center">
			<a href="#" class="btn btn-primary btn-lg"><i class="fa fa-google"></i> Google</a>
		</div>
		<div className="or-seperator"><b>or</b></div>   
        <div className="form-group">
        	<input type="text" class="form-control input-lg" value={sellername} name="sellername" placeholder="sellername" onChange={(e)=>{setsellername(e.target.value)}} required="required"/>
        </div>
		<div className="form-group">
        	<input type="email" class="form-control input-lg" value={email} name="email" placeholder="Email Address" onChange={(e)=>{setemail(e.target.value)}} required="required"/>
        </div>
        <div className="form-group">
            <input type="number" class="form-control input-lg" value={phoneno} name="phone number" placeholder="phone number" onChange={(e)=>{setphoneno(e.target.value)}} required="required"/>
        </div> 
        <div className="form-group">
            <input type="number" class="form-control input-lg" value={exp} name="Experience " onChange={(e)=>{setexp(e.target.value)}} placeholder="Experience in selling (years)"/>
        </div>
        <div className="form-group">
            <input type="password" class="form-control input-lg" value={password} name="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" class="form-control input-lg" value={cnfrmpwd} name="confirm_password" placeholder="Confirm Password" onChange={(e)=>{setcnfrmpwd(e.target.value)}} required="required"/>
        </div>  
        <div className="form-group">
            <button type="submit" onClick={submit} class="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
        </div>
    </form>
    <div className="text-center">Already have an account?<Link to='/login'> <a>Login here</a></Link></div>
            </div>
            </>
        )
    }



export default MemberSignUp
