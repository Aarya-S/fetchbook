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
import Hero from '../components/Hero';

function App() {
  return (
    
    <Router>

    <div className='App'>
      <Navbar />
      <Hero
  imgSrc="https://source.unsplash.com/random/"
  imgAlt="satified woman eating in restaurant"
/>
      <Switch>
        <Route component={Login} path='/login' exact />
        <div>
          <Navbar />

          <Route component={Home} path='/' exact />
          <Route component={About} path='/about' exact />
        
          <Route component={Details} path='/details' exact />
          <Route component={Offers} path='/offers' exact />
          <Route component={Cart} path='/incart' exact />
        </div>
      </Switch>
      </div>
    

    </Router>

  );
}

export default App;
