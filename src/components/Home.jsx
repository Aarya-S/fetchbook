import React, { Component, useState  } from "react";
import { Link } from "react-router-dom";
import '../css/Home.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Details from'./detail_page'
//import {bookdata} from '../dummydata/dummy.js'
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

 const Sliderdata=[
{image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'},
{image: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'},
{image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'},
{image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'}]

class populate extends Component{
  state={
    data
  }
  render(){
    return (
      <div>
        <ImageSlider slides={Sliderdata}/>
      <text>Feartured Products </text>
      <div className='booklist'>
        {this.state.data.map((book, index) => {
          console.log(book)
        return <Link to='/details'><Book_card key={book.id} {...book}></Book_card></Link>;
      })}
      </div>
      <text>We Offer</text>
      <div className='booklist'>
        {this.state.data.map((book, index) => {
          console.log(book)
        return <Link to='/details'><Book_card key={book.id} {...book}></Book_card></Link>;
      })}
      </div>
      </div>
    );
  }
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
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};



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





  
  export default populate;