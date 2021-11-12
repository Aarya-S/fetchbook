import axios from 'axios'

const BASE_URL = "http://localhost:5000"

const setproduct =async (data)=>{
    let res = null;
    await axios.post(`${BASE_URL}/products/insertone`,
        data
    ).then((responce)=>{responce.status === 200 ?res='PRODUCT_ADDED':res='PRODUCT_ADD_FAIL'})
    .catch((e)=>{res='PRODUCT_ADD_FAIL'+ e;
        console.log(res)    
    })
    return res
}

const getrandom =async ()=>{
    let res = null;
    await axios.get(`${BASE_URL}/products/random`)
    .then((responce)=>{responce.status === 200 ?res=responce.data:res='PRODUCT_RANDOM_FAIL'})
    .catch((e)=>{res='PRODUCT_RANDOM_FAIL'+ e;
    console.log(res)})
    return res
}

const getoffer =async ()=>{
    let res = null;
    await axios.get(`${BASE_URL}/query?tag_offers=true`)
    .then((responce)=>{responce.status === 200 ?res=responce.data:res='PRODUCT_OFFERS_FAIL'})
    .catch((e)=>{res='PRODUCT_OFFERS_FAIL'+ e;
    console.log(res)})
    return res
}

const getbookbyid=async (id)=>{
    let res = null;
    await axios.get(`${BASE_URL}/products/${id}`)
    .then((responce)=>{responce.status === 200 ?res=responce.data:res='GET_BOOK_FAIL'})
    .catch((e)=>{res='GET_BOOK_FAIL'+ e;
    console.log(res)})
    return res
}
const updatebookbyid=async (data)=>{
    let res = null;
    await axios.put(`${BASE_URL}/products/${data._id}`,
        data
    )
    .then((responce)=>{responce.status === 200 ?res='UPDATE_BOOK_SUCCESS':res='UPDATE_BOOK_FAIL'})
    .catch((e)=>{res='UPDATE_BOOK_FAIL'+ e;
    console.log(res)})
    return res
}
const deletebookbyid = async (id)=>{
    let res = null;
    await axios.delete(`${BASE_URL}/products/${id}`)
    .then((responce)=>{responce.status === 200 ?res='DELETE_BOOK_SUCCESS':res='DELETE_BOOK_FAIL'})
    .catch((e)=>{res='DELETE_BOOK_FAIL'+ e;
    console.log(res)})
    return res
}

const search = async (data)=>{
    let res =null;
    await axios.get(`${BASE_URL}/query?tag_bookname=${data}`)
    .then((responce)=>{responce.status === 200 ?res=responce.data:res='SEARCH_BOOK_FAIL'})
    .catch((e)=>{res='SEARCH_BOOK_FAIL'+ e;
    console.log(res)})
    return res
}

const AddtoLoggs = async (data)=>{
    let res = null;
    console.log(data)
    await axios.post(`${BASE_URL}/logs/insertone`,
        data
    ).then((responce)=>{responce.status === 200 ?res='LOGG_ADDED':res='LOGG_ADD_FAIL'})
    .catch((e)=>{res='LOGG_ADD_FAIL'+ e;
        console.log(res)    
    })
    return res
}

const getsellerbooks = async (data)=>{
    let res =null;
    await axios.get(`${BASE_URL}/products/getsellerbooks?email=${data}`)
    .then((responce)=>{responce.status === 200 ?res=responce.data:res='SELLER_BOOK_FAIL'})
    .catch((e)=>{res='SELLER_BOOK_FAIL'+ e;
    console.log(res)})
    return res
}




const ProductAction=(action,data)=>{
    switch(action){
        case 'PRODUCT_ADD_REQUEST' : return setproduct(data) ;break;
        case 'PRODUCT_GET_RANDOM' : return getrandom(); break;
        case 'PRODUCT_OFFERS_REQUEST': return getoffer(); break;
        case 'UPDATE_BOOK_REQUEST':return updatebookbyid(data); break;
        case 'DELETE_BOOK_REQUEST' : return deletebookbyid(data); break;
        case 'SEARCH_BOOK_REQUEST' : return search(data); break;
        case 'GET_BOOK_REQUEST': return getbookbyid(data);break;
        case 'SELLER_BOOK_REQUEST' : return getsellerbooks(data);break;
        case 'LOG_ADDED_REQUEST' : return AddtoLoggs(data);break;
        default : alert(`you requested Action - ${action}`)
      }
    return null;
}

export default ProductAction