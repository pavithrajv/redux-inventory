import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import deleteProductBroadcast from '../../actions/deleteProductBroadcast';
import editProductBroadcast from '../../actions/editProductBroadcast';
import { Redirect, Link } from "react-router-dom";
// import EditProduct from '../containers/editproduct';
// import AddProduct from '../containers/addproduct';

import Notification from '../notification/notification'
import './allproducts.css'
import searchProductBroadcast from '../../actions/searchProductBroadcast';
import searchCategoryBroadcast from '../../actions/searchCategoryBroadcast';
import axios from 'axios'
import Navbar from '../navbar/navbar';

class AllProducts extends React.Component {

    

    displayPropsReceivedFromStore = () => {
        console.log("Received props from store -> products");
        console.log("products:", this.props.products)
        return this.props.products.map(p => {
            return (
                <tr key={p.id}>
                    <td><img style={{ width: "40", height: "40px", borderRadius: "25px" }} src={p.productImage} /></td>
                    <td>{p.productCode}</td>
                    <td> {p.productName} </td>
                    <td>{p.vendor}</td>
                    <td>{p.category}</td>
                    <td>{p.Manufacturer}</td>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
                    <td>{p.color}</td>
                    {/* <td>{p.inStock}</td> */}
                    <td><button id={p.id} className="editpro" onClick={() => this.editProduct(p)}>edit</button></td>
                    <td><button id={p.id} className="deletepro" onClick={this.deleteProduct}>delete</button></td>

                </tr>
            )

        })
    }

    deleteProduct = (event) => {
        let id = event.target.id;
        console.log(id);
        console.log("delete button clicked.....")
        // let productid=2;
        console.log("product")
        //console.log(this.props.products.id)
        this.props.deleteNewProduct(id);

    }

    editProduct = (p) => {
        console.log("update product clicked...")
        console.log("p.id", p)
        this.props.history.push({
            pathname: '/editproduct',

            state: { detail: p }
        })
        let newp = this.props.products;
        console.log(newp)
    }

     quantitySort = ()=>
        {
            let qty
            qty = this.props.products.sort((a,b) =>{ return a.quantity - b.quantity} )
            this.setState({products:qty})
            console.log(qty)
        }

        priceSort=()=>{
            let price
            price = this.props.products.sort((a,b) =>{ return a.price - b.price} )
            this.setState({products:price})
            console.log(price)
        }


    render() {
        return (

            <div>
                {/* <Notification></Notification> */}
                <Navbar></Navbar>

                <br></br>

                <input type="search" name="search" id="search" onChange={(e) => this.props.setSearch(e.target.value)} placeholder="Search for a product"></input>
                {/* <input type="search" name="search" id="search" onChange={(e) => this.props.setSearchCategory(e.target.value)} placeholder="Search by category"></input> */}
                <Link to="/addproduct"><button id="addpro">AddProduct</button></Link>
                <div style={{ overflowX: "auto" }}>
                    <table border="none" id="customers">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>productCode</th>
                                <th>ProductName</th>
                                <th>Vendor</th>
                                <th>category</th>
                                <th>Manufacturer</th>
                                <th onClick={this.priceSort}>price</th>
                                <th onClick={this.quantitySort}>quantity</th>
                                <th>color</th>
                                {/* <th>instock</th> */}
                                <th colSpan="2">actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.displayPropsReceivedFromStore()}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function convertStoreToProps(store) {
    console.log('Received complete store....in allproducts container');
    console.log(store);
    console.log(store.allproducts)
    //Identify the data from store which allproducts container can consume.
    //it will consume extracted data as props!!!!

    return {
        products: store.allproducts
    }
}

function recieveDeleteAndDispatch(dispatch) {
    return bindActionCreators({
        deleteNewProduct: deleteProductBroadcast,
        editNewProduct: editProductBroadcast,
        setSearch: searchProductBroadcast,
        setSearchCategory:searchCategoryBroadcast
        
    }, dispatch);
}


export default connect(convertStoreToProps, recieveDeleteAndDispatch)(AllProducts);