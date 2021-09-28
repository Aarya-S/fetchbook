import React, { Component, useState  } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../css/Home.css';
import BookCard from './Bookcard'
import Navbar from './Navbar';
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
      <div className='parentHome'>
        <Navbar/>
        <ImageSlider slides={Sliderdata}/>
      <text style={{ fontWeight: 'bold',color: 'black',textAlign :'center', borderBottom: "10px",borderBottomColor:"red"}}> Featured Products </text>
      <RenderBooks />
      <text style={{ fontWeight: 'bold',color: 'black' ,textAlign :'center'}}> We Offer </text>
      <RenderBooks/>
      <button>Show more</button>
      </div>
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

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {Sliderdata.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Link to='/offers'><img src={slide.image} alt='travel image' className='image' /></Link>
            )}
          </div>
        );
      })}
    </section>
  );
};








  
  export default populate;