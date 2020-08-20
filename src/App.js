import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddProduct from './containers/addproduct';
import AllProducts from './containers/allproducts';

function App() {
  return (
    <div>
    <h3>Redux Inventory</h3>
    <AllProducts></AllProducts>
    <AddProduct></AddProduct>
    </div>
  );
}

export default App;
