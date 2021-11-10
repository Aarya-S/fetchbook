import React, { useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import Navbar2 from '../components/Navbar2';
import '../css/dashboard.css'
import { auth ,updateProfile, updateEmail} from "../firebaseconfig";
const Dashboard = ()=>{   
        const [DisplayName, setDisplayName] = useState(auth.currentUser.displayName || 'UnAuthorized Access');
        const [Email, setEmail] = useState(auth.currentUser.email || 'UnAuthorized Access')
        let history = useHistory();
        const submitHandler = () => {
            if(DisplayName !== auth.currentUser.displayName){
            updateProfile(auth.currentUser,{displayName:DisplayName}).then(() => {
                console.log("Profile updated");
                alert("Profile updated");
            }).catch((error) => {
                alert(error);
            });}
            if(auth.currentUser.email !== Email){
                updateEmail(auth.currentUser,Email).then(() => {
                    console.log("Email updated");
                    alert("Email updated");
                }).catch((error) => {
                    alert(error);
            });}
            history.push('/');
        }
        return(
            <div>
                <Navbar2 />
                <br />
                <div className="dashboard">
                <h3>Dashboard</h3>
                <hr />
                <label for="name" className="label-dash"><b>Name:</b></label><br />
                <input value={DisplayName} id="name" onChange={(e)=>{setDisplayName(e.target.value)}} className="text" /><br /><br />
                <label for="email" className="label-dash"><b>Email ID:</b></label><br />
                <input value={Email} id="email" onChange={(e)=>{setEmail(e.target.value)}} className="text" /><br /><br />
                <button className="change-pwd" onClick={submitHandler}>Update profile</button><br/>
                <Link to='/forgotpassword'><button className="change-pwd">Change Password</button></Link><br /> <br /><br />
                </div>
            </div>
        )
    
}

export default Dashboard
