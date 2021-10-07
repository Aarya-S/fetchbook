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
  } from '../constant/userconstant'
  const BASE_URL = process.env.BASE_URL || "http://localhost:5000"


const setSeller = async (data)=>{
  const result = null
  try{
    await axios.post(`${BASE_URL}/addseller`,{
      data
    }).then((responce)=>{responce.status===200?result=ADD_SELLER_DETAILS_SUCCESS:result=ADD_SELLER_DETAILS_FAIL})

  }catch(e){
    result = ADD_SELLER_DETAILS_FAIL + e
  }
  return result;
}

const getSeller = async (data)=>{
  const result = null;
  try{
    await axios.get(`${BASE_URL}/getuser?email="${data}"`)
    .then((responce)=>{responce.status===200?result=responce.data:result=SELLER_DETAILS_FAIL})
  }catch(e){
    result = SELLER_DETAILS_FAIL + e
  }
  return result
}

const addorder = async (data)=>{
  const result = null;
  try{
    await axios.get(`${BASE_URL}/addorders?email=${data}`)
    .then((responce)=>{responce.status===200?result=responce.data:result=SELLER_ORDER_LIST_FAIL})
  }catch(e){
    result = SELLER_ORDER_LIST_FAIL + e
  }
  return result
}

const deleteorder = async (data)=>{
  const result = null;
  try{
    await axios.delete(`${BASE_URL}/deleteorder?userid=${data}`)
    .then((responce)=>{responce.status===200?result=SELLER_DELETE_SUCCESS:SELLER_DELETE_FAIL})
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
    default : alert(`you requested Action - ${Action}`)
  }
}

export default sellerAction
  