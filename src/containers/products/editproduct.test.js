import React from 'react';
import ReactDom from 'react-dom';
import EditProduct from './editproduct';
import { mount, configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
configure({ adapter: new Adapter() })

describe("Edit Product Page", function () {

  it('check for editpoduct component', () => {
    
      shallow(<Router><Provider><EditProduct /></Provider></Router>)
  })

    
    
})