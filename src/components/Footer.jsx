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
                    <h4>contact us</h4>
                    <ul className="list-unstyled">
                        <li>+123456789</li>
                        <li>ADDRESS</li>
                        <li>MUMBAI XYZ</li>
                    </ul>
                </div>
                {/* Column2 */}
                <div className="col">
                    <h4>stuff</h4>
                    <ul className="list-unstyled">
                        <li>first </li>
                        <li>second</li>
                        <li>third</li>
                    </ul>
                </div>
                {/* Column3 */}
                <div className="col">
                    <h4>another column</h4>
                    <ul className="list-unstyled">
                        <li>facebook</li>
                        <li>insta</li>
                        <li>twiter</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} FETCHBOOK.COM | ALL right reserved | Terms of Service | Privacy
                </p>
            </div>

        </div>
    </div>
)
}

export default Footer;