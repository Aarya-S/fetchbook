import '../css/Bookcard.css';
import React from 'react'
import { Card } from 'react-bootstrap';


const BookCard=({book}) => {
    return (
     <Card style={{width: "16rem", height:"26rem", borderRadius: "10px 10px 10px 10px"}}>
        <Card.Img variant="top" src={book.img} style={{width:"16rem", height: "17rem", borderRadius: "10px 10px 0 0"}}></Card.Img>
        <Card.Body style={{marginTop: "5%"}}>
            <Card.Title>{book.bookname}</Card.Title>
            <Card.Text>
                {book.author}
            </Card.Text>
            {book.tag.offer===true?
            <Card.Text>
                <s><i className="fa fa-inr"></i>
                {book.tag.price}</s>
                {' '}
                <strong><i className="fa fa-inr"></i>
                {book.tag.offered_price}</strong>
            </Card.Text>:
            <Card.Text>
                <i className="fa fa-inr"></i>
                {book.tag.price}
            </Card.Text>
            }
        </Card.Body>
     </Card>
    );
};
export default BookCard
  