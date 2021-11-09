import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar2 from '../components/Navbar2';
import { useHistory } from "react-router";
import '../css/Cart.css'
import returnCart from "../helper/CartList";
import returnOrderHistory from "../helper/OrderHistoryList";
import { auth } from "../firebaseconfig";

// let history = useHistory();
const CalculateTotalnProceed = (ProductArray)=>{
    let finalPrice = 0;
    let Total = 0;
    let count = 0;
    for(let i =0 ; i<ProductArray.length ; i++){
        count = count + ProductArray[i].count;
        if(ProductArray[i].tag.offer){
        finalPrice = ProductArray[i].count*ProductArray[i].tag.offered_price
    }
        else{
            finalPrice = ProductArray[i].count*ProductArray[i].tag.price
        }
        Total = Total + finalPrice;
    }
    return {total : Total, productCount : count,list : ProductArray}
}



const Cart = () => {   
    let history = useHistory();
    const [List, setList] = useState(returnCart.returnCart())
    const [OrderHistory, setOrderHistory] = useState(returnOrderHistory.returnOrderHistory())
    const checkoutHandler = () => {
        if(auth.currentUser){
        let CheckOrderStuff = CalculateTotalnProceed(List);
        console.log(CheckOrderStuff)
        history.push({
            pathname: "/checkout",
            state: {
                total: CheckOrderStuff.total,
                productCount: CheckOrderStuff.productCount,
                list: CheckOrderStuff.list
            }
        });}
        else{
            alert("Please Login to Proceed")
        }
    }
    const removeByArrayItem = (request,value)=>{
        if(request==="cart"){
           let newList = List.filter(item => item._id !== value);
           returnCart.updateCartList(newList);
           setList(newList);    
        }else{
            let newOrderList = OrderHistory.filter(item => item._id !== value);
            localStorage.setItem("orderHistory",JSON.stringify(newOrderList));
            setOrderHistory(newOrderList);
        }
        
    }

    const CartCard = ({book})=>{
        const [count, setCount] = useState(1)
        const setCounttoProduct = ()=>{
            book.count = count;
        }
        return(
            <Card style={{height: "175px", margin: "20px 30px"}}>
                        <Container>       
                            <Row className="justify-content-start align-items-center">
                            <Col sm={2}>
                            <Link to={{pathname : `/details/${book._id}`,state :book}}>
                                <Card.Img src={book.img} variant="left" style={{height: "150px", width:"150px", marginTop:"12.5px", marginLeft: "12.5px"}} />
                            </Link>
                                </Col>
                                
                                <Col sm={6}>
                                    <Card.Title>{book.bookname}</Card.Title>
                                    <Card.Subtitle>{book.tag.sellerid}</Card.Subtitle>
                                    <Card.Subtitle>{book.tag.address}</Card.Subtitle>
                                    <Button variant="link" size="sm" style={{ margin: "5px 0px", padding: "0px 0px", color: "red" }} onClick={()=>{removeByArrayItem("cart",book._id)}}>Remove Item</Button>
    
                                    {/* <div className="description">{product.description}</div> */}
                                </Col>
                                <Col sm={3}>
                                        <button className="add-subtract">
                                            <i className="fa fa-minus" onClick={()=>{count!=1?setCount(count-1):setCount(1)}}></i>
                                        </button>
                                        {setCounttoProduct()}
                                        <text className="count-product">{count}</text>
                                        <button className="add-subtract">
                                            <i className="fa fa-plus" onClick={()=>{count<10?setCount(count+1):setCount(10)}}></i>
                                        </button>
                                </Col>
    
                                <Col sm={1}>
                                    <nobr>
                                        <i className="fa fa-inr"></i>
                                        {book.tag.offer?
                                        <text className="final-price">{count*book.tag.offered_price}</text>:
                                        <text className="final-price">{count*book.tag.price}</text>}
                                    </nobr>
                                </Col>
    
                            </Row>
                        </Container>
                    </Card>     
        )
    }
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
                    return  <CartCard book={book}/> 
                     
                    // console.log(book)
                    })}
                    <div style={{marginLeft: "25px"}}>
                        <Button variant="outline-danger" onClick={()=>{
                        returnCart.DeleteCart();
                        setList([])
                        alert('Item Removed From the Cart')}}>Empty the Cart</Button>
                    </div>
                    <Container>
                    <Row>
                        <Col sm={{span: 10, offset: 1}}>
                        <div className="checkout-btn-row">
                        <button className="checkout-btn" onClick={()=>{
                            checkoutHandler()
                        }}>Proceed to Checkout</button>
                        </div>
                        </Col>
                    </Row>
                </Container>
                </div>
                }
                </div>
                {/* Order History Section */}
                {auth.currentUser?
                <div className="order-history">
                    <header className="heading1">
                    Order History
                    </header>
                    <hr />
                
                {OrderHistory === null || OrderHistory.length===0?
                    <div className="no-items">You have no order history!</div>:
                OrderHistory.map((book)=>{
                    return (
                    <Card style={{height: "175px", margin: "20px 30px"}}>
                        <Container>       
                            <Row className="justify-content-start align-items-center">
                                <Col sm={2}>
                                    <Card.Img variant="left" src={book.img} style={{height: "150px", width:"150px", marginTop:"12.5px", marginLeft: "12.5px"}} />
                                </Col>
                                
                                <Col sm={6}>
                                    <Card.Title>{book.name}</Card.Title>
                                    <Card.Subtitle>{book.tag.sellerid}</Card.Subtitle>
                                    <Card.Subtitle>Qnty : - {book.tag.count}</Card.Subtitle>
                                    <div className="description"> {book.tag.address}</div>
                                </Col>

                                <Col sm={2}>
                                    <i className="fa fa-inr"></i>
                                    {book.tag.offer?book.tag.offered_price*book.tag.count:book.tag.price*book.tag.count}
                                </Col>

                                <Col sm={2}>
                                    {/* Status of Order */}
                                    <div className="text-center">
                                        {/* Delivered, Processing, Out for Delivery */}
                                        <b>{book.tag.delivery?"Delivered":"Pending"}</b> <br />
                                        <text><b>ORDER ID:</b> {book.orderid}</text>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </Card>
                    )
                })}
                    
                </div>:''}
            </div>
        )
    
}



export default Cart
