import React from "react";
import '../css/Footer.css'
import {Link} from 'react-router-dom'
import logo from '../assets/favicon-32x32.png'
import { Icon, TextField } from "@material-ui/core";  


const Footer = () => {
return(
    <div className="main-footer">
        <div className="container">
            <div className="row">
                {/* Column1 */}
                <div className="col">
                    <h4>Contact Us</h4>
                    <ul className="list-unstyled">
                        <li ><a href="tel:9004960511">+919004960511</a></li>
                        <li><a href="https://mail.google.com">fetchbook@gmail.com</a></li>
                        <li><a href="https://www.google.com/maps/place/Ramrao+Adik+Institute+of+Technology/@19.0443847,73.0257006,15z/data=!4m5!3m4!1s0x0:0x95e9ca007676b993!8m2!3d19.0443847!4d73.0257006">Nerul, Navi Mumbai, India</a></li>
                    </ul>
                </div>
                {/* Column2 */}
                <div className="col">
                    <h4>Our Company</h4>
                    <ul className="list-unstyled">
                        <li><a>Our Team</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Jobs/Career</a></li>
                    </ul>
                </div>
                {/* Column3 */}
                <div className="col">
                    <h4>Find us on</h4>
                    <ul className="list-unstyled">
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                        <li><a href="https://www.whatsapp.com">Whatsapp</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} <Link to='/'>fetchbook.com </Link>|<Link to='/About'> All rights reserved</Link> |<Link to='/About'> Terms of Service </Link>| <Link to='/About'>Privacy</Link>
                </p>
            </div>

        </div>
    </div>
)
}

export default Footer;