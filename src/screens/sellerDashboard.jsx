import React,{useState} from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";

import Navbar2 from '../components/Navbar2';
import '../css/SellerScreen.css'
import { auth } from "../firebaseconfig";


const SellerScreen = ()=>{   
        const history = useHistory()
        const location = useLocation()
        const Seller = location.state
        console.log(location.state)
        return(
            <div>
                <Navbar2 />

                <Container>
                    <Row style={{padding: "12px 5px"}}>
                        <Col sm={8}>
                            
                            <label className="label-dash">Name: </label><br />
                            <input value={Seller.sellername} className="textfield" /><br /><br />
                            <label className="label-dash">Seller Address: </label><br />
                            <input value={Seller.address} className="textfield" /><br /><br />
                            <label className="label-dash">Experience: </label><br />
                            <input value={Seller.experience} className="textfield" /><br /><br />
                        </Col>

                        <Col sm={4}>
                            <button className="change-pwd" onClick={()=>{history.push('/AddBookScreen')}}>Add Book</button><br />
                            <button className="change-pwd" onClick={()=>{history.push('/sellerui/getaddedBooks')}}>Get added books</button><br />
                            <button className="change-pwd" >Remove book</button><br />
                            <button className="change-pwd">Refresh Orders</button><br />
                        </Col>
                    </Row>
                
                </Container>
                

                <br />
                <h3>Incoming Orders</h3>
                <hr />

                <Card border="dark" style={{height: "auto", margin: "20px 30px", padding: "25px 12px"}}>
                        <Container className="justify-content-center">   
                            <Row>
                                {/* <Col sm={2}>
                                    <Card.Img variant="left" src="https://www.unsplash.com/random" style={{height: "150px", width:"150px", marginTop:"12.5px", marginLeft: "12.5px"}} />
                                </Col> */}
                                
                                <Col sm={8}>
                                    <Card.Title>Order ID:</Card.Title>
                                    <Card.Subtitle>Buyer Name</Card.Subtitle>
                                    <div className="description">Address</div>
                                </Col>

                                <Col sm={2}>
                                    <b>Total</b><br />
                                    <i className="fa fa-inr"></i>
                                    Price
                                </Col>

                                <Col sm={2}>
                                    {/* Status of Order */}
                                    <div className="text-center">
                                        {/* Delivered, Processing, Out for Delivery */}
                                        <b style={{color: "green"}}>Delivered</b>
                                        {/* <b style={{color: "blue"}}>Pending</b>
                                        <b style={{color: "red"}}>Cancelled</b> */}
                                    </div>
                                </Col>
                            </Row>
                            <hr />

                            {/* Ordered Books List */}
                            <Row style={{padding: "10px 0px"}}>
                                <Col sm={1}>
                                <b>1.</b>
                                </Col>

                                <Col sm={7}>
                                <Card.Title>Book Name</Card.Title>
                                <Card.Subtitle>Author</Card.Subtitle>
                                </Col>

                                <Col sm={2}>
                                <b>Quantity</b>
                                </Col>

                                <Col sm={2}>
                                <b>Price</b>
                                </Col>
                            </Row>

                        </Container>
                    </Card>
                
                    <Card border="dark" style={{height: "auto", margin: "20px 30px", padding: "25px 12px"}}>
                        <Container>

                        </Container>
                    </Card>
            </div>
        )
    
}

export default SellerScreen
