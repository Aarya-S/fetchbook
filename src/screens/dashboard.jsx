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
                <h1>Name :</h1>
                <input value={userdata.username} />
                <h1>email address :</h1>
                <input value={userdata.email}/>
                <h1>address :</h1>
                <input value={userdata.address}/>
                <Link to='/forgotpassword'>change password</Link>
                <h1>incart :</h1>
            </div>
        )
    
}

export default Dashboard
