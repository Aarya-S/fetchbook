import axios from 'axios'
import {
    SELLER_DETAILS_REQUEST,
    SELLER_DETAILS_FAIL,
    SELLER_ORDER_LIST_REQUEST,
    SELLER_ORDER_LIST_FAIL,
    SELLER_DELETE_REQUEST,
    SELLER_DELETE_SUCCESS,
    SELLER_DELETE_FAIL,
    SELLER_PROFILE_UPDATE_REQUEST,
    ADD_SELLER_DETAILS_REQUEST,
    ADD_SELLER_DETAILS_FAIL,
    ADD_SELLER_DETAILS_SUCCESS,
  } from '../constant/sellerconstant'
  const BASE_URL = "http://localhost:5000"


const setSeller = async (data)=>{
  let result = null
    await axios.post(`${BASE_URL}/seller/addseller`,{
      "sellername":data.sellername,
      "address" : data.address,
      "experience" : data.exp,
      "phoneno" : data.phoneno,
      "certificates" : data.certificates,
      "seller_email": data.seller_email
    }).then((responce)=>{responce.status===200?result=ADD_SELLER_DETAILS_SUCCESS:result=ADD_SELLER_DETAILS_FAIL})
    .catch((responce)=>{console.log(responce);result=ADD_SELLER_DETAILS_FAIL})
  return result;
}

const getSeller = async (data)=>{
  let result = null;
  
    await axios.get(`${BASE_URL}/seller/getseller?email=${data}`)
    .then((responce)=>{responce.status===200?result=responce.data:result=SELLER_DETAILS_FAIL})
    .catch((responce)=>{console.log(responce);result=SELLER_DETAILS_FAIL})
  return result
}

const addorder = async (data)=>{
  let result = null;
  try{
    await axios.get(`${BASE_URL}/seller/addorders?email=${data}`)
    .then((responce)=>{responce.status===200?result=responce.data:result=SELLER_ORDER_LIST_FAIL})
    .catch((responce)=>{console.log(responce)})
  }catch(e){
    result = SELLER_ORDER_LIST_FAIL + e
  }
  return result
}

const getSellerBooks = async (data)=>{
  let result = null;
  try{
    await axios.get(`${BASE_URL}/query?tag_sellerBooks=${data}`)
    .then((responce)=>{responce.status===200?result=responce.data:result='SELLER_BOOK_FAIL'})
    .catch((responce)=>{console.log(responce)})
  }catch(e){
    result = 'SELLER_BOOK_FAIL' + e
  }
  return result
}

const deleteorder = async (data)=>{
  let result = null;
  try{
    await axios.delete(`${BASE_URL}/seller/deleteorder?userid=${data}`)
    .then((responce)=>{responce.status===200?result=SELLER_DELETE_SUCCESS:result=SELLER_DELETE_FAIL})
    .catch((responce)=>{console.log(responce)})
  }catch(e){
    result = SELLER_DELETE_FAIL + e
  }
  return result;
}

const sellerAction = (Action,data)=>{
  switch(Action){
    case SELLER_DETAILS_REQUEST : return getSeller(data) ;break;
    case SELLER_ORDER_LIST_REQUEST : return addorder(data); break;
    case SELLER_DELETE_REQUEST: return deleteorder(data); break;
    case SELLER_PROFILE_UPDATE_REQUEST:return setSeller(data); break;
    case ADD_SELLER_DETAILS_REQUEST : return setSeller(data); break;
    case 'SELLER_BOOK_REQUEST' : return getSellerBooks(data); break;
    default : alert(`you requested Action - ${Action}`)
  }
  return null;
}

export default sellerAction
  