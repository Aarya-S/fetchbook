import React, { Component, useState  } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../css/Home.css';
import Details from'./detail_page'
import background from '../assets/10.jpg'
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
{image:'https://m.media-amazon.com/images/I/61bH1sP5DGL._SX1500_.jpg'},
{image: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'},
{image:'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'},
{image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'}]


class populate extends Component{
  state={
    data,
  };
  render(){
    return (
      <div style={{backgroundImage: `url(https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`}}>
        <ImageSlider slides={Sliderdata}/>
      <text style={{ fontWeight: 'bold',color: 'black',textAlign :'center'}}>'  Featured Products </text>
      <RenderBooks/>
      <text style={{ fontWeight: 'bold',color: 'black'}}>'   We Offer</text>
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
    
  return <Link to='/details'><Book_card key={book.id} {...book}></Book_card></Link>;
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



const Book_card = ({ img, title, author,price_tag }) => {
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
    className='bookcard_container'
   >
    <img src={img} alt='book_image' />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <h4>{price_tag}</h4>
   </article>
  );
 };





  
  export default populate;