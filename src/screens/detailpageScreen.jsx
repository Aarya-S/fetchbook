import React from "react";
import '../css/Details.css';
import Navbar2 from '../components/Navbar2';
import ImageSlider from "../components/ImageSlider";
import { data } from "../dummydata/dummy";
const Sliderdata=[
    {image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'},
    {image: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'},
    {image:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg'}]

const product  = data[0];
const Details =()=>{
        return(
            <div>
                <Navbar2 />
                <ImageSlider slides = {Sliderdata}/>
                <button>Add to cart</button>
                <h1>{product.bookname}</h1>
                <h1>{product.sellername}</h1>
                <h1>{product.description}</h1>
                <h1>{product.auther}</h1>
                <h1>{product.publisher}</h1>
                <h1>{product.stock}</h1>
                <h1>{product.tag.address}</h1>
                <h1>{product.tag.category}</h1>
                <h1>{product.tag.condition}</h1>
                <h1>{product.tag.delivery_status}</h1>
                <h1>{product.tag.instock}</h1>
                <h1>{product.tag.new}</h1>
                <h1>{product.tag.price}</h1>

            </div>
        )
}






export default Details
