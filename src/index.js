import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';


ReactDOM.render(
  <React.StrictMode>
    <div className="topBar">
    <Navbar />
    </div>
    <Login />
    
    
  </React.StrictMode>,
  document.getElementById('root')
);





