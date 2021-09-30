import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import './css/App.css';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import Details from './components/detail_page';
import Offers from './components/Offers';
import Cart from './components/Cart';
import SignUP from './components/Signup';
import MemberSignUp from './components/BecomeMember';
import Forgotpwd from './components/Forgotpwd';


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
        <Route component={Cart} path='/incart' exact />
        <Route component={MemberSignUp} path='/membersignup' exact />
        <Route component={Forgotpwd} path = '/forgotpassword' exact/>
      </Switch>
      </div>
    

    </Router>

  );
}

export default App;
