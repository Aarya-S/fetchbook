import React,{ Component } from "react";
import '../css/signup.css';

class SignUP extends Component{
    state={

    }
    render(){
        return(
            <div>  
                <div className="signup-form">
                    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Create an Account</h2>
		<p className="hint-text">Sign up with your social media account or email address</p>
		<div className="social-btn text-center">
			<a href="#" class="btn btn-primary btn-lg"><i class="fa fa-google"></i> Google</a>
		</div>
		<div className="or-seperator"><b>or</b></div>
        <div className="form-group">
        	<input type="text" class="form-control input-lg" name="username" placeholder="Username" required="required"/>
        </div>
		<div className="form-group">
        	<input type="email" class="form-control input-lg" name="email" placeholder="Email Address" required="required"/>
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
    <div className="text-center">Already have an account? <a href="#">Login here</a></div>
            </div>
            </div>
        )
    }
}

export default SignUP
