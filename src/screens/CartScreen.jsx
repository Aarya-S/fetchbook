import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Navbar2 from '../components/Navbar2';
import '../css/Cart.css'


const productCount = 1;
const cpi= 200;
const orderCount = 2;
const itemCost = 200;
const orderID = 123456;

function calculateCost(productCount, cpi){
    const price= (productCount) * (cpi)
    return price
}

const Cart = () => {   
        return(
            <div>
                <Navbar2 />
                
                <div className="current-items">
                    <header className="heading1">
                    Your Cart
                    </header>
                <hr />

                {/* Add condition for no items in cart */}
                {/* If no items, show this */}
                <div className="no-items">Items you add to your cart will appear here!</div>

                
                {/* Dynamically add any number of items */}
                <Card style={{height: "175px", margin: "20px 30px"}}>
                    <Container>       
                        <Row className="justify-content-start align-items-center">
                            <Col sm={2}>
                                <Card.Img variant="left" style={{height: "150px", width:"150px", marginTop:"12.5px", marginLeft: "12.5px"}} />
                            </Col>
                            
                            <Col sm={6}>
                                <Card.Title>Product Name which may be very long</Card.Title>
                                <Card.Subtitle>Seller Name, Location</Card.Subtitle>
                                <div className="description">Product Description, things like tags</div>
                            </Col>

                            <Col sm={3}>
                                    <button className="add-subtract">
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    <text className="count-product">{productCount}</text>
                                    <button className="add-subtract">
                                        <i className="fa fa-plus"></i>
                                    </button>
                            </Col>

                            <Col sm={1}>
                                <nobr>
                                    <i className="fa fa-inr"></i>
                                    <text className="final-price">{calculateCost(productCount, cpi)}</text>
                                </nobr>
                            </Col>

                        </Row>
                    </Container>
                </Card>
                
                <Container>
                    <Row>
                        <Col sm={{span: 2, offset: 10}}>
                            <b>TOTAL:</b> 
                            <text className="total-amount"><i className="fa fa-inr"></i>{" "}800</text>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{span: 10, offset: 1}}>
                        <div className="checkout-btn-row">
                        <button className="checkout-btn">Proceed to Checkout</button>
                        </div>
                        </Col>
                    </Row>
                </Container>
                </div>

                {/* Order History Section */}
                <div className="order-history">
                    <header className="heading1">
                    Order History
                    </header>
                <hr />

                {/* Add condition for no order history */}
                {/* If no items, show this */}
                <div className="no-items">You have no order history!</div>

                
                {/* Dynamically add any number of items */}
                <Card style={{height: "175px", margin: "20px 30px"}}>
                    <Container>       
                        <Row className="justify-content-start align-items-center">
                            <Col sm={2}>
                                <Card.Img variant="left" style={{height: "150px", width:"150px", marginTop:"12.5px", marginLeft: "12.5px"}} />
                            </Col>
                            
                            <Col sm={6}>
                                <Card.Title>Product Name which may be very long</Card.Title>
                                <Card.Subtitle>Seller Name, Location</Card.Subtitle>
                                <div className="description">Product Description, things like tags</div>
                            </Col>

                            <Col sm={2}>
                                {orderCount}{"  *   "}<i className="fa fa-inr"></i>{" "}{itemCost}{" = "}<i className="fa fa-inr"></i>{" "}{orderCount*itemCost}
                            </Col>

                            <Col sm={2}>
                                {/* Status of Order */}
                                <div className="text-center">
                                    {/* Delivered, Processing, Out for Delivery */}
                                    <b>Delivered</b> <br />
                                    <text><b>ORDER ID:</b> {orderID}</text>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </Card>
                </div>
            </div>
        )
    
}

export default Cart
