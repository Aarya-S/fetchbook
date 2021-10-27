import React,{useState} from "react";
import { useHistory, useLocation } from "react-router";
import ProductAction from "../actions/productActions";

import Navbar2 from '../components/Navbar2';
import '../css/SellerScreen.css'
import { auth } from "../firebaseconfig";


const SellerScreen = ()=>{   
        const [display, setdisplay] = useState('')
        const history = useHistory()
        const location = useLocation()
        const getsellerorderhandle =()=>{
            if(auth.currentUser){
                const result = ProductAction('SELLER_BOOK_Request',auth.currentUser.email)
                if(result){
               setdisplay(result)}
               else{
                   alert(result)
               }
            }else{
                alert('Unauthorized access')
            }
        }
        const Seller = location.state
        console.log(location.state)
        return(
            <div>
                <Navbar2 />
                <div className="dashboard">
                <label className="label-dash">Name: </label><br />
                <input value={Seller.sellername} className="textfield" /><br /><br />
                <label className="label-dash">Seller Address: </label><br />
                <input value={Seller.address} className="textfield" /><br /><br />
                <label className="label-dash">Experience: </label><br />
                <input value={Seller.experience} className="textfield" /><br /><br />
                <button className="change-pwd" onClick={()=>{history.push('/AddBookScreen')}}>Add Book</button><br />
                <button className="change-pwd" onClick={getsellerorderhandle}>Get added books</button><br />
                <button className="change-pwd" >Remove book</button><br />
                <button className="change-pwd" onClick={()=>{
                    // setdisplay(seller.orders)
                }}>Orders</button><br />
                </div>
                
                <p>{display}</p>
                
            </div>
        )
    
}

export default SellerScreen
