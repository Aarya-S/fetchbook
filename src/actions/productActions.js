import axios from 'axios'

const BASE_URL = "http://localhost:5000"

const setproduct =async (data)=>{
    const res = null;
    await axios.post(`${BASE_URL}/products/insertone`,{
        data
    }).then((responce)=>{responce.status === 200 ?res='PRODUCT_ADDED':res='PRODUCT_ADD_FAIL'})
    .catch((e)=>{res='PRODUCT_ADD_FAIL'+ e})
    next()
    return res
}

const getrandom =async ()=>{
    const res = null;
    await axios.get(`${BASE_URL}/products/random`)
    .then((responce)=>{responce.status === 200 ?res=responce.data:res='PRODUCT_RANDOM_FAIL'})
    .catch((e)=>{res='PRODUCT_RANDOM_FAIL'+ e})
    next()
    return res
}

const getofferlimit =async ()=>{
    const res = null;
    await axios.get(`${BASE_URL}/query?tag_offers=true`)
    .then((responce)=>{responce.status === 200 ?res=responce.data:res='PRODUCT_OFFERS_FAIL'})
    .catch((e)=>{res='PRODUCT_OFFERS_FAIL'+ e})
    next()
    return res
}

const getbookbyid=async (id)=>{
    const res = null;
    await axios.get(`${BASE_URL}/products/${id}`)
    .then((responce)=>{responce.status === 200 ?res=responce.data:res='GET_BOOK_FAIL'})
    .catch((e)=>{res='GET_BOOK_FAIL'+ e})
    next()
    return res
}
const updatebookbyid=async (id)=>{
    const res = null;
    await axios.put(`${BASE_URL}/products/${id}`,{
        data
    })
    .then((responce)=>{responce.status === 200 ?res='UPDATE_BOOK_SUCCESS':res='UPDATE_BOOK_FAIL'})
    .catch((e)=>{res='UPDATE_BOOK_FAIL'+ e})
    next()
    return res
}
const deletebookbyid = async (id)=>{
    const res = null;
    await axios.delete(`${BASE_URL}/products/${id}`)
    .then((responce)=>{responce.status === 200 ?res='DELETE_BOOK_SUCCESS':res='DELETE_BOOK_FAIL'})
    .catch((e)=>{res='DELETE_BOOK_FAIL'+ e})
    next()
    return res
}

const search = async (data)=>{
    const res =null;
    await axios.get(`${BASE_URL}/products/${data}`)
    .then((responce)=>{responce.status === 200 ?res=responce.data:res='SEARCH_BOOK_FAIL'})
    .catch((e)=>{res='SEARCH_BOOK_FAIL'+ e})
    next()
    return res
}




const ProductAction=(action)=>{
    switch(action){
        case 'PRODUCT_ADD_REQUEST' : return setproduct(data) ;break;
        case 'PRODUCT_GET_RANDOM' : return getrandom(); break;
        case 'PRODUCT_OFFERS_REQUEST': return getofferlimit(data); break;
        case 'UPDATE_BOOK_REQUEST':return updatebookbyid(data); break;
        case 'DELETE_BOOK_REQUEST' : return deletebookbyid(data); break;
        case 'SEARCH_BOOK_REQUEST' : return search(data); break;
        default : alert(`you requested Action - ${Action}`)
      }
    return null;
}