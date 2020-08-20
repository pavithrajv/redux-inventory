import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import broadcastAddProduct from '../actions/addProductBroadcast';

class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            category:'',
            price:0,
            quantity:0,
            instock:''
        }
    }

    getPname=(event)=>{
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }

    getPcat=(event)=>{
        console.log(event.target.value)
        this.setState({category:event.target.value})
    }

    getPrice=(event)=>{
        console.log(event.target.value)
        this.setState({price:event.target.value})
    }
    getQuantity=(event)=>{
        console.log(event.target.value)
        this.setState({quantity:event.target.value})
    }
    getStock=(event)=>{
        console.log(event.target.value)
        this.setState({instock:event.target.value})
    }
    addProduct=(event)=>{
        event.preventDefault()
        console.log("button clicked.....")
        let product={
            name:this.state.name,
            category:this.state.category,
            price:this.state.price,
            quantity:this.state.quantity,
            inStock:this.state.instock
        }
        console.log(product)
        this.props.addNewProduct(product);
    }

    render() {
        return (
            
            <div>
               
                <form style={{ border:"1px solid black"}}>

                    <p>ProductName</p>
                    <input type="text" id="pname" placeholder="enter productName" onChange={this.getPname}></input><span style={{ color: "red" }}>{this.state.nameError}</span>
                    <br></br>

                    <p>Category</p>
                    <select id="pcat" onChange={this.getPcat}>
                        <option disabled>Electronics</option>
                        <option>Mobile</option>
                        <option>Laptop</option>
                        <option>Headphones</option>
                        <option>Speaker</option>
                        <option>Camera</option>
                        <option>Accesories</option>
                    </select><span style={{ color: "red" }}>{this.state.catError}</span>
                    <br></br>

                    <p>Price</p>
                    <input type="number" id="price" placeholder="enter Price" onChange={this.getPrice}></input><span style={{ color: "red" }}>{this.state.priceError}</span>
                    <br></br>
                    <p>Quantity</p>
                    <input type="number" id="quantity" placeholder="enter quantity" onChange={this.getQuantity}></input><span style={{ color: "red" }}>{this.state.quantityError}</span>
                    <br></br>
                    <p>In-stock</p>
                    <select id="stock" onChange={this.getStock}>
                        <option>Yes</option>
                        <option>No</option>
                    </select><span style={{ color: "red" }}>{this.state.catError}</span>
                    <br></br><br></br>

                    <button id="add" onClick={this.addProduct} >Save Product</button>
                </form>
            </div>
        );

    }

    
}
function convertPropToEventAndBroadcast(dispatch){
    //console.log("Received the nameclicked event as props in FriendList.... ")
    return bindActionCreators({
        addNewProduct:broadcastAddProduct
    }, dispatch)

}
export default connect(null,convertPropToEventAndBroadcast)(AddProduct);