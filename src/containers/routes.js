import React from 'react';
import { Switch, Route} from 'react-router-dom';

import AllProducts from '../containers/allproducts'
import AddProduct from '../containers/addproduct'
import EditProduct from '../containers/editproduct'
import LoginComponent from './login';
import RegisterComponent from './register';

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
               
            </Switch> 
            </div>
         );
    }
}
 
export default Routes;