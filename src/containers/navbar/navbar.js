import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import './navbar.css'
class Navbar extends React.Component {
    state = {}
    render() {
        return (
            <nav>
                <ul>
                    <li style={{fontSize:"20px",color:"white",margin:"10px"}}>Product Inventory</li> 
                    <li><Link to="/products" style={{ textDecoration: "none",fontSize:"20px",color:"white" }}>
                        Products
                    </Link></li>
                    <li><Link to="/dashboard" style={{ textDecoration: "none",fontSize:"20px",color:"white" }}>
                        Dashboard
                    </Link></li>
                    <li style={{ textDecoration: "none",fontSize:"20px",color:"white",margin:"10px" }}>Products:{this.props.products.length}</li>
                    <li><Link to="/" style={{textDecoration:"none",fontSize:"20px",color:"white"}}>
                 Logout
             </Link></li>
                </ul>
            </nav>
        );
    }
}

function convertStoreToProps(store) {
    console.log('Received complete store....in notification container');
    console.log(store);
    console.log(store.allproducts)
    //Identify the data from store which allproducts container can consume.
    //it will consume extracted data as props!!!!
    return {

        products: store.allproducts

    }
}


export default connect(convertStoreToProps)(Navbar)