import '../css/Bookcard.css';
import React from 'react'
import { Card } from 'react-bootstrap';


const BookCard=({book}) => {
    return (
     <Card style={{width: "16rem", height:"24rem", borderRadius: "10px 10px 10px 10px"}}>
        <Card.Img variant="top" src={book.img} style={{width:"15rem", height: "auto", borderRadius: "10px 10px 0 0"}}></Card.Img>
        <Card.Body>
            <Card.Title>{book.bookname}</Card.Title>
            <Card.Text>
                {book.author}
            </Card.Text>
            <Card.Text>
                ${book.tag.price}
            </Card.Text>
            {book.tag.offer===true?
            <Card.Text>
                Offered Product
            </Card.Text>:''
            }
        </Card.Body>
     </Card>
    );
};
export default BookCard
  