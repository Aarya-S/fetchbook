import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link,useParams } from "react-router-dom";
import ProductAction from "../actions/productActions";
import BookCard from "../components/Bookcard";
import RenderBook from "../components/BookRenderer";
import Navbar2 from '../components/Navbar2';
import '../css/AfterSearch.css'


const AfterSearch = ({match})=>{ 
    const [render, setRender] = useState([])
    const [search, setSearch] = useState('')
    const [condition, setCondition] = useState('')
    const [deliveryStatus, setDeliveryStatus] = useState(false)
    const [newBook, setNewBook] = useState('')
    const [offered, setOffered] = useState('')
    const [instock, setInstock] = useState()
    const [category, setCategory] = useState('')
    const deliveryhandle =()=>{
        setDeliveryStatus(!deliveryStatus)
        console.log(deliveryStatus)
    }
    let {searchedbook} = useParams();
    if(search!=searchedbook){
        setSearch(searchedbook)
        setRender([])
    }
    
    if(render.length === 0 ){
        let getSearchedBooks = ProductAction('SEARCH_BOOK_REQUEST',searchedbook)
        getSearchedBooks.then((result)=>{setRender(result);}).catch((err)=>{console.log(err)})}
        

        return(
            <div>
                <Navbar2 />
                <div>
                    <input type="checkbox" name="delivery_status" checked={deliveryStatus} onClick={deliveryhandle} id={"delivery_status"} className="check-box" />
                    <label for="delivery_status" className="label-check">Do you have delivery Service?</label><br />
                    <input type="checkbox" name="newBook" checked={newBook} onClick={deliveryhandle} id={"new Book"} className="check-box" />
                    <label for="newBook" className="label-check">Do you have delivery Service?</label><br />
                    <input type="checkbox" name="offered" checked={offered} onClick={deliveryhandle} id={"Offered"} className="check-box" />
                    <label for="offered" className="label-check">Do you have delivery Service?</label><br />
                    <input type="checkbox" name="inStock" checked={instock} onClick={deliveryhandle} id={"inStock"} className="check-box" />
                    <label for="inStock" className="label-check">Do you have delivery Service?</label><br />
                    <input type="checkbox" name="category" checked={category} onClick={deliveryhandle} id={"delivery_status"} className="check-box" />
                    <label for="category" className="label-check">Do you have delivery Service?</label><br />
                    
                </div>
                {render.length === 0?`No Search For ${searchedbook}`:
                 <RenderBook state = {render}/>}
            </div>
        )
    
}


export default AfterSearch
