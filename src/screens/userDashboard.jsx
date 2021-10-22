import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from '../components/Navbar2';
import '../css/dashboard.css'
import { userdata } from "../dummydata/dummy";
const user = userdata
const Dashboard = ()=>{   
        return(
            <div>
                <Navbar2 />
                <br />
                <div className="dashboard">
                <h3>Dashboard</h3>
                <hr />
                <label for="name" className="label-dash">Name:</label><br />
                <input value={userdata.username} id="name" className="textfield" /><br /><br />
                <label for="email" className="label-dash">Email ID:</label><br />
                <input value={userdata.email} id="email" className="textfield" /><br /><br />
                <label for="address" className="label-dash">Address: </label><br />
                <input value={userdata.address} id="address" className="textfield" /><br /><br />
                <Link to='/forgotpassword'><button className="change-pwd">Change password</button></Link><br /> <br /><br />
                </div>
            </div>
        )
    
}

export default Dashboard
