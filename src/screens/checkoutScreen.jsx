import React from "react";
import { useLocation } from "react-router";
import Navbar2 from '../components/Navbar2';
import '../css/CheckoutScreen.css'
import { Form, Col, Row, Button, Card, Container } from 'react-bootstrap'
import { CardActionArea } from "@material-ui/core";
import { auth } from "../firebaseconfig";

const CheckoutScreen = ()=>{   
    let location = useLocation();
    let product  = location.state;
    console.log(product);
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
                                    <Form.Control type="text" placeholder="Your name here" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label><b>Address Line 1</b></Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label><b>Address Line 2</b></Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Row className="mb-3">

                                    <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label><b>State</b></Form.Label>
                                    <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label><b>City</b></Form.Label>
                                    <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label><b>Zip</b></Form.Label>
                                    <Form.Control />
                                    </Form.Group>
                                </Row>
                                <Button variant="dark" type="submit" style={{width: "100%", marginTop: "25px"}}>
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
                                    <b>No. of items in cart: </b> <text style={{marginLeft: "45%", fontWeight: "bold"}}> {product.productCount}</text>
                                </Card.Subtitle>
                                <Card.Subtitle style={{marginBottom: "28px"}}>
                                    Subtotal <text style={{marginLeft: "60%"}}><i className="fa fa-inr"></i> {product.total}</text>
                                </Card.Subtitle>
                                <Card.Subtitle style={{marginBottom: "28px"}}>
                                    Processing fee @ 2% <text style={{textAlign:"right"}}><i className="fa fa-inr"></i> {product.total*0.02}</text>
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
