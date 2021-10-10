import React, { useState} from "react";

import { Link ,useHistory} from "react-router-dom";
import Navbar2 from '../components/Navbar2';
import { storage,auth } from "../firebaseconfig";
import {ref,uploadBytesResumable,getDownloadURL } from "firebase/storage"
import ProductAction from "../actions/productActions";
import '../css/Signup.css';
const AddBookScreen = ()=>{   
        const [bookname, setBookname] = useState('');
        const [file, setFile] = useState(null);
        const [url, setURL] = useState("");
        const [auther, setAuther] = useState('')
        const [sellername, setSellername] = useState('')
        const [description, setDescription] = useState('')
        const [publisher, setPublisher] = useState('')
        const [category, setCategory] = useState('')
        const [price, setPrice] = useState('')
        const [address, setAddress] = useState('')
        const [stock, setStock] = useState('')
        const [deliverystatus, setDeliverystatus] = useState(false)
        const [newbook, setNewbook] = useState(false)
        const [bookcondition, setBookcondition] = useState("good")
        const [offered, setOffered] = useState(false)

        const history = useHistory()
        
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

        return(
    <div>
        <div><Link to="/sellerui"><button size="lg" className="btn btn-outline-dark back-btn"><i className="fa fa-angle-double-left"></i>  Back to DashBoard</button></Link></div>
        <div className="signup-form">
            <div className="form-box">
		<h2>Add Book Details</h2>
		<div className="or-seperator"></div>   
        <div className="form-group">
            <input type="text" class="form-control input-lg" name="bookname" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} placeholder="BookName" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="auther" value={auther} onChange={(e)=>{setAuther(e.target.value)}} placeholder="auther" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="sellername" value={sellername} onChange={(e)=>{setSellername(e.target.value)}} placeholder="sellername" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="description" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="publisher" value={publisher} onChange={(e)=>{setPublisher(e.target.value)}} placeholder="publisher" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control input-lg" name="category" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="category" required="required"/>
        </div>
        <div className="form-group">
            <input type="number" class="form-control input-lg" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="price(Rs)" required="required"/>
        </div>
        <div className="form-group">
            <input type="text" class="form-control input-lg" name="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="Seller address" required="required"/>
        </div>
        <div className="form-group">
            <input type="number" class="form-control input-lg" name="stock" value={stock} onChange={(e)=>{setStock(e.target.value)}} placeholder="stock" required="required"/>
        </div>
        <div>
            <input type="checkbox" name="delivery_status" checked={deliverystatus} onClick={deliveryhandle} id={"delivery_status"}/>
            <label for="delivery_status">Do you have delivery Service?</label>
            <input type="checkbox" name="new_book" checked={newbook} onClick={newbookhandle} id={"new_book"}/>
            <label for="new_book">New Book?</label>
            <input type="checkbox" name="offers" checked={offered} onClick={offeredhandle} id={"offers"}/>
            <label for="offers">is this offered product?</label>
        </div>
        <div>
            <label>Book Condition?</label>
            <select name="condition" id="condition" onChange={(e)=>{setBookcondition(e.target.value)}}  required="required">
                <option value="good">good</option>
                <option value="better">better</option>
                <option value="best">best</option>
            </select>
        </div>
        <div>
            <input type="file" onChange={handleChange} />
            <button disabled={!file} onClick={handleUpload}>upload</button>
        </div>
        <div className="form-group">
            <button onClick={onsubmit} class="btn btn-success btn-lg btn-block signup-btn">Add Book</button>
        </div>
        </div>
        </div>
    </div>
        )
    
}
export default AddBookScreen