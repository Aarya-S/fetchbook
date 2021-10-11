import '../css/Bookcard.css';
import React from 'react'
import { Card } from 'react-bootstrap';


const BookCard=({ img, title, author, price_tag }) => {
    return (
     <Card style={{width: "16rem", height:"24rem", borderRadius: "10px 10px 10px 10px"}}>
        <Card.Img variant="top" src={img} style={{width:"15rem", height: "auto", borderRadius: "10px 10px 0 0"}}></Card.Img>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {author}
            </Card.Text>
            <Card.Text>
                {price_tag}
            </Card.Text>
        </Card.Body>
     </Card>
    );
};
export default BookCard
  