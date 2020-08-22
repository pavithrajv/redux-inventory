import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import deleteProductBroadcast from '../actions/deleteProductBroadcast';
import editProductBroadcast from '../actions/editProductBroadcast';
import { Redirect, Link } from "react-router-dom";
import EditProduct from '../containers/editproduct';
import AddProduct from '../containers/addproduct';
import notification from './notification';
import Notification from '../containers/notification'
class AllProducts extends React.Component {

    // state={
    //     editid:0,
    //     editClicked:false,
    // }



    displayPropsReceivedFromStore = () => {
        console.log("Received props from store -> products");
        console.log("products:", this.props.products)
        return this.props.products.map(p => {
            return (
                <tr key={p.id}>
                    <td> {p.name} </td>
                    <td>{p.category}</td>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
                    <td>{p.inStock}</td>
                    <td><button id={p.id} onClick={()=>this.editProduct(p)}>edit</button></td>
                    <td><button id={p.id} onClick={this.deleteProduct}>delete</button></td>

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
        console.log("p.id",p)
        this.props.history.push({
            pathname: '/editproduct',
            
            state: { detail: p }
          })
        // this.props.history.push("/editproduct")
        
        // event.preventDefault();
        // console.log(event.target.id)
        // this.setState({ editid: event.target.id })
        //this.props.history.push('/editproduct',state:)
        //this.props.editNewProduct(event.target.id)
        let newp = this.props.products;
        console.log(newp)
        //console.log(newp.filter(p => p.id === this.state.editid));
        
        // console.log(this.props)
       // this.props.editNewProduct(p)
    }

    searchProducts = (event) => {
        console.log("search products is being called..!")
        console.log(event.target.value)
        console.log(this.props.products)
        if (event.target.value !== '') {
            console.log(event.target.value)

            let filteredList = this.props.products.filter((product) => {
                return product.name.toLowerCase().includes(event.target.value.toLowerCase());

            })
            console.log("filteredList", filteredList);
            filteredList = this.props.products;
            console.log(filteredList)
            this.displayPropsReceivedFromStore(filteredList)
            console.log("********")

        }
        else {
            console.log("-----------")
            this.displayPropsReceivedFromStore()
        }

    }
    render() {
        return (
            
            <div>
                <Notification></Notification>
                List of all products
                <br></br>
                <input type="search" name="search" id="search" onChange={this.searchProducts} placeholder="Search for a product"></input>
                <Link to="/addproduct"><button>AddProduct</button></Link>
                <table border="1" style={{ width: "50%" }}>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>category</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>instock</th>
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