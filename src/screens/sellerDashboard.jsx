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
                <div class="container">
                    <div class="Name">
                        <label className="label-name">Name: </label>
                        <input value={selleracc.sellername} className="name-field" />
                    </div>
                    <div class="Experience">
                        <label className="label-exp">Experience: </label>
                        <input value={selleracc.experience} className="exp-field" />
                    </div>
                    <div class="Address">
                        <label className="label-addr">Seller Address: </label>
                        <textarea value={selleracc.address} className="addr-field" />
                    </div>
                </div>
                    
                            
                        
                            
                     
                            
                
                {/* <button className="change-pwd" onClick={()=>{history.push('/AddBookScreen')}}>Add Book</button><br />
                <button className="change-pwd" onClick={getsellerorderhandle}>Get added books</button><br />
                <button className="change-pwd" >Remove book</button><br /> */}
                <div className="btn-area">
                {/* <button className="change-pwd" onClick={()=>{
                    setdisplay(seller.orders)
                }}>View Orders</button><br />
                 */}
                 <button className="change-pwd" id="update-btn">
                     Update Info
                 </button>
                 <button className="change-pwd">
                     Refresh Orders
                 </button>
                </div>

                <br />
                <h3>Current Orders</h3>
                <hr />
                <table className="order-tbl">
                    <tr>
                        <th>Sr. No.</th>
                        <th>Buyer</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>1.</td>
                        <td>1.</td>
                        <td>1.</td>
                        <td>1.</td>
                    </tr>
                </table>

                <br />
                <h3>Your Products</h3>
                <hr />


                
                
                <p>{display}</p>
                
            </div>
        )
    
}

export default SellerScreen
