import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import deleteProductBroadcast from '../actions/deleteProductBroadcast';
import editProductBroadcast from '../actions/editProductBroadcast';
class AllProducts extends React.Component {


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
            <td><button id={p.id} onClick={this.editProduct}>edit</button></td>
            <td><button  id={p.id} onClick={this.deleteProduct}>delete</button></td>
                </tr>
            )

        })
    }

    deleteProduct=(event)=>{
        let id=event.target.id;
        console.log(id);
        console.log("delete button clicked.....")
        // let productid=2;
        console.log("product")
        //console.log(this.props.products.id)
        this.props.deleteNewProduct(id);
        
    }

    editProduct=(event)=>{
        let editid=event.target.id;
        console.log(editid)
        console.log("update product clicked...")
       // console.log(this.props)
        this.props.editNewProduct(editid)
    }
    render() {
        return (
            <div>
                List of all products
                <br></br>
                <table border="1">
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

function recieveDeleteAndDispatch(dispatch){
    return bindActionCreators({
        deleteNewProduct:deleteProductBroadcast,
        editNewProduct:editProductBroadcast
    }, dispatch);
}


export default connect(convertStoreToProps,recieveDeleteAndDispatch)(AllProducts);