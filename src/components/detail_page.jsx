import React, { Component, useState  } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../css/Details.css';
import Navbar from './Navbar';

const Sliderdata=[
    {image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'},
    {image: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'},
    {image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'}]


class Details extends Component{
    state={

    }
    render(){
        return(
            <div>
                <Navbar/>
                <Book_imgs slides={Sliderdata}/>
                <button>Add to cart</button>
            </div>
        )
    }
}


const Book_imgs = ({ slides }) => {
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
      <section className='slider_book'>
        <FaArrowAltCircleLeft className='left-arrow-book' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow-book ' onClick={nextSlide} />
        {Sliderdata.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide-book active' : 'slide-book'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='travel image' className='image_book' />
              )}
            </div>
          );
        })}
      </section>
    );
  };



export default Details
