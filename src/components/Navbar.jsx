import React from "react";
import '../css/Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../assets/favicon-32x32.png'
import { Icon, TextField } from "@material-ui/core";

function Navbar(props) {
    const logoStyle = {
        textDecoration: 'none',
        color: 'whitesmoke',
        fontFamily: 'Roboto sans-serif',
        fontSize: '20px',
        paddingLeft: '5px'
    }
    
    const navStyle = {
        color: 'whitesmoke',
        textDecoration: 'none'
    }
    
    return (
      <nav>
          <Link to='/'><img src={logo} style={{ marginLeft: '1rem' }}  className='logo-img' alt='Logo' /></Link>
          <Link style={logoStyle} to='/'>
              <h3 className='logo'>FetchBook</h3>
          </Link>
          <Icon ></Icon>
          <TextField placeholder="search"/>
          <span className='navbarLinks'>
              <Link style={navStyle} to='/offers'><button className='btn btn-black'>Offers</button></Link>              
              <Link style={navStyle} to='/about'><button className='btn btn-black'>About</button></Link>
              <Link style={navStyle} to='/incart'><button className='btn btn-black'>Cart</button></Link>
              <Link style={navStyle} to='/login'><button className='btn btn-black'>Login</button></Link>
              <Link style={navStyle} to='/signup'><button className='btn btn-black'>Become a member</button></Link>
          </span>
      </nav>
    );
  }
  
  export default Navbar;