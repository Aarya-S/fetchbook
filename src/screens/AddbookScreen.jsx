import React, { useState} from "react";

import { Link ,useHistory,useLocation} from "react-router-dom";
import Navbar2 from '../components/Navbar2';
import { storage,auth } from "../firebaseconfig";
import {ref,uploadBytesResumable,getDownloadURL } from "firebase/storage"
import ProductAction from "../actions/productActions";
import '../css/Signup.css';
import '../css/AddBookScreen.css'
const AddBookScreen = ()=>{   
    
    const location = useLocation()
    console.log(location.state)
    const EditBook = location.state.data ;

        const [bookname, setBookname] = useState(location.state ? EditBook.bookname : '');
        const [file, setFile] = useState(null);
        const [url, setURL] = useState(location.state ?EditBook.img: "");
        const [auther, setAuther] = useState(location.state ?EditBook.auther : '')
        const [sellername, setSellername] = useState(location.state ?EditBook.sellername : '')
        const [description, setDescription] = useState(location.state ?EditBook.description : '')
        const [publisher, setPublisher] = useState(location.state ?EditBook.publisher : '')
        const [category, setCategory] = useState(location.state ?EditBook.tag.category : '')
        const [price, setPrice] = useState(location.state ?EditBook.tag.price : '')
        const [address, setAddress] = useState(location.state ?EditBook.tag.address : '')
        const [stock, setStock] = useState(location.state ?EditBook.tag.instock : '')
        const [deliverystatus, setDeliverystatus] = useState(location.state ?EditBook.tag.delivery_status : false)
        const [newbook, setNewbook] = useState(location.state ?EditBook.tag.new : false)
        const [bookcondition, setBookcondition] = useState(location.state ?EditBook.tag.condition : "good")
        const [offered, setOffered] = useState(location.state ?EditBook.tag.offer : false)

        const history = useHistory()
        const onUpdate = ()=>{
            if(auth.currentUser){
                const result =ProductAction('UPDATE_BOOK_REQUEST',{
                    _id:EditBook._id,
                    bookname : bookname,
                    img : url,
                    auther : auther,
                    sellername : sellername,
                    description : description,
                    publisher : publisher,
                    tag:{
                        category : category,
                        sellerid : auth.currentUser.email,
                        price : price,
                        address : address,
                        delivery_status: deliverystatus,
                        condition : bookcondition,
                        new : newbook,
                        offer : offered,
                        instock : stock,
                    }

                })
                console.log(result)
                if(result){
                    alert('Book Updated Successfully')
                }else{
                    alert("fail to Update")
                }}
                else{
                    alert('unautherize access')
                }
        }
        
        const onsubmit = ()=>{
                if(auth.currentUser!=null){
                const result =ProductAction('PRODUCT_ADD_REQUEST',{
                    bookname : bookname,
                    img : url,
                    auther : auther,
                    sellername : sellername,
                    description : description,
                    publisher : publisher,
                    tag:{
                        category : category,
                        sellerid : auth.currentUser.email,
                        price : price,
                        address : address,
                        delivery_status: deliverystatus,
                        condition : bookcondition,
                        new : newbook,
                        offer : offered,
                        instock : stock,
                    }

                })
                console.log(result)
                if(result==='PRODUCT_ADDED'){
                    history.push('/sellerui')
                }else{
                    alert(result)
                }}
                else{
                    alert('unautherize access')
                }
        }
        const deliveryhandle =()=>{
            setDeliverystatus(!deliverystatus)
        }
        const newbookhandle =()=>{
            setNewbook(!newbook)
        }
        const offeredhandle =()=>{
            setOffered(!offered)
        }
        const metadata = {
            contentType: 'image/jpeg'
        };
        function handleChange(e) {
            setFile(e.target.files[0]);
        }

        function handleUpload(e) {
            e.preventDefault();
            const fileref = ref(storage,`/images/${file.name}`);
            const uploadTask = uploadBytesResumable(fileref, file, metadata);
            uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            },
            (error) => {
                alert(error)
                switch (error.code) {
                  case 'storage/unauthorized':
                    break;
                  case 'storage/canceled':
                    break;
                  case 'storage/unknown':
                    break;
                }
              }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setURL(downloadURL)
                  console.log('File available at', downloadURL);
                });
              } )
        }
        const goDashboardHandler = ()=>{
            history.goBack()
        }

        return(
    <div>
        <div><button size="lg" className="btn btn-outline-dark back-btn" onClick={goDashboardHandler}><i className="fa fa-angle-double-left"></i>  Back to DashBoard</button></div>
        <div className="signup-form">
            <div className="form-box">
		<h2>Add Book Details</h2>
        <hr/><br />
        <div className="form-group">
            <input type="text" class="form-control input-lg" name="bookname" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} placeholder="Book Name" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="auther" value={auther} onChange={(e)=>{setAuther(e.target.value)}} placeholder="Author" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="sellername" value={sellername} onChange={(e)=>{setSellername(e.target.value)}} placeholder="Seller Name" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="publisher" value={publisher} onChange={(e)=>{setPublisher(e.target.value)}} placeholder="Publisher" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="category" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Category" required="required"/>
        </div>
        <div className="form-group">
            <input type="number" class="form-control input-lg" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Price(Rs)" required="required"/>
        </div>
        <div className="form-group">
            <input type="text" class="form-control input-lg" name="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="Seller Address" required="required"/>
        </div>
        <div className="form-group">
            <input type="number" class="form-control input-lg" name="stock" value={stock} onChange={(e)=>{setStock(e.target.value)}} placeholder="No. of products" required="required"/>
        </div>
        <br />
        <div>
            <input type="checkbox" name="delivery_status" checked={deliverystatus} onClick={deliveryhandle} id={"delivery_status"} className="check-box" />
            <label for="delivery_status" className="label-check">Do you have delivery Service?</label><br />
            <input type="checkbox" name="new_book" checked={newbook} onClick={newbookhandle} id={"new_book"} className="check-box" />
            
            <label for="new_book" className="label-check">New Book</label>
            <br />
            <input type="checkbox" name="offers" checked={offered} onClick={offeredhandle} id={"offers"} className="check-box" />
            <label for="offers" className="label-check">On sale</label><br />
        </div>
        <div>
            <label className="label-check">Book Condition?</label>
            <select name="condition" id="condition" onChange={(e)=>{setBookcondition(e.target.value)}}  required="required" className="selection">
                <option value="good">Good</option>
                <option value="better">Better</option>
                <option value="best">Best</option>
            </select>
        </div>
        <div>
            <input type="file" onChange={handleChange} className="uploader" />
            <button disabled={!file} onClick={handleUpload} className="upload-btn">Upload</button>
        </div>
        {location.state?
        <div className="form-group">
            <button onClick={onUpdate} class="btn btn-success btn-lg btn-block signup-btn btn-end">Add Book</button>
        </div>:
        <div className="form-group">
            <button onClick={onsubmit} class="btn btn-success btn-lg btn-block signup-btn btn-end">Add Book</button>
        </div>}
        </div>
        </div>
    </div>
        )
    
}
export default AddBookScreen