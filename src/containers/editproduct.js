import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import editProductBroadcast from '../actions/editProductBroadcast';
class EditProduct extends React.Component {

    constructor(props) {
        console.log("in edit product..")
        super(props);
        console.log(this.props.location.state)
        this.state = {
            id:0,
            name: '',
            category: '',
            price: 0,
            quantity: 0,
            inStock: ''
        }
    }

    getPname = (event) => {
        console.log(event.target.value)
        this.setState({ name: event.target.value })
    }

    getPcat = (event) => {
        console.log(event.target.value)
        this.setState({ category: event.target.value })
    }

    getPrice = (event) => {
        console.log(event.target.value)
        this.setState({ price: event.target.value })
    }
    getQuantity = (event) => {
        console.log(event.target.value)
        this.setState({ quantity: event.target.value })
    }
    getStock = (event) => {
        console.log(event.target.value)
        this.setState({ inStock: event.target.value })
    }

    componentDidMount = () => {
        console.log(this.props.location.state)
        if (this.props.location.state != undefined) {
            this.setState({
                id:this.props.location.state.detail.id,
                name: this.props.location.state.detail.name,
                category: this.props.location.state.detail.category,
                price: this.props.location.state.detail.price,
                quantity: this.props.location.state.detail.quantity,
                inStock: this.props.location.state.detail.inStock
            })
        }
    }
    updateProduct = (event) => {
        console.log("update product clicked...")
        console.log(event.target.value)
        let product = {
            id:this.state.id,
            name: this.state.name,
            category: this.state.category,
            price: this.state.price,
            quantity: this.state.quantity,
            inStock: this.state.inStock
        }
        console.log(product)
        this.props.editNewProduct(product)
        this.props.history.push("/")
    }
    render() {
        if (this.props.location.state == undefined) {
            return (
                <div>
                    <h2>please navigate from products page..!!</h2>
                </div>
            )
        }
        return (

            <div>
                <h2>{this.state.name}</h2>
                <form style={{ border: "1px solid black" }}>

                    <p>ProductName</p>
                    <input type="text" id="pname" value={this.state.name} onChange={this.getPname}></input><span style={{ color: "red" }}>{this.state.nameError}</span>
                    <br></br>

                    <p>Category</p>
                    <select id="pcat" value={this.state.category} onChange={this.getPcat}>
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
                    <input type="number" id="price" value={this.state.price} onChange={this.getPrice}></input><span style={{ color: "red" }}>{this.state.priceError}</span>
                    <br></br>
                    <p>Quantity</p>
                    <input type="number" id="quantity" value={this.state.quantity} onChange={this.getQuantity}></input><span style={{ color: "red" }}>{this.state.quantityError}</span>
                    <br></br>
                    <p>In-stock</p>
                    <select id="stock" value={this.state.inStock} onChange={this.getStock}>
                        <option>Yes</option>
                        <option>No</option>
                    </select><span style={{ color: "red" }}>{this.state.catError}</span>
                    <br></br><br></br>

                    <button id="add" onClick={this.updateProduct} >Update Product</button>
                </form>
            </div>
        );
    }
}

function recieveDeleteAndDispatch(dispatch) {
    return bindActionCreators({
        editNewProduct: editProductBroadcast
    }, dispatch);
}

export default connect(null, recieveDeleteAndDispatch)(EditProduct);