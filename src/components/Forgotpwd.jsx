import { sendPasswordResetinEmail } from "../firebaseconfig"
import { useState } from "react"

const Forgotpwd = ()=>{
    const [email, setemail] = useState('')
    const submit = ()=>{sendPasswordResetinEmail(email)}
    return(
        <>  
                <div className="signup-form">
                   
		<h2>Forgot Password</h2>
		<p className="hint-text">Enter the email address below</p>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="Login ID" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Email ID" required="required"/>
        </div>  
        
        <div className="form-group">
            <button type="submit" onClick={submit} class="btn btn-success btn-lg btn-block signup-btn">Done</button>
        </div>
  
            </div>
            </>
    )
}
export default Forgotpwd