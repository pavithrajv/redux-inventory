const broadcastAddProduct=function(product){
    console.log(product)
    console.log("broadcast action recieved...")
    return(
        {
            type:"ADD_PRODUCT",
            payload:product
        }
    )
}

export default broadcastAddProduct;