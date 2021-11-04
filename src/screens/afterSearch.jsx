
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
                  
<div class="parent">
<div className="div1"> 
                
<section>
 

    <h5><b> Filters</b></h5>
    
    <div className="container">
            <div className="row">
                {/* Column1 */}
                <div className="col">

      <h6 class="font-weight-bold mb-3"><u>Condition</u></h6>

      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="new"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="new">New</label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="used"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="used">Used</label>
      </div>
      <div class="form-check pl-0 mb-3 pb-1">
        <input type="checkbox" class="form-check-input filled-in" id="renewed"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="renewed">Renewed</label>
      </div>
      </div>
      </div>
      


      <h6 class="font-weight-bold mb-3"><u>Delivery</u></h6>

      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="new"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="new">Deliverable</label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="used"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="used">Not deliverable</label>
        </div>
        
    

      <h6 class="font-weight-bold mb-3"><u>Only Discounted Books</u></h6>

      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="used"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="used">Offers</label>
        </div>

    

      <h6 class="font-weight-bold mb-3"><u>Stock Status</u></h6>

      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="used"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="used">In Stock</label>
        </div>
        <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="used"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="used">Out of Stock</label>
        </div>

      <h6 class="font-weight-bold mb-3"><u>Category</u></h6>
      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="used"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="used">Fiction</label>
        </div>
        <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="used"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="used">Non-Fiction</label>
        </div>
        <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="used"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="used">Biographies</label>
        </div>
        <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="used"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="used">Kids</label>
        </div>
        <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="used"/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="used">Educational</label>
        </div>
        

      
      
        </div>
    </section>
    </div> 
    
    
  

    <div className="div2">                  
                </div>
                {render.length === 0?`No Search For ${searchedbook}`:
                 <RenderBook state = {render}/>}
            </div>
            </div>
            </div>
        )
    
}


export default AfterSearch
