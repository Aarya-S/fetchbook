import React from "react";
import Navbar2 from '../components/Navbar2';
import '../css/SellerScreen.css'
import { seller } from "../dummydata/dummy";
const selleracc = seller 
const SellerScreen = ()=>{   
        return(
            <div>
                <Navbar2/>
                <h1>Name : - </h1>
                <input value={selleracc.sellername}/>
                <h1>Seller Address : - </h1>
                <input value={selleracc.address}/>
                <h1>Experience : - </h1>
                <input value={selleracc.experience}/>
                
            </div>
        )
    
}

export default SellerScreen
