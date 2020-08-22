import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddProduct from './containers/addproduct';
import AllProducts from './containers/allproducts';
import Editproduct from './containers/editproduct';
import Notification from './containers/notification';
import Routes from './containers/routes';


function App() {
  return (
    <div>
    <h3>Redux Inventory</h3>
    {/* <Notification></Notification>
    <AddProduct></AddProduct>
    <AllProducts></AllProducts> */}
    <Routes></Routes>
    </div>
  );
}

export default App;
