import React,{useState} from "react";
import { Link,useHistory } from "react-router-dom";
import { signUpWithEmailAndPassword ,signInWithGoogle} from "../firebaseconfig";
import '../css/Signup.css';
import validator from "../helper/password";
import UserAction from "../actions/userAction";
import { USER_UPDATE_REQUEST } from "../constant/userconstant";


const SignUP=()=>{
        const [userid, setuserid] = useState()
        const [password, setpassword] = useState()
        const [cnfrmpwd, setcnfrmpwd] = useState()
        let history = useHistory()
        let result = null
        const submit = async ()=>{
            try{if(password === cnfrmpwd){
                const stats = validator(password)
                if(stats === true){
                result = await signUpWithEmailAndPassword(userid,password)
                alert('SuccussFully SignedUp')
                history.push('/login')}
                else{
                    alert('Invalid Password (oneof means special char)' + stats)
                }
                
            }
            else{
                alert('Password missmatch Check the Password')
            }}
            catch(e){
                result = null;
                alert(e)
            }finally{
                if(result!=null){
                    UserAction(USER_UPDATE_REQUEST,{
                        name : userid,
                        email : userid
                    })
                }
            }
        }
        const googlesubmit = async ()=>{
            try{
                await signInWithGoogle()
                history.push('/login')
            }
            catch(e){
                alert('Error Occured'+ e)
            }
        }
        return(
            <>  
            <div><Link to="/"><button size="lg" className="btn btn-outline-dark back-btn"><i className="fa fa-angle-double-left"></i>  Back to home</button></Link></div>
        <div className="signup-form">
            <div className="form-box">
		<h2>Create an Account</h2>
		<p className="hint-text">Sign up with your social media account or email address</p>
		<div className="social-btn text-center">
			<a onClick={googlesubmit} class="btn btn-primary btn-lg"><i class="fa fa-google"></i> Google</a>
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
        </div>
            </>
        )
    }



export default SignUP
