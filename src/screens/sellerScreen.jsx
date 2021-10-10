import React,{useState} from "react";
import { useHistory } from "react-router";
import ProductAction from "../actions/productActions";

import Navbar2 from '../components/Navbar2';
import '../css/SellerScreen.css'
import { seller } from "../dummydata/dummy";
import { auth } from "../firebaseconfig";

const selleracc = seller 
const SellerScreen = ()=>{   
        const [display, setdisplay] = useState('')
        const history = useHistory()
        const getsellerorderhandle =()=>{
            if(auth.currentUser){
                const result = ProductAction('SELLER_BOOK_Request',auth.currentUser.email)
                if(result){
               setdisplay(result)}
               else{
                   alert(result)
               }
            }else{
                alert('unautherized access')
            }
        }

        return(
            <div>
                <Navbar2/>
                <h1>Name : - </h1>
                <input value={selleracc.sellername}/>
                <h1>Seller Address : - </h1>
                <input value={selleracc.address}/>
                <h1>Experience : - </h1>
                <input value={selleracc.experience}/>
                <button onClick={()=>{history.push('/AddBookScreen')}}>add book</button>
                <button onClick={getsellerorderhandle}>get added books</button>
                <button>remove book</button>
                <button onClick={()=>{
                    setdisplay(seller.orders)
                }}>orders</button>
                
                <p>{display}</p>
                
            </div>
        )
    
}

export default SellerScreen
