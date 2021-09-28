import React, { Component, useState  } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../css/Details.css';
import Navbar from './Navbar';

const book=[
    {image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'},
    {image: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'},
    {image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'}]


const Details=(()=>{
      return(
            <div>
                <Navbar/>
                <button>Add to cart</button>
            </div>
        )
    }
)




export default Details
