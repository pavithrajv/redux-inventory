import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import deleteProductBroadcast from '../actions/deleteProductBroadcast';
import editProductBroadcast from '../actions/editProductBroadcast';
import { Redirect, Link } from "react-router-dom";
import EditProduct from '../containers/editproduct';
import AddProduct from '../containers/addproduct';

import Notification from '../containers/notification'
import './allproducts.css'

class AllProducts extends React.Component {
    
    state = {
        searchProducts:[],
        tempProducts:[]
        
    }
    
    
    displayPropsReceivedFromStore = () => {
        console.log("Received props from store -> products");
        console.log("products:", this.props.products)
        //this.setState({searchProducts:this.props.products})
       // this.setState({tempProducts:this.state.searchProducts})
        return this.props.products.map(p => {
            return (
                <tr key={p.id}>
                    <td>{p.productCode}</td>
                    <td> {p.productName} </td>
                    <td>{p.vendor}</td>
                    <td>{p.category}</td>
                    <td>{p.Manufacturer}</td>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
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

    search = (event) => {
        console.log("search products is being called..!")
        console.log(event.target.value)
        if(event.target.value == ''){
            this.displayPropsReceivedFromStore()
        }
        else{
            console.log(this.state.tempProducts)
            let filteredList = this.props.products.filter((product) => {
                return product.productName.toLowerCase().includes(event.target.value.toLowerCase());

            })
            console.log("filteredList", filteredList);
            this.setState({products:filteredList})
            
        }
    }
    searchCategories = (event) => {
        console.log("search categories is being called..!")
        console.log(event.target.value)
        console.log(this.state.newProducts)
        if (event.target.value !== '') {
            console.log(event.target.value)

            let filteredList = this.state.newProducts.filter((product) => {
                return product.category.toLowerCase().includes(event.target.value.toLowerCase());

            })
            console.log("filteredCategoryList", filteredList);
            this.setState({ newProducts: filteredList });
            console.log(this.state.newProducts)
            this.setState({ products: this.state.newProducts })
            this.displayPropsReceivedFromStore()

        }
        else {
            this.setState({ products: this.props.products })
            this.displayPropsReceivedFromStore()
        }

    }

    render() {
        return (

            <div>
                <Notification></Notification>

                <br></br>
                <input type="search" name="search" id="search" onChange={this.search} placeholder="Search for a product"></input>
                <input type="search" name="search" id="search" style={{ marginLeft: "20px" }} onChange={this.searchCategories} placeholder="Search by category"></input>
                <Link to="/addproduct"><button id="addpro">AddProduct</button></Link>
                <table border="none" id="customers">
                    <thead>
                        <tr>
                            <th>productCode</th>
                            <th>name</th>
                            <th>Vendor</th>
                            <th>category</th>
                            <th>Manufacturer</th>
                            <th>price</th>
                            <th>quantity</th>
                            {/* <th>instock</th> */}
                            <th colSpan="2">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayPropsReceivedFromStore()}

                    </tbody>
                </table>
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
        editNewProduct: editProductBroadcast
    }, dispatch);
}


export default connect(convertStoreToProps, recieveDeleteAndDispatch)(AllProducts);