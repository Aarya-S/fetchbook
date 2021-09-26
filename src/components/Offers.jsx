import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

const data = [
    {
     id: 1,
     img:
      'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
     title: 'I Love You to the Moon and Back',
     author: 'Amelia Hepworth',
    },
    {
     id: 2,
     img:
      'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
     title: 'Our Class is a Family',
     author: 'Shannon Olsen',
    },
    {
     id: 3,
     img:
      'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg',
     title: 'The Vanishing Half: A Novel',
     author: 'Brit',
    },
    {
      id: 1,
      img:
       'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
      title: 'I Love You to the Moon and Back',
      author: 'Amelia Hepworth',
     }
   ]

class Offers extends Component{
    state={

    }
    render(){
        return(
            <div>
                <RenderBooks/>
            </div>
        )
    }
}
const RenderBooks=(state)=>{
    return(
    <div className='booklist'>
    {data.map((book, index) => {
      
    return <Link to='/details'><Book_card key={book.id} {...book}></Book_card></Link>;
  })}</div>
    )
  }

  const Book_card = ({ img, title, author }) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) => {
     console.log(e);
     console.log(e.target);
     alert('hello world');
    };
    const complexExample = (author) => {
     console.log(author);
    };
    return (
     <article
      className='book'
     >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
       reference example
         </button>
      <button type='button' onClick={() => complexExample(author)}>
       more complex example
         </button>
     </article>
    );
   };
  

export default Offers
