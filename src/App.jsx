import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import Details from './components/detail_page';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Offers from './components/Offers';
import Cart from './components/Cart';

function App() {
  return (
    
    <Router>

    <div className='App'>
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' exact />
        <Route component={Login} path='/login' exact />
        <Route component={Details} path='/details'/>
        <Route component={Offers} path='/offers'/>
        <Route component={Cart} path='/incart'/>
      </Switch>
    </div>

    </Router>

  );
}

export default App;
