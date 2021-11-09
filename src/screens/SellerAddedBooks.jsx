import React, { useState} from "react";
import Navbar2 from "../components/Navbar2";
import { Button, Card, Col, Container, Row, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import '../css/Cart.css'
import returnCart from "../helper/CartList";
import returnOrderHistory from "../helper/OrderHistoryList";
import { auth } from "../firebaseconfig";
import sellerAction from "../actions/sellerAction";
import ProductAction from "../actions/productActions";


const SellerAddedBooks = () => {
    const [List, setList] = useState(null);
    const [loading, setLoading] = useState(false)
    if(auth.currentUser && List === null){
    let Fetchbooks = sellerAction('SELLER_BOOK_REQUEST',auth.currentUser.email);
    Fetchbooks.then(data => {
        setList(data)
        console.log(data)
    }).catch(err => {
        console.log(err);
    });}

    const removehandler =(id)=>{
        setList(null)
        setLoading(true)
        const result = ProductAction("DELETE_BOOK_REQUEST",id)
        if(result){
            setLoading(false)
            alert('Book Removed')
        }
    }
    const BookCard = ({book})=>{
        return (
            <Card style={{height: "175px", margin: "20px 30px"}}>
                        <Container>       
                            <Row className="justify-content-start align-items-center">
                            <Col sm={2}>
                           
                                <Card.Img src={book.img} variant="left" style={{height: "150px", width:"150px", marginTop:"12.5px", marginLeft: "12.5px"}} />
                                </Col>
                                
                                <Col sm={6}>
                                    <Card.Title>{book.bookname}</Card.Title>
                                    <Card.Subtitle>{book.auther}</Card.Subtitle>
                                    <Card.Subtitle>{book.publisher}</Card.Subtitle>
                                    <Card.Subtitle>Stock : {book.tag.instock}</Card.Subtitle>
                                    <Button variant="link" size="sm" style={{ margin: "5px 0px", padding: "0px 0px"}} onClick={()=>{removehandler(book._id)}} >Remove Item</Button>
    
                                    {/* <div className="description">{product.description}</div> */}
                                </Col>
                                
    
                                <Col sm={2}>
                                    <nobr>
                                        <i className="fa fa-inr"></i>
                                        <span className="price">{book.tag.price}</span>
                                    </nobr>
                                </Col>
    
                            </Row>
                        </Container>
                    </Card>   
        )
    }
    return (
        <div>
            <Navbar2 />
            <header className="heading1">
                   Books Added By You
            </header>
            <hr />
            {console.log(List)}
            {loading?'LOADING ....':
            <div>
                {List===[] && auth.currentUser || List===null? 'No Books Added':List.map(book => <BookCard book={book} />)}
            </div>}
        </div>
    );
}

export default SellerAddedBooks;