import axios from 'axios'
import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_RESET,
    USER_LIST_FAIL,
    USER_LIST_SUCCESS,
    USER_LIST_REQUEST,
    USER_LIST_RESET,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    USER_UPDATE_FAIL,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_REQUEST,
  } from '../constant/userconstant'
const BASE_URL = process.env.BASE_URL || "http://localhost:5000"

const setuser =async (name,dpimg,memail,maddress)=>{
    const res = null;
    try{
    await axios.post(`${BASE_URL}/products/insertone`,{
        username : name,
        dp_img : dpimg,
        address : maddress,
        email : memail
    }).then((responce)=>{responce.status === 200 ?res=USER_UPDATE_SUCCESS:res=USER_UPDATE_FAIL})}
    catch(e){
        alert(e)
        res = USER_UPDATE_FAIL
    }
    return res
}

const getuser = async(name,email)=>{

}

const UserAction=(action,data)=>{
    switch(action){
    case USER_UPDATE_REQUEST : return setuser(data.name,data.dpimg,data.email,data.address);
    case USER_DELETE_REQUEST : break;
    case USER_DETAILS_REQUEST: break;
    case USER_LIST_REQUEST: break;
}}



export default UserAction

