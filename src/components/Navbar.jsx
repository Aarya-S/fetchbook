import React from "react";
import '../css/Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../assets/favicon-32x32.png'

function Navbar() {
    const logoStyle = {
        textDecoration: 'none',
        color: 'whitesmoke',
        fontFamily: 'Roboto sans-serif',
        fontSize: '20px'
    }
    
    const navStyle = {
        color: 'whitesmoke',
        textDecoration: 'none'
    }
    
    return (
      <nav>
          <Link to='/'><img src={logo} className='logo-img' alt='Logo' /></Link>
          <Link style={logoStyle} to='/'>
              <h3 className='logo'>FetchBook</h3>
          </Link>
          <span className='navbarLinks'>
              <Link style={navStyle} to='/about'><button className='btn btn-black'>About</button></Link>
              <Link style={navStyle} to='/login'><button className='btn btn-black'>Login</button></Link>
          </span>
      </nav>
    );
  }
  
  export default Navbar;