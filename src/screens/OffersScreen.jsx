import React, { useState } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import ProductAction from "../actions/productActions";
import BookCard from "../components/Bookcard";
import RenderBook from "../components/BookRenderer";
import Navbar2 from '../components/Navbar2';
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

  let FetchOffers = ProductAction('PRODUCT_OFFERS_REQUEST','') 
const Offers =()=>{
  const [books, setbooks] = useState([])
  FetchOffers.then((result)=>{
    setbooks(result)
  })
  .catch((err)=>{console.log(err)})
  return(
    <div className="parentOffers">
      <Navbar2 />    
      <RenderBook state={books}/>  
    </div>
  )
}



 

export default Offers
