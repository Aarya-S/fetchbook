import React,{useState} from "react";
import { Link,useHistory } from "react-router-dom";
import sellerAction from "../actions/sellerAction";
import { ADD_SELLER_DETAILS_REQUEST } from "../constant/sellerconstant";
import '../css/Signup.css';
import { signUpWithEmailAndPassword,signInWithGoogle } from "../firebaseconfig";
import validator from "../helper/password";



const MemberSignUp=()=>{
    const [sellername, setsellername] = useState('')
    const [email, setemail] = useState('')
    const [phoneno, setphoneno] = useState('')
    const [exp, setexp] = useState('')
    const [address,setaddress] = useState('')
    const [password, setpassword] = useState('')
    const [cnfrmpwd, setcnfrmpwd] = useState('')
    let history = useHistory()
        const submit=async ()=> {
            try{
                if(password===cnfrmpwd){
                const stats = validator(password)
                if(stats == true){
                await signUpWithEmailAndPassword(email,password)
                history.push('/')}
                else{
                    alert('Invalid Password (oneof means special char !,@,#,$,%,^,&,*,-)' + stats)
            }}else{
                alert('Confirm your password')
            }
        }
            catch(e){
                alert(e)
            }finally{
                sellerAction(ADD_SELLER_DETAILS_REQUEST,{
                    sellername: sellername,
                    address : address,
                    experience : exp,
                    phoneno : phoneno,
                    seller_email: email
                })
            }
        }
        return(
            <>  
            <Link to='/'><button size="lg" className="btn btn-outline-dark back-btn"><i className="fa fa-angle-double-left"></i>Back to home</button></Link>
                <div className="signup-form">
                    <div className="form-box">
		<h2>Create an Account</h2>
		<p className="hint-text">Sign up with your social media account or email address</p>
		<div className="social-btn text-center">
			<a onClick={googlesubmit} class="btn btn-primary btn-lg"><i class="fa fa-google"></i> Google</a>
		</div>
		<div className="or-seperator"><b>or</b></div>   
        <div className="form-group">
        	<input type="text" class="form-control input-lg" value={sellername} name="sellername" placeholder="sellername" onChange={(e)=>{setsellername(e.target.value)}} required="required"/>
        </div>
		<div className="form-group">
        	<input type="email" class="form-control input-lg" value={email} name="email" placeholder="Email Address" onChange={(e)=>{setemail(e.target.value)}} required="required"/>
        </div>
        <div className="form-group">
            <input type="number" class="form-control input-lg" value={phoneno} name="phone number" placeholder="phone number" onChange={(e)=>{setphoneno(e.target.value)}} required="required"/>
        </div> 
        <div className="form-group">
            <input type="number" class="form-control input-lg" value={exp} name="Experience " onChange={(e)=>{setexp(e.target.value)}} placeholder="Experience in selling (years)"/>
        </div>
         
        <div className="form-group">
            <input type="" class="form-control input-lg" value={address} name="Address " onChange={(e)=>{setaddress(e.target.value)}} placeholder="Seller Address"/>
        </div>
        <div className="form-group">
            <input type="password" class="form-control input-lg" value={password} name="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" class="form-control input-lg" value={cnfrmpwd} name="confirm_password" placeholder="Confirm Password" onChange={(e)=>{setcnfrmpwd(e.target.value)}} required="required"/>
        </div>  
        <div className="form-group">
            <button onClick={submit} class="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
        </div>
    <div className="text-center">Already have an account?<Link to='/login'> <a>Login here</a></Link></div>
            </div>
            </div>
            </>
        )
    }



export default MemberSignUp
