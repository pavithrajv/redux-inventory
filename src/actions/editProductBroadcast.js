const editProductBroadcast=function(product){
    //console.log(this.props)
    console.log(product)
    return({
        type:"EDIT_PRODUCT",
        payload:product
    })
}

export default editProductBroadcast