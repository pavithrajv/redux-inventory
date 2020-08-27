const searchCategoryBroadcast = function (products) {
    return ({
        type: "SEARCH_CATEGORY",
        payload: products
    })
}

export default searchCategoryBroadcast;