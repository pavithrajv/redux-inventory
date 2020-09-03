import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    state = {}
    render() {
        return (
            <nav>
                <ul>
                    <li style={{fontSize:"20px",color:"white"}}>Product Inventory</li> 
                    <li><Link to="/products" style={{ textDecoration: "none",fontSize:"20px",color:"white" }}>
                        Products
                    </Link></li>
                    <li><Link to="/dashboard" style={{ textDecoration: "none",fontSize:"20px",color:"white" }}>
                        Dashboard
                    </Link></li>
                    <li><Link to="/login" style={{textDecoration:"none",fontSize:"20px",color:"white"}}>
                 Logout
             </Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;