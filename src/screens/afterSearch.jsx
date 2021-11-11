
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link,useParams } from "react-router-dom";
import ProductAction from "../actions/productActions";
import BookCard from "../components/Bookcard";
import RenderBook from "../components/BookRenderer";
import Navbar2 from '../components/Navbar2';
import '../css/AfterSearch.css'
import { Card } from 'react-bootstrap';



const AfterSearch = ({match})=>{ 
    
    const [render, setRender] = useState([])
    const [search, setSearch] = useState('')
    const [goodcondition, setGoodCondition] = useState(true)
    const [bestcondition, setBestCondition] = useState(true)
    const [deliveryStatus, setDeliveryStatus] = useState(true)
    const [newBook, setNewBook] = useState(true)
    const [offered, setOffered] = useState(true)
    const [usedBook, setusedBook] = useState(true)
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState(true)
    const [ofs, setofs] = useState(true)
    let {searchedbook} = useParams();
    if(search!=searchedbook){
        setSearch(searchedbook)
        console.log('in Search')
        setRender([])
    }
  const offeredhandle =()=>{
      if(offered){
        setOffered(false)
      }else{
        setOffered(true)
      }
      if(offered){
        const FetchData = render.filter(book=>book.tag.offer==true)
        if(FetchData === []){
          console.log('No Data')
        }else{
          setRender(FetchData)
        }
      }
  }
  const newhandle =()=>{
    if(newBook){
        setNewBook(false)
    }else{
      setNewBook(true)
    }
    if(newBook){
      const FetchData = render.filter(book=>book.tag.new==true)
      if(FetchData === []){
        console.log('No Data')
      }else{
        setRender(FetchData)
      }
    }
}
const deliveryStatushandle =()=>{
  if(deliveryStatus){
    setDeliveryStatus(false)
    }else{
    setDeliveryStatus(true)
  }
  if(deliveryStatus){
    const FetchData = render.filter(book=>book.tag.delivery_status==true)
    if(FetchData === []){
      console.log('No Data')
    }else{
      setRender(FetchData)
    }
  }
}
const usedBookhandle =()=>{
  if(usedBook){
    setusedBook(false)
    }else{
    setusedBook(true)
  }
  if(usedBook){
    const FetchData = render.filter(book=>book.tag.used==true)
    if(FetchData === []){
      console.log('No Data')
    }else{
      setRender(FetchData)
    }
  }
}
const priceHandle =()=>{
  if(price){
    console.log(render.filter(book=>book.tag.price<=price))
    const FetchData = render.filter(book=>book.tag.price<=price)
    if(FetchData === []){
      console.log('No Data')
    }else{
      setRender(FetchData)
    }
  }else{
    // setRender([])
  }
}
const categoryHandle =()=>{
  if(category){
    const FetchData = render.filter(book=>{return book.tag.category.startsWith(category)})
    if(FetchData === []){
      console.log('No Data')
    }else{
      setRender(FetchData)
    }
  }
}
const stockHandle =()=>{
  if(stock){
    setStock(false)
    }else{
    setStock(true)
  }
  if(stock){
    const FetchData = render.filter(book=>book.tag.instock>0)
    if(FetchData === []){
      console.log('No Data')
    }else{
      setRender(FetchData)
    }
  }
}

const outofstockHandle =()=>{
  if(ofs){
    setofs(false)
    }else{  
    setofs(true)
  }
  if(ofs){
    const FetchData = render.filter(book=>book.tag.instock==0)
    console.log(FetchData)
    if(FetchData === []){
      console.log('No Data')
    }else{
      setRender(FetchData)
    }
  }
}

const conditionHandle =(request)=>{
  if(request == 'good'){
    if(goodcondition){
      setGoodCondition(false)
      }else{
      setGoodCondition(true)
    }
    if(goodcondition){
      const FetchData = render.filter(book=>book.tag.condition==='good')
      if(FetchData === []){
        console.log('No Data')
      }else{
        setRender(FetchData)
      }
    }
  }else{
    if(bestcondition){
      setBestCondition(false)
      }else{
      setBestCondition(true)
    }
    if(bestcondition){
      const FetchData = render.filter(book=>book.tag.condition==='best')
      if(FetchData === []){
        console.log('No Data')
      }else{
        setRender(FetchData)
      }
    }
  }
}




    
    
    if(render.length === 0 ){
        let getSearchedBooks = ProductAction('SEARCH_BOOK_REQUEST',searchedbook)
        getSearchedBooks.then((result)=>{setRender(result);}).catch((err)=>{console.log(err)})
      console.log('in Render Method' )
      }
        
        return(
            
            <div>
                <Navbar2 />

                <div>
                  
<div class="parent">
<div className="div1"> 
                
<Card style={{width: "100%", padding: "15px"}}>
    <h5><b>Filters</b></h5><br />
    
    <div className="container">
            <div className="row">
                {/* Column1 */}
                <div className="col">

      <h6 class="font-weight-bold mb-3"><u>Condition</u></h6>

      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="new" onChange={newhandle}/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="new">New</label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="used" onChange={usedBookhandle}/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="used">Used</label>
      </div>
      </div>
      </div><br />
      


      <h6 class="font-weight-bold mb-3"><u>Delivery</u></h6>

      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="delivery_status" onChange={deliveryStatushandle}/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="delivery_status">Deliverable</label>
      </div><br />
      
        
    

      <h6 class="font-weight-bold mb-3"><u>Only Discounted Books</u></h6>

      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="offers" onChange={offeredhandle}/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="offers">Offers</label>
        </div><br />

    

      <h6 class="font-weight-bold mb-3"><u>Stock Status</u></h6>

      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="instock" onChange={stockHandle}/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="instock" >In Stock</label>
        </div>
        <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="ofs" onChange={outofstockHandle}/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="ofs" >Out of Stock</label>
        </div><br />
      
      <h6 class="font-weight-bold mb-3"><u>Condition</u></h6>
      
      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="good" onChange={()=>{conditionHandle('good')}}/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="good" >Good</label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="best" onChange={()=>{conditionHandle('best')}}/>
        <label class="form-check-label small text-uppercase card-link-secondary" for="best" >Best</label>
      </div>

      <h6 class="font-weight-bold mb-3"><u>Category</u></h6>

      <div>
        <label class="form-check-label small text-uppercase card-link-secondary" >Search a Category</label>
        <input type='textfield'  id="category"  onChange={(e)=>{setCategory(e.target.value)}}/>
        {category ===''?'':<button class="btn btn-primary btn-sm" onClick={categoryHandle}>Search</button>}
        </div><br />

      <h6 class="font-weight-bold mb-3"><u>Price</u></h6>
      <div>
        <label class="form-check-label small text-uppercase card-link-secondary" >Max Value</label>
        <input type='text' id="price"  onChange={(e)=>{setPrice(e.target.value)}}/><br/>
        {price===''?'':<button class="btn btn-primary btn-sm" onClick={priceHandle}>Search</button>}
        </div>
    

        </div>

        <div class="form-check">
          <button className="checkout-btn" onClick={(e)=>{setRender([])}}>Remove Applied Filters</button>
        </div>
      
    </Card>
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
