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


function App() {
  return (
    
    <Router>

    <div className='App'>
      <Switch>
        <Route component={Login} path='/login' exact />
        <Route component={SignUP} path='/signup' exact/>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' exact />
        <Route component={Details} path='/details' exact />
        <Route component={Offers} path='/offers' exact />
        <Route component={Cart} path='/cart' exact />
        <Route component={MemberSignUp} path='/membersignup' exact />
        <Route component={Forgotpwd} path = '/forgotpassword' exact/>
      </Switch>
      </div>
    

    </Router>

  );
}

export default App;
