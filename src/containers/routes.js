import React from 'react';
import { Switch, Route} from 'react-router-dom';

import AllProducts from './products/allproducts'
import AddProduct from './products/addproduct'
import EditProduct from './products/editproduct'
import LoginComponent from './login/login';
import RegisterComponent from './register/register';
import Dashboard from '../containers/dashboard/dashboard'

class Routes extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            {/* Content goes here */}
            <Switch>
                <Route exact path='/' component={LoginComponent}></Route>    
               
                <Route path='/products' component={AllProducts}></Route>
                <Route path='/addproduct' component={AddProduct}></Route>
                <Route path='/editproduct' component={EditProduct}></Route>
                <Route  path='/register' component={RegisterComponent}></Route>
                <Route  path='/dashboard' component={Dashboard}></Route>                 
               
            </Switch> 
            </div>
         );
    }
}
 
export default Routes;