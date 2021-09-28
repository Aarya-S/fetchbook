import React from "react";
import { Component } from "react";
import Navbar from './Navbar';
import '../css/Cart.css'

class Cart extends Component{
    state={

    }
    render(){
        return(
            <div className='parentCart'>
                <Navbar/>
                Cart Page
            </div>
        )
    }
}

export default Cart
