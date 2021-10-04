import '../css/Bookcard.css';
import React from 'react'
import { Card } from 'react-bootstrap';


const BookCard=({ img, title, author,price_tag }) => {
    return (
     <Card style={{width: "18rem", height:"30rem"}}>
        <Card.Img variant="top" src={img}></Card.Img>
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
  