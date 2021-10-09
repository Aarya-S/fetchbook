import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar2 from '../components/Navbar2';
import '../css/Signup.css';
const AddBookScreen = ()=>{   
        const [bookname, setBookname] = useState('')
        return(
    <div>
        <div><Link to="/sellerui"><button size="lg" className="btn btn-outline-dark back-btn"><i className="fa fa-angle-double-left"></i>  Back to DashBoard</button></Link></div>
        <div className="signup-form">
            <div className="form-box">
		<h2>Add Book Details</h2>
		<div className="or-seperator"></div>   
        <div className="form-group">
            <input type="text" class="form-control input-lg" name="bookname" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} placeholder="BookName" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="auther" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} placeholder="auther" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="sellername" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} placeholder="sellername" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="description" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} placeholder="description" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="publisher" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} placeholder="publisher" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="category" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} placeholder="category" required="required"/>
        </div>
        <div className="form-group">
            <input type="number" class="form-control input-lg" name="price" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} placeholder="price(Rs)" required="required"/>
        </div>
        <div className="form-group">
            <input type="text" class="form-control input-lg" name="address" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} placeholder="Seller address" required="required"/>
        </div>
        <div className="form-group">
            <input type="number" class="form-control input-lg" name="stock" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} placeholder="stock" required="required"/>
        </div>
        <div>
            <input type="checkbox" name="delivery_status" value={true} id={"delivery_status"}/>
            <label for="delivery_status">Do you have delivery Service?</label>
            <input type="checkbox" name="new_book" value={true} id={"new_book"}/>
            <label for="new_book">New Book?</label>
        </div>
        <div>
            <label>Book Condition?</label>
            <select name="condition" id="condition">
                <option value="good">good</option>
                <option value="better">better</option>
                <option value="best">best</option>
            </select>
        </div>
        <div>
            
        </div>
        <div className="form-group">
            <button class="btn btn-success btn-lg btn-block signup-btn">Add Book</button>
        </div>
        </div>
        </div>
    </div>
        )
    
}

export default AddBookScreen
