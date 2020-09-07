import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import editProductBroadcast from '../../actions/editProductBroadcast';
import Notification from '../notification/notification'
import Navbar from '../navbar/navbar'
import './editproduct.css'

class EditProduct extends React.Component {

    constructor(props) {
        console.log("in edit product..")
        super(props);
        console.log(this.props.location.state)
        this.state = {
            id:0,
            code: '',
            name: '',
            image:'',
            category: '',
            vendor: '',
            price: 0,
            manufacturer: '',
            quantity: 0,
            color:'',
            instock: ''
        }
    }
    getCode = (event) => {
        console.log(event.target.value)
        this.setState({ code: event.target.value })
        //console.log(this.state.buttonStatus)

    }
    getPname = (event) => {
        console.log(event.target.value)
        this.setState({ name: event.target.value })
    }
    getPimage = (event) => {
        console.log(event.target.value)
        this.setState({ image: event.target.value })
    }
    getVendor = (event) => {
        console.log(event.target.value)
        this.setState({ vendor: event.target.value })
    }
    getPcat = (event) => {
        console.log(event.target.value)
        this.setState({ category: event.target.value })
    }
    getManufacturer = (event) => {
        console.log("manufacturer" + event.target.value)
        this.setState({ manufacturer: event.target.value })
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
    getColor = (event) => {
        console.log(event.target.value)
        this.setState({ color: event.target.value })
    }
    componentDidMount = () => {
        console.log(this.props.location.state)
        if (this.props.location.state != undefined) {
            this.setState({
                id:this.props.location.state.detail.id,
                code:this.props.location.state.detail.productCode,
                name: this.props.location.state.detail.productName,
                image:this.props.location.state.detail.productImage,
                vendor:this.props.location.state.detail.vendor,
                category: this.props.location.state.detail.category,
                manufacturer:this.props.location.state.detail.Manufacturer,
                price: this.props.location.state.detail.price,
                quantity: this.props.location.state.detail.quantity,
                color:this.props.location.state.detail.color
               // inStock: this.props.location.state.detail.inStock
            })
        }
    }
    updateProduct = (event) => {
        console.log("update product clicked...")
        console.log(event.target.value)
        let product = {
            "id":this.state.id,
            "productCode" :this.state.code,
            // "productImage": this.state.pimage,
            "productName": this.state.name,
            "productImage":this.state.image,
            "vendor":this.state.vendor,
            "category": this.state.category,
            "Manufacturer":this.state.manufacturer,
            "quantity": this.state.quantity,
            "price": this.state.price,
            "color":this.state.color
        }
        console.log(product)
        this.props.editNewProduct(product)
        this.props.history.push("/products")
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
                {/* <Notification></Notification> */}
                <Navbar></Navbar>

            <div id="editbox">
                <h2>Details of {this.state.name}</h2>
                <form style={{  display: "flex", flexDirection: "column" }}>
                <p>ProductCode</p>
                    <input type="text" id="code" value={this.state.code} placeholder="enter productCode" onChange={this.getCode}></input><span style={{ color: "red" }}>{this.state.codeError}</span>
                    <br></br>
                    <p>ProductName</p>
                    <input type="text" id="name" value={this.state.name} onChange={this.getPname}></input><span style={{ color: "red" }}>{this.state.nameError}</span>
                    <br></br>
                    <p>ProductImage</p>
                    <input type="text" id="code" value={this.state.image} onChange={this.getPimage}></input><span style={{ color: "red" }}>{this.state.imageError}</span>
                    <br></br>
                    <p>Vendor</p>
                    <input type="text" id="vendor" value={this.state.vendor} placeholder="enter vendor details" onChange={this.getVendor}></input><span style={{ color: "red" }}>{this.state.vendorError}</span>
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
                    <p>Manufacturer</p>
                    <input type="text" id="manufacturer" value={this.state.manufacturer} placeholder="enter manufacturer" onChange={this.getManufacturer}></input><span style={{ color: "red" }}>{this.state.manfError}</span>
                    <br></br>
                    <p>Price</p>
                    <input type="number" id="price" style={{color:"black"}} value={this.state.price} onChange={this.getPrice}></input><span style={{ color: "red" }}>{this.state.priceError}</span>
                    <br></br>
                    <p>Quantity</p>
                    <input type="number" id="quantity" style={{color:"black"}} value={this.state.quantity} onChange={this.getQuantity}></input><span style={{ color: "red" }}>{this.state.quantityError}</span>
                    <br></br>
                    <p>Color</p>
                    <input type="text" id="color" value={this.state.color} onChange={this.getColor}></input><span style={{ color: "red" }}>{this.state.quantityError}</span>
                    <br></br>
                    {/* <p>In-stock</p>
                    <select id="stock" value={this.state.inStock} onChange={this.getStock}>
                        <option>Yes</option>
                        <option>No</option>
                    </select><span style={{ color: "red" }}>{this.state.catError}</span> */}
                    

                    <button id="edit" onClick={this.updateProduct} >Update Product</button>
                </form>
            </div>
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