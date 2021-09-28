import React from "react";
import { Link } from "react-router-dom";
import '../css/signup.css';
import Seller from "./SellerSignUp";
const MemberSignUp=()=>{
        
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
        <Seller/>
    </form>
    <div className="text-center">Already have an account?<Link to='/login'> <a>Login here</a></Link></div>
            </div>
            </>
        )
    }



export default MemberSignUp
