import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import BookCard from "./Bookcard";
import Navbar from './Navbar';
import '../css/Offers.css'

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
            <div className="parentOffers">
              <Navbar/>
                <RenderBooks/>
            </div>
        )
    }
}
const RenderBooks=(state)=>{
    return(
    <div className='booklist'>
    {data.map((book, index) => {
      
    return <Link to='/details'><BookCard key={book.id} {...book}></BookCard></Link>;
  })}</div>
    )
  }

 

export default Offers
