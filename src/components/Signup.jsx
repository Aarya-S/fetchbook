import React,{ Component,useState} from "react";
import { Link } from "react-router-dom";
import '../css/signup.css';

const SignUP=()=>{
        const [whoami,setwhoami] = useState('user')
        const inputchangehandler = (event) => {
            setwhoami(event.target.value)
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
        <input type="radio" id="user" name="whoami" value='user' onChange={inputchangehandler}/>
        <label for="age1">Sign me as a User</label><br></br>
        <input type="radio" id="seller" name="whoami" value='seller' onChange={inputchangehandler}/>
        <label for="age1">Sign me as a Seller</label><br></br>
        {whoami=='user'?<User/>:<Seller/>}
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


const Seller = ()=>{
    return(<>
        <div className="form-group">
        	<input type="text" class="form-control input-lg" name="sellername" placeholder="sellername" required="required"/>
        </div>
		<div className="form-group">
        	<input type="email" class="form-control input-lg" name="email" placeholder="Email Address" required="required"/>
        </div>
        <div className="form-group">
            <input type="number" class="form-control input-lg" name="phone number" placeholder="phone number" required="required"/>
        </div> 
        <div className="form-group">
            <input type="number" class="form-control input-lg" name="Experience " placeholder="Experience in selling (years)"/>
        </div> 
        <div className="form-group">
            <input type="text" class="form-control input-lg" name="sellerid" placeholder="seller ID" required="required"/>
        </div></>
    )
}
const User=()=>{
  return(  <div className="form-group">
            <input type="text" class="form-control input-lg" name="userid" placeholder="User ID" required="required"/>
        </div>)
}

export default SignUP
