import React from 'react'
import Navbar2 from '../components/Navbar2'
import '../css/Receipt.css';

const receiptPage = () => {
    return (
        <>
            <Navbar2 />
            <br /><br />
            <div style={{marginLeft: "18px", marginTop: "18px", marginRight: "18px"}}>
                <h3 className="thank-you">Thank you for your purchase!</h3>
                <hr />
                <div style={{fontSize: "18px", marginTop: "30px"}}>
                    <text>Your order with <b>ORDER ID: 123456</b> was registered with <b>SellerName</b> !</text>
                    <br /><br />
                    <text>To get in touch with the seller, <button className="contact-seller">click here</button></text>
                    <br /><br />
                    <text><b>You can also contact them on the following..</b></text><br /><br />
                    <text><b><u>Seller Phone Number:</u></b> 1234567890</text>
                </div>
            </div>
        </>
    )
}

export default receiptPage
