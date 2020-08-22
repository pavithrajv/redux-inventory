import React from 'react';
import { connect } from "react-redux";
class Notification extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {  }
    }

    
    render() { 
        
        return ( 
            <div>
                <nav style={{backgroundColor:"lightgrey",width:"100%",display:"flex"}}>
                <center><h2 >Avl products:{this.props.products.length}</h2></center>
                </nav>
            </div>
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


export default connect(convertStoreToProps)(Notification);