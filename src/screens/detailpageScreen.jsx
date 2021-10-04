import React from "react";
import '../css/Details.css';
import Navbar2 from '../components/Navbar2';
import ImageSlider from "../components/ImageSlider";
const Sliderdata=[
    {image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'},
    {image: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'},
    {image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'}]


const Details =({Sliderdata})=>{
        return(
            <div>
                <Navbar2 />
                <ImageSlider slides = {Sliderdata}/>
                <button>Add to cart</button>
            </div>
        )
}





export default Details
