import axios from 'axios'
import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_RESET,
    USER_ADD_ORDER_FAIL,
    USER_ADD_ORDER_REQUEST,
    USER_ADD_ORDER_SUCCESS,
    USER_ADD_ORDER_RESET,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    USER_UPDATE_FAIL,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_REQUEST,
  } from '../constant/userconstant'
const BASE_URL = process.env.BASE_URL || "http://localhost:5000"

const setuser =async (name,memail)=>{
    let res = null;
    await axios.post(`${BASE_URL}/user/adduser`,{
        username : name,
        email : memail
    }).then((responce)=>{responce.status === 200 ?res=USER_UPDATE_SUCCESS:res=USER_UPDATE_FAIL})
    .catch((e)=>{res=USER_UPDATE_FAIL+ e;console.log(res)})
    return res
}

const getuser = async(email)=>{
    let res = null;
    await axios.post(`${BASE_URL}/user/getuser?email="${email}"`)
    .then((responce)=>{responce.status === 200?res=responce.data:res=USER_DETAILS_FAIL})
    .catch((e)=>{res=USER_DETAILS_FAIL+e;console.log(res)})
    return res
}

const addorder = async(useremail,bookid,sellermail)=>{
    let res = null;
    await axios.post(`${BASE_URL}/user/addorder`,{
        email : useremail,
        bookid : bookid,
        sellermail : sellermail
    }).then((responce)=>{responce.status===200?res=USER_ADD_ORDER_SUCCESS:res=USER_ADD_ORDER_FAIL})
    .catch((e)=>{res=USER_ADD_ORDER_FAIL+e;console.log(res)})
    return res
}

const removeorder = async(useremail,bookid,sellermail)=>{
    let res = null;
    await axios.put(`${BASE_URL}/user/remove`,{
        email : useremail,
        bookid : bookid,
        sellermail : sellermail
    }).then((responce)=>{responce.status===200?res=USER_ADD_ORDER_RESET:res=USER_ADD_ORDER_FAIL})
    .catch((e)=>{res=USER_ADD_ORDER_FAIL+e;console.log(res)})
    return res
}
const deleteuser = async(id)=>{
    let res = null;
    await axios.post(`${BASE_URL}/user/delete/:id`)
    .then((responce)=>{responce.status === 200?res=USER_DELETE_SUCCESS:res=USER_DELETE_FAIL})
    .catch((e)=>{res=USER_DELETE_FAIL+e;console.log(res)})
    return res
}


const UserAction=(action,data)=>{
    switch(action){
    case USER_UPDATE_REQUEST : return setuser(data.name,data.email);break;
    case USER_DELETE_REQUEST : return deleteuser(data);break;
    case USER_DETAILS_REQUEST: return getuser(data); break;
    case USER_ADD_ORDER_REQUEST: return addorder(data.usermail,data.bookid,data.sellermail) ;break;
    case USER_ADD_ORDER_RESET : return removeorder(data.usermail,data.bookid,data.sellermail) ; break;
    default : alert(`you requested Action - ${action}`)
}}



export default UserAction

