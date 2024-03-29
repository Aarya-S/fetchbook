import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import './css/App.css';
import Login from './screens/LoginScreen';
import About from './screens/AboutScreen';
import Home from './screens/HomeScreen';
import Details from './screens/detailpageScreen';
import Offers from './screens/OffersScreen';
import Cart from './screens/CartScreen';
import SignUP from './screens/SignupScreen';
import MemberSignUp from './screens/BecomeMemberScreen';
import Forgotpwd from './screens/ForgotpwdScreen';
import AfterSearch from './screens/afterSearch';
import CheckoutScreen from './screens/checkoutScreen';
import Sellerui from './screens/sellerDashboard';
import Dashboard from './screens/userDashboard';
import AddBookScreen from './screens/AddbookScreen';
import PricingScreen from './screens/PricingScreen';
import SellerAddedBooks from './screens/SellerAddedBooks';
import receiptPage from './screens/receiptPage';


function App() {
  return (
    <Router>
    <div className='App'>
      <Switch>
        <Route component={Login} path='/login' exact />
        <Route component={SignUP} path='/signup' exact/>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' exact />
        <Route component={Details} path='/details/:bookid' exact />
        <Route component={Offers} path='/offers' exact />
        <Route component={Cart} path='/cart' exact />
        <Route component={MemberSignUp} path='/membersignup' exact />
        <Route component={Forgotpwd} path = '/forgotpassword' exact/>
        <Route component={AfterSearch} path='/search/:searchedbook' exact/>
        <Route component={Sellerui} path='/sellerui' exact/>
        <Route component={CheckoutScreen} path='/checkout' exact/>
        <Route component={Dashboard} path='/userDashboard' exact/>
        <Route component={AddBookScreen} path='/AddBookScreen' exact/>
        <Route component={PricingScreen} path='/pricing' exact />
        <Route component={SellerAddedBooks} path='/sellerui/getaddedBooks' exact />
        <Route component={receiptPage} path="/receipt" exact />
      </Switch>
      </div>
    

    </Router>

  );
}

export default App;
