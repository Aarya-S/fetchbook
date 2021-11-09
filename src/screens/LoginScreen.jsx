import React,{ useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'
import '../css/Login.css';
import { signInWithGoogle,signInWithEmailnPassword,auth } from "../firebaseconfig";

const Login =()=>{
        const [loginid, setloginid] = useState('')
        const [pwd, setpwd] = useState('')
        let history = useHistory()
        const submit = async (e)=>{
            try{
                e.preventDefault()
            await signInWithEmailnPassword(loginid,pwd)
            history.push('/')}
            catch(e){
                alert('Error Occured '+ e)
            }
    
        }
        const googlesubmit = async ()=>{
            try{
                await signInWithGoogle()
                history.push('/')
            }
            catch(e){
                alert('Error Occured'+ e)
            }
        }
        return(
            <>      
                <Link to='/'><button size="lg" className="btn btn-outline-dark back-btn"><i className="fa fa-angle-double-left"></i>Back to home</button></Link>
                
                <div className="signup-form">
                    <div className="form-box">
                    <h2>Login</h2>
                    <p className="hint-text">Sign in with your Gmail account or email address</p>
                    <div className="social-btn text-center">
                        <a onClick={googlesubmit} class="btn btn-primary btn-lg"><i class="fa fa-google"></i>  Google</a>
                    </div>
                    <div className="or-seperator"><b>or</b></div>
                    
                    <div className="form-group">
                        <input type="text" class="form-control input-lg" value={loginid} name="Login ID" placeholder="Email" onChange={(e)=>{setloginid(e.target.value)}} required="required"/>
                    </div>  

                    <div className="form-group">
                        <input type="password" class="form-control input-lg" value={pwd} name="password" placeholder="Password" onChange={(e)=>{setpwd(e.target.value)}} required="required"/>
                        <Link to='/forgotpassword'><span className="forgot-pwd">Forgot password?</span></Link>
                    </div> 
                    
                    <div className="form-group"> 
                        <button onClick={submit} class="btn btn-outline-danger btn-lg btn-block sign-btn">Sign in</button>
                    </div>
                    <div className="ask-signup">Dont have an account?<Link to='/signup'><span className="signup-here">Sign up here</span></Link></div>
                    </div>                
                </div>
            </>
        )
}


export default Login
