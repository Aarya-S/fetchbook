import React from 'react'
import '../Navbar.css'


const Navbar = () => {
    
    return (
        
        <div className='navbar'>
            <div className="logo-heading">
            <a href='../index.html'>
                <h1>Fetchbook</h1>
            </a>
            </div>
        
            <div className='navbar-redirect'>
            <ul>
                <a className='navbar-links'><li>HOT! Deals</li></a>
                <a className='navbar-links'><li>My Favourites</li></a>
                <a className='navbar-links'><li>Seller Program</li></a>
                <a className='navbar-links'><li>Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i></li></a>
            </ul>
            </div>
            
            <a href='../loginPage.html'><button className='btn-black'>Login/Signup</button></a>
            
        </div>
    )
}

export default Navbar
