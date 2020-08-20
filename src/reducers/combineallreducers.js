import allProductsReducer from './allproducts';
const { combineReducers } = require("redux");


const allReducers=combineReducers({
    allproducts:allProductsReducer

})


export default allReducers;