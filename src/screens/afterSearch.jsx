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
                {render.length === 0?`No Search For ${searchedbook}`:
                 <RenderBook state = {render}/>}
            </div>
        )
    
}


export default AfterSearch
