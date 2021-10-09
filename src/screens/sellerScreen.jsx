import React,{useState} from "react";

import Navbar2 from '../components/Navbar2';
import '../css/SellerScreen.css'
import { seller } from "../dummydata/dummy";
const selleracc = seller 
const SellerScreen = ()=>{   
        const [display, setdisplay] = useState('')
        return(
            <div>
                <Navbar2/>
                <h1>Name : - </h1>
                <input value={selleracc.sellername}/>
                <h1>Seller Address : - </h1>
                <input value={selleracc.address}/>
                <h1>Experience : - </h1>
                <input value={selleracc.experience}/>
                <button>add book</button>
                <button>get added books</button>
                <button>remove book</button>
                <button>orders</button>
                <p>{display}</p>
                
            </div>
        )
    
}

export default SellerScreen
