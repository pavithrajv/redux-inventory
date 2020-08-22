import React from 'react';
import { Switch, Route} from 'react-router-dom';

import AllProducts from '../containers/allproducts'
import AddProduct from '../containers/addproduct'
import EditProduct from '../containers/editproduct'

class Routes extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            {/* Content goes here */}
            <Switch>
                <Route exact path='/' component={AllProducts}></Route>    
               
                
                <Route path='/addproduct' component={AddProduct}></Route>
                <Route path='/editproduct' component={EditProduct}></Route>
                
               
            </Switch> 
            </div>
         );
    }
}
 
export default Routes;