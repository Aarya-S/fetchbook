import '../css/signup.css';
const Seller = ()=>{
    return(<>
        <div className="form-group">
        	<input type="text" class="form-control input-lg" name="sellername" placeholder="sellername" required="required"/>
        </div>
		<div className="form-group">
        	<input type="email" class="form-control input-lg" name="email" placeholder="Email Address" required="required"/>
        </div>
        <div className="form-group">
            <input type="number" class="form-control input-lg" name="phone number" placeholder="phone number" required="required"/>
        </div> 
        <div className="form-group">
            <input type="number" class="form-control input-lg" name="Experience " placeholder="Experience in selling (years)"/>
        </div> 
        <div className="form-group">
            <input type="text" class="form-control input-lg" name="sellerid" placeholder="seller ID" required="required"/>
        </div>
        <div className="form-group">
            <input type="password" class="form-control input-lg" name="password" placeholder="Password" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" class="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>  
        <div className="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
        </div>
        </>
    )
}

export default Seller