import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Home.css';
import BookCard from '../components/Bookcard'
import Footer from '../components/Footer';
import Navbar2 from "../components/Navbar2";
import ImageSlider from "../components/ImageSlider";
import ProductAction from "../actions/productActions";
import BookRenderer from "../components/BookRenderer";

//import {bookdata} from '../dummydata/dummy.js'

let result = ProductAction('PRODUCT_GET_RANDOM','')
 const Sliderdata=[

{image: 'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/44_inr.png'},
{image:'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/40_inr.png'},
{image:'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/41_inr.png'}]


const Populate =()=>{
  const [books, setbooks] = useState([])
  result.then((result)=>{
    setbooks(result)
  }).catch((e)=>{console.log(e)})
    return (
      <>
        <Navbar2 />
        <ImageSlider slides={Sliderdata}/>
      <div className='title'> Featured Products </div>
      <BookRenderer state={books}/>
       <Footer/>
      </>
    );
}




  
  export default Populate;