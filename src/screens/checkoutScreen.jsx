import React, { useState } from "react";
import { useLocation ,useHistory } from "react-router";
import Navbar2 from '../components/Navbar2';
import '../css/CheckoutScreen.css'
import { Form, Col, Row, Button, Card, Container } from 'react-bootstrap'
import { CardActionArea } from "@material-ui/core";
import { auth } from "../firebaseconfig";
import sellerAction from "../actions/sellerAction";
import { SELLER_ORDER_LIST_REQUEST } from "../constant/sellerconstant";
import OrderHistoryList from "../helper/OrderHistoryList";

const CheckoutScreen = ()=>{   
    let history = useHistory();
    let location = useLocation();
    let product  = location.state;
    
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    console.log(product);
    const checkoutHandler = ()=>{
        for(let i=0;i<product.list.length;i++){
            delete product.list[i].description;
            delete product.list[i].img;
            delete product.list[i].publisher;
            delete product.list[i].tag.category;
            delete product.list[i].tag.condition;
            delete product.list[i].tag.delivery_status;
            delete product.list[i].tag.instock;
            delete product.list[i].tag.new;
            delete product.list[i].tag.address;
            product.list[i].buyerName = auth.currentUser.displayName;
            product.list[i].buyerid = auth.currentUser.email;
            product.list[i].orderid = Math.random().toString(36).substr(2, 9);
            product.list[i].orderTime = new Date().toLocaleString();
            product.list[i].delivery_address = address1+' '+address2+' '+city+' '+state+' '+zipcode;
            product.list[i].delivery_status = 'pending';
            Date.prototype.addDays = function(days) {
                var date = new Date(this.valueOf());
                date.setDate(date.getDate() + days);
                return date;
            }
            
            var date = new Date();
            product.list[i].delivery_date = date.addDays(3).toLocaleString();
            AddorderRequest(product.list[i]);
            OrderHistoryList.AddOrderHistory(product.list[i]);
        }

        alert('Order Placed Successfully');
        history.push('/')
    }
    const AddorderRequest = (product)=>{
        sellerAction(SELLER_ORDER_LIST_REQUEST,product);
    }
    const AddLoggsRequest = (product)=>{
        
    }
        return(
            <>
                <Navbar2 />
                        <Container fluid>
                        <Row>
                           <Col style={{marginLeft: "20px", marginRight: "60px"}} sm={7}>
                           {/* Shipping Details Area */}
                           <br /><br /><br /><h3>Billing Details</h3>
                           <hr />
                           <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><b>Email</b></Form.Label>
                                    <Form.Control readOnly placeholder={auth.currentUser.email} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label><b>Name</b></Form.Label>
                                    <Form.Control readOnly placeholder={auth.currentUser.displayName} />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label><b>Address Line 1</b></Form.Label>
                                    <Form.Control type="text" value={address1} onChange={(e)=>{setAddress1(e.target.value)}}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label><b>Address Line 2</b></Form.Label>
                                    <Form.Control type="text" value={address2} onChange={(e)=>{setAddress2(e.target.value)}}/>
                                </Form.Group>

                                <Row className="mb-3">

                                    <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label><b>State</b></Form.Label>
                                    <Form.Control type="text" value={state} onChange={(e)=>{setState(e.target.value)}}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label><b>City</b></Form.Label>
                                    <Form.Control type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label><b>Zip</b></Form.Label>
                                    <Form.Control type="text" value={zipcode} onChange={(e)=>{setZipcode(e.target.value)}}/>
                                    </Form.Group>
                                </Row>
                                <Button variant="dark"  style={{width: "100%", marginTop: "25px"}} onClick={checkoutHandler}>
                                    Confirm Order
                                </Button>
                            </Form>
                        </Col>

                        <Col sm={4} style={{marginRight: "20px"}}>
                        <br />
                        {/* Total Cost Breakdown */}
                            <Card border="dark" style={{height: "auto", margin: "40px 12px 20px 5px", padding: "25px 18px"}}> 
                                <text className="bill-heading">BILL DETAILS</text>
                                <hr /><br />
                                <Card.Subtitle style={{marginBottom: "40px", fontSize: "large"}}>
                                    <b>No. of items in cart: </b> <text style={{marginLeft: "40%", fontWeight: "bold"}}> {product.productCount}</text>
                                </Card.Subtitle>
                                <Card.Subtitle style={{marginBottom: "28px"}}>
                                    Subtotal <text style={{marginLeft: "58%"}}><i className="fa fa-inr"></i> {(product.total).toFixed(2)}</text>
                                </Card.Subtitle>
                                <Card.Subtitle style={{marginBottom: "28px"}}>
                                    Processing fee @ 2% <text style={{marginLeft: "37%"}}><i className="fa fa-inr"></i> {(product.total*0.02).toFixed(2)}</text>
                                </Card.Subtitle>
                                
                                {/* 
                                
                                IMPORTANT!!!
                                
                                SGST and CGST are 18% of processing fee, NOT 18% of SUBTOTAL 
                                
                                */}

                                <Card.Subtitle style={{marginBottom: "28px"}}>
                                    SGST @ 9% <text style={{marginLeft: "53%"}}><i className="fa fa-inr"></i> {(product.total*0.09*0.02).toFixed(2)}</text>
                                </Card.Subtitle>
                                <Card.Subtitle style={{marginBottom: "28px"}}>
                                    CGST @ 9% <text style={{marginLeft: "53%"}}><i className="fa fa-inr"></i> {(product.total*0.09*0.02).toFixed(2)}</text>
                                </Card.Subtitle>
                                <hr />
                                <text className="total">Total <text className="total-amt"><i className="fa fa-inr"></i> {(product.total*1.0236).toFixed(2)}</text></text>
                            </Card>
                        </Col>
                        </Row>
                    </Container>
            </>
               
        )
    
}

export default CheckoutScreen
