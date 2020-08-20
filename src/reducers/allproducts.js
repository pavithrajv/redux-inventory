import { act } from "@testing-library/react";

const allProductsReducer = function listAllProducts(state = null, action) {
    var allproducts = [
        {
            id: 1,
            name: "laptop1",
            category: "laptop",
            price: "25000",
            quantity: "20",
            inStock: "yes"
        },
        {
            id: 2,
            name: "laptop2",
            category: "laptop",
            price: "25000",
            quantity: "20",
            inStock: "yes"
        },
        {
            id: 3,
            name: "laptop3",
            category: "laptop",
            price: "25000",
            quantity: "20",
            inStock: "yes"
        },
        {
            id: 4,
            name: "laptop4",
            category: "laptop",
            price: "25000",
            quantity: "20",
            inStock: "yes"
        }
    ]

    switch (action.type) {
        case "ADD_PRODUCT":
            console.log('add name, category and other details for new product....')
            console.log(state);
            console.log(action.payload);
            let length = state.length
            let newProduct = [{
                id: length + 1,
                name: action.payload.name,
                category: action.payload.category,
                price: action.payload.price,
                quantity: action.payload.quantity,
                inStock: action.payload.inStock
            }, ...state]
            return newProduct

        case "DELETE_PRODUCT":
            console.log(action.payload);
            console.log(state)
            let newAllProd = state.filter(p => p.id != action.payload);
            allproducts = newAllProd;
            console.log(allproducts);
            return allproducts;

        case "EDIT_PRODUCT":
            console.log(action.payload)
            let product={
                name:action.payload.name
            }
            console.log(product)

            return allproducts;
        default:
            break;
    }

    return allproducts
}

export default allProductsReducer;