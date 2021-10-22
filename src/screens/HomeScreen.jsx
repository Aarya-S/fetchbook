import React, { useState } from "react";
import '../css/Home.css';
import Footer from '../components/Footer';
import Navbar2 from "../components/Navbar2";
import ImageSlider from "../components/ImageSlider";
import ProductAction from "../actions/productActions";
import BookRenderer from "../components/BookRenderer";

//import {bookdata} from '../dummydata/dummy.js'

let result = ProductAction('PRODUCT_GET_RANDOM','')
 const Sliderdata=[
{image: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'},
{image:'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'},
{image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'}]


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