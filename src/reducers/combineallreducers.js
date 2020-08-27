import allProductsReducer from './allproducts';
import allUsersReducer from './allusers'
const { combineReducers } = require("redux");


const allReducers=combineReducers({
    allproducts:allProductsReducer,
    allusers:allUsersReducer

})


export default allReducers;