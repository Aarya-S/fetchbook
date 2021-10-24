import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar2 from '../components/Navbar2';
import '../css/Cart.css'
import returnCart from "../helper/CartList";



// const cpi= 200;
const orderCount = 2;
const itemCost = 200;
const orderID = 123456;
const Total = 0;
// const Productvalue = new Array();
// const ProductCount = new Array();
// const CalculateTotal = (ProductValueArray)=>{
//     for(let i =0 ; i<ProductValueArray ; i++){
//         Total += ProductValueArray[i];
//     }
//     return Total;
// }




const Cart = () => {   
    const [List, setList] = useState(returnCart.returnCart())
    
    
        return(
            <div>
                <Navbar2 />
                
                <div className="current-items">
                    <header className="heading1">
                    Your Cart
                    </header>
                <hr />
                {/* Cart Render  */}
                {List === null || List.length===0?
                <div className="no-items">Items you add to your cart will appear here!</div>
                :<div>
                    {List.map((book)=>{
                    return <CartCard product={book}/>
                    // console.log(book)
                    })}
                    <div onClick={()=>{
                        returnCart.DeleteCart();
                        setList([])
                        alert('Item Removed From the Cart')}}>
                        Empty the Cart
                    </div>
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
                        <button className="checkout-btn" onClick={()=>{console.log(
                           'Total Count ' + List.length + '\n'
                           +''
                        )}}>Proceed to Checkout</button>
                        </div>
                        </Col>
                    </Row>
                </Container>
                </div>
                }
                {/* Dynamically add any number of items */}
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

const CartCard = ({product})=>{
    const [count, setCount] = useState(1)
    
    return(
        <Card style={{height: "175px", margin: "20px 30px"}}>
                    <Container>       
                        <Row className="justify-content-start align-items-center">
                        <Col sm={2}>
                        <Link to={{pathname : `/details/${product._id}`,state :product}}>
                            <Card.Img src={product.img} variant="left" style={{height: "150px", width:"150px", marginTop:"12.5px", marginLeft: "12.5px"}} />
                        </Link>
                            </Col>
                            
                            <Col sm={6}>
                                <Card.Title>{product.bookname}</Card.Title>
                                <Card.Subtitle>{product.tag.sellerid}</Card.Subtitle>
                                <Card.Subtitle>{product.tag.address}</Card.Subtitle>

                                {/* <div className="description">{product.description}</div> */}
                            </Col>
                            <Col sm={3}>
                                    <button className="add-subtract">
                                        <i className="fa fa-minus" onClick={()=>{count!=1?setCount(count-1):setCount(1)}}></i>
                                    </button>
                                    <text className="count-product">{count}</text>
                                    <button className="add-subtract">
                                        <i className="fa fa-plus" onClick={()=>{count<10?setCount(count+1):setCount(10)}}></i>
                                    </button>
                            </Col>

                            <Col sm={1}>
                                <nobr>
                                    <i className="fa fa-inr"></i>
                                    {product.tag.offer?
                                    <text className="final-price">{count*product.tag.offered_price}</text>:
                                    <text className="final-price">{count*product.tag.price}</text>}
                                </nobr>
                            </Col>

                        </Row>
                    </Container>
                </Card>
    )
}

export default Cart
