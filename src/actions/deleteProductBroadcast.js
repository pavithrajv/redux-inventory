const deleteProductBroadcast=function(id){
    console.log("delete product broadcsast....")
    console.log(id)
    return({
        type:"DELETE_PRODUCT",
        payload:id
    })
}

export default deleteProductBroadcast;