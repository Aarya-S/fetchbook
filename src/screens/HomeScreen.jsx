import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/Home.css';
import BookCard from '../components/Bookcard'
import Footer from '../components/Footer';
import Navbar2 from "../components/Navbar2";
import ImageSlider from "../components/ImageSlider";

//import {bookdata} from '../dummydata/dummy.js'
const data = [
  {
   id: 1,
   img:
    'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
   title: 'I Love You to the Moon and Back',
   author: 'Amelia Hepworth',
   price_tag:"$30"
  },
  {
   id: 2,
   img:
    'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
   title: 'Our Class is a Family',
   author: 'Shannon Olsen',
   price_tag:"$80"
  },
  {
   id: 3,
   img:
    'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg',
   title: 'The Vanishing Half: A Novel',
   author: 'Brit',
   price_tag:"$60"
  },
  {
    id: 1,
    img:
     'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
    price_tag:"$50"
   }
 ]

 const Sliderdata=[

{image: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'},
{image:'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'},
{image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'}]


class populate extends Component{
  state={
    data,
  };
  render(){
    return (
      <>
        <Navbar2 />
        <ImageSlider slides={Sliderdata}/>
      <div className='title'> Featured Products </div>
      <RenderBooks />
      <div className='title'> We Offer  </div>
      <RenderBooks />
       <Footer/>
      </>
    );
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


  
  export default populate;