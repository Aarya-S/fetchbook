import '../css/Bookcard.css';
import React from 'react'
import BookCard from "../components/Bookcard";
import { Link } from 'react-router-dom';
import '../css/Home.css';


const RenderBook =({state})=>{
    return(
        <div  className='booklist'>
           {state.map((book) => {
  return <Link to={{pathname : `/details/${book._id}`,state :book}}><BookCard key={book._id} book={book}></BookCard></Link>;
    })}    
        </div>
    )
}

export default RenderBook