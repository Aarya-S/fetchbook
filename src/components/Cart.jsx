import React from "react";
import { Component } from "react";
import Navbar2 from './Navbar2';
import '../css/Cart.css'

class Cart extends Component{
    state={

    }
    render(){
        return(
            <div className='parentCart'>
                <Navbar2 />
                Cart Page
            </div>
        )
    }
}

export default Cart
