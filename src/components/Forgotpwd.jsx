import { sendPasswordResetinEmail } from "../firebaseconfig";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../css/Login.css';


const Forgotpwd = ()=>{
    const [email, setemail] = useState('')
    const submit = ()=>{sendPasswordResetinEmail(email)}
    return(
        <>
        <div><Link to="/login"><button size="lg" className="btn btn-outline-dark back-btn"><i className="fa fa-angle-double-left"></i>  Back </button></Link></div>  
        <div className="signup-form">
         <div className="form-box">
                <h2>Forgot Password</h2>
                <p className="hint-text">Enter the email address below</p>
                <div className="form-group">
                    <input type="text" class="form-control input-lg" name="Login ID" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Email ID" required="required"/>
                </div>  
                
                <div className="form-group">
                    <button type="submit" onClick={submit} class="btn btn-success btn-lg btn-block signup-btn">Done</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Forgotpwd