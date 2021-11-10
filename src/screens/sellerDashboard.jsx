import React,{useState} from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import sellerAction from "../actions/sellerAction";

import Navbar2 from '../components/Navbar2';
import { SELLER_PROFILE_UPDATE_REQUEST, SELLER_PROFILE_UPDATE_SUCCESS } from "../constant/sellerconstant";
import '../css/SellerScreen.css'
import { auth,updateProfile, updateEmail } from "../firebaseconfig";


const SellerScreen = ()=>{   
        const history = useHistory()
        const location = useLocation()
        const Seller = location.state
        const Orders = location.state.orders
        console.log(Orders)
        
        const OrderCard = ({order})=>{
            const Data = order.putdata
        const [Status, setStatus] = useState('')
            return(
                <div>
            <Card border="dark" style={{height: "auto", margin: "20px 30px", padding: "25px 12px"}}>
                        <Container className="justify-content-center">   
                            <Row>
                                {/* <Col sm={2}>
                                    <Card.Img variant="left" src="https://www.unsplash.com/random" style={{height: "150px", width:"150px", marginTop:"12.5px", marginLeft: "12.5px"}} />
                                </Col> */}
                                
                                <Col sm={8}>
                                    <Card.Title>Order ID : -  {Data.orderid}</Card.Title>
                                    <Card.Subtitle>Buyer Name : -  {Data.buyerName}</Card.Subtitle>
                                    <div className="description">Billing Address : - {Data.delivery_address}</div>
                                </Col>

                              

                                <Col sm={2}>
                                    {/* Status of Order */}
                                    <div className="text-center">
                                        {/* Delivered, Processing, Out for Delivery */}
                                        <b style={{color: "green"}}>{Data.delivery_status}</b><br/>
                                        <label className="label-check">Delivery Status</label>
                                        <select name="condition" id="condition" defaultValue={Data.delivery_status} onChange={(e)=>{setStatus(e.target.value)}}  required="required" className="selection">
                                            <option value="Pending">Pending</option>
                                            <option value="Shipping">Shipping</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                        {Status===''?'':<button className="btn btn-success">Update</button>}
                                        {/* <b style={{color: "blue"}}>Pending</b>
                                        <b style={{color: "red"}}>Cancelled</b> */}
                                    </div>
                                </Col>
                            </Row>
                            <hr />

                            {/* Ordered Books List */}
                            <Row style={{padding: "10px 0px"}}>
                                

                                <Col sm={7}>
                                <Card.Title>{Data.bookname}</Card.Title>
                                <Card.Subtitle>{Data.auther}</Card.Subtitle>
                                <Card.Subtitle>Order Time :- {Data.orderTime}</Card.Subtitle>
                                <Card.Subtitle>Estimated Delivery :- {Data.delivery_date}</Card.Subtitle>
                                </Col>

                                <Col sm={2}>
                                <b>Quantity : - {Data.count}</b>
                                </Col>

                                <Col sm={2}>
                                <i className="fa fa-inr"></i>
                                <b>{Data.tag.offered_price?Data.tag.offered_price:Data.tag.price}</b>
                                </Col>
                            </Row>

                        </Container>
                    </Card>

                    </div>
                    )
        }
        const [sellername, setSellername] = useState(Seller.sellername || "unAuth Access")
        const [address, setAddress] = useState(Seller.address || "unAuth Access")
        const [email, setEmail] = useState(Seller.seller_email || "unAuth Access")
        const [phone, setPhone] = useState(Seller.phoneno || "unAuth Access")
        const [experience, setExperience] = useState(Seller.experience || "not provided")
        const handler= ()=>{
            if(sellername !== auth.currentUser.displayName){
                updateProfile(auth.currentUser,{displayName:sellername}).then(() => {
                    console.log("Profile updated");
                }).catch((error) => {
                    alert(error);
                });}
            if(auth.currentUser.email !== email){
                updateEmail(auth.currentUser,email).then(() => {
                    console.log("Email updated");
                }).catch((error) => {
                    alert(error);
            });}
            const result = sellerAction(SELLER_PROFILE_UPDATE_REQUEST,{
                "sellername" : sellername,
                "address" : address,
                "seller_email" : email,
                "phoneno" : phone,
                "certificates" : Seller.certificates,
                "experience" : experience
            })
            if(result === SELLER_PROFILE_UPDATE_SUCCESS){
                alert("Profile Updated")
            }

        }
        return(
            <div>
                <Navbar2 />
                <Container>
                    <Row style={{padding: "12px 5px"}}>
                        <Col sm={8}>
                            {Seller.certificates!=="no certificate added"? <button onClick={()=>{history.push(Seller.certificates)}}>Check Certitficates</button>:'Certificates Not Provided'}
                            <br/>
                            <label className="label-dash">Name: </label><br />
                            <input value={sellername} className="textfield" onChange={(e)=>{setSellername(e.target.value)}} /><br /><br />
                            <label className="label-dash">Seller Address: </label><br />
                            <input value={address} className="textfield" onChange={(e)=>{setAddress(e.target.value)}}/><br /><br />
                            <label className="label-dash">Experience: </label><br />
                            <input value={experience} className="textfield" onChange={(e)=>{setExperience(e.target.value)}}/><br /><br />
                            <label className="label-dash">Phone No: </label><br />
                            <input value={phone} className="textfield" onChange={(e)=>{setPhone(e.target.value)}}/><br /><br />
                            <label className="label-dash">Email: </label><br />
                            <input value={email} className="textfield" onChange={(e)=>{setEmail(e.target.value)}}/><br /><br />
                            <button className="change-pwd" onClick={handler}>Update Profile</button><br />
                        </Col>

                        <Col sm={4}>
                            <button className="change-pwd" onClick={()=>{history.push('/AddBookScreen')}}>Add Book</button><br />
                            <button className="change-pwd" onClick={()=>{history.push('/sellerui/getaddedBooks')}}>Get added books</button><br />
                            <button className="change-pwd">Refresh Orders</button><br />
                            <Link to='/forgotpassword'><button className="change-pwd">Change Password</button></Link><br />
                        </Col>
                    </Row>
                
                </Container>
                

                <br />
                <h3>Incoming Orders</h3>
                <hr />
                {Orders.length === 0? <h4>No Orders</h4>:Orders.map((order)=>{
                    return <OrderCard order={order}/>
                 })}
                
            </div>
        )
    
}

export default SellerScreen
