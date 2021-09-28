import React from "react";
import { Link } from "react-router-dom";
import '../css/signup.css';

const SignUP=()=>{
        
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
            <input type="text" class="form-control input-lg" name="userid" placeholder="User ID" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" class="form-control input-lg" name="password" placeholder="Password" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" class="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>  
        <div className="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
        </div>
    </form>
    <div className="text-center">Already have an account?<Link to='/login'> <a>Login here</a></Link></div>
            </div>
            </>
        )
    }



export default SignUP
