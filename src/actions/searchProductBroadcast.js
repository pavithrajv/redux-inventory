const searchProductBroadcast = function (products) {
    return ({
        type: "SEARCH_PRODUCT",
        payload: products
    })
}

export default searchProductBroadcast;