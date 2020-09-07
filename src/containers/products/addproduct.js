import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import broadcastAddProduct from '../../actions/addProductBroadcast';
import './addproduct.css'
import Notification from '../notification/notification'
import Navbar from '../navbar/navbar'

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            code: '',
            name: '',
            image:'',
            category: 'Mobile',
            vendor: '',
            price: 0,
            manufacturer: '',
            quantity: 0,
            color:'',
            instock: 'Yes',
            editing: false
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
        this.setState({ instock: event.target.value })
    }
    getColor = (event) => {
        console.log(event.target.value)
        this.setState({ color: event.target.value })
    }
    addProduct = (event) => {
        event.preventDefault()
        console.log("button clicked.....")
        let product = {
            // name:this.state.name,
            // category:this.state.category,
            // price:this.state.price,
            // quantity:this.state.quantity,
            // inStock:this.state.instock,
            "productCode": this.state.code,
            // "productImage": this.state.pimage,
            "productName": this.state.name,
            "productImage": this.state.image,
            "vendor": this.state.vendor,
            "category": this.state.category,
            "Manufacturer": this.state.manufacturer,
            "quantity": this.state.quantity,
            "price": this.state.price,
            "color":this.state.color
            // "inStock": this.state.pstock
        }
        console.log(product)
        this.props.addNewProduct(product);
        this.props.history.push("/products")
    }

    render() {
        return (
            <div>
                {/* <Notification></Notification> */}
                <Navbar></Navbar>
            
            <div id="addbox">

                <form style={{  display: "flex", flexDirection: "column",marginTop:"30px" }}>
                    <p>ProductCode</p>
                    <input type="text" id="code" placeholder="enter productCode" onChange={this.getCode}></input><span style={{ color: "red" }}>{this.state.codeError}</span>
                    <br></br>
                    <p>ProductName</p>
                    <input type="text" id="name" placeholder="enter productName" onChange={this.getPname}></input><span style={{ color: "red" }}>{this.state.nameError}</span>
                    <br></br>
                    <p>ProductImage</p>
                    <input type="text" id="code" placeholder="enter image address" onChange={this.getPimage}></input><span style={{ color: "red" }}>{this.state.imageError}</span>
                    <br></br>
                    <p>Vendor</p>
                    <input type="text" id="vendor" placeholder="enter vendor details" onChange={this.getVendor}></input><span style={{ color: "red" }}>{this.state.vendorError}</span>
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
                    <p>Manufacturer</p>
                    <input type="text" id="manufacturer" placeholder="enter manufacturer" onChange={this.getManufacturer}></input><span style={{ color: "red" }}>{this.state.manfError}</span>
                    <br></br>
                    <p>Price</p>
                    <input type="number" id="price" placeholder="enter Price" style={{color:"black"}} onChange={this.getPrice}></input><span style={{ color: "red" }}>{this.state.priceError}</span>
                    <br></br>
                    <p>Quantity</p>
                    <input type="number" id="quantity" placeholder="enter quantity" style={{color:"black"}} onChange={this.getQuantity}></input><span style={{ color: "red" }}>{this.state.quantityError}</span>
                    <br></br>
                    <p>Color</p>
                    <input type="text" id="color" placeholder="enter productColor" onChange={this.getColor}></input><span style={{ color: "red" }}>{this.state.codeError}</span>
                    <br></br>
                    {/* <p>In-stock</p>
                    <select id="stock" onChange={this.getStock}>
                        <option>Yes</option>
                        <option>No</option>
                    </select><span style={{ color: "red" }}>{this.state.catError}</span> */}
                    {/* <br></br><br></br> */}

                    <button id="add" onClick={this.addProduct} >Save Product</button>
                </form>
            </div>
            </div>
        );

    }


}
function convertPropToEventAndBroadcast(dispatch) {
    //console.log("Received the nameclicked event as props in FriendList.... ")
    return bindActionCreators({
        addNewProduct: broadcastAddProduct
    }, dispatch)

}
export default connect(null, convertPropToEventAndBroadcast)(AddProduct);