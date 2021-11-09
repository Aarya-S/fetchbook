import { sendPasswordResetinEmail } from "../firebaseconfig";
import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import '../css/Login.css';


const Forgotpwd = ()=>{
    const [email, setemail] = useState('')
    let history = useHistory()
    const submit = async ()=>{
        try{
            await sendPasswordResetinEmail(email);
            history.push('/login')
        }catch(e){
            alert(e)
        }
    }
    return(
        <>
        <div><Link to="/"><button size="lg" className="btn btn-outline-dark back-btn"><i className="fa fa-angle-double-left"></i>  Back </button></Link></div>  
        <div className="signup-form">
         <div className="form-box">
                <h2>Forgot Password</h2>
                <p className="hint-text">Enter the email address below</p>
                <div className="form-group">
                    <input type="text" class="form-control input-lg" name="Login ID" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Email ID" required="required"/>
                </div>  
                
                <div className="form-group">
                    <button type="submit" onClick={submit} className="btn btn-lg btn-block sign-btn">Done</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Forgotpwd