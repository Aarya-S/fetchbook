import React,{ Component } from "react";
import { Link } from "react-router-dom";
import '../css/signup.css';
import { signInWithGoogle } from "../firebaseconfig";

class SignUP extends Component{
    render(){

        return(
            <>  
                <div className="signup-form">
                    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Login</h2>
		<p className="hint-text">Sign in with your social media account or email address</p>
		<div className="social-btn text-center">
			<a onClick={signInWithGoogle} class="btn btn-primary btn-lg"><i class="fa fa-google"></i> Google</a>
		</div>
		<div className="or-seperator"><b>or</b></div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="Login ID" placeholder="Login ID" required="required"/>
        </div>  
        <div className="form-group">
            <input type="password" class="form-control input-lg" name="password" placeholder="password" required="required"/>
        </div> 
        <div className="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block signup-btn">Sign in</button>
        </div>
    </form>
    <div className="text-center">Dont have an account?<Link to='/signup'> <a>Sign up here</a></Link></div>
            </div>
            </>
        )
    }
}

export default SignUP
