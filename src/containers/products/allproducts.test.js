import React from 'react';
import AllProducts from './allproducts';
import { render } from '@testing-library/react';
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom'


const mockStore = configureMockStore([])
describe('all products component renders', () => {
  let reduxstore
  beforeEach(() => {
    reduxstore = mockStore({
      allproducts: [{
        "productCode": "REAL45",
        "productName": "Realme Mobile XT",
        "productImage": "https://img.mobygeek.com/crop/1200x628/2019/05/10/img-0223-f178.jpg",
        "vendor": "Vision star",
        "category": "Mobile",
        "Manufacturer": "REALME",
        "quantity": "25",
        "price": "10999",
        "color": "black",
        "id": 1
      },
      {
        "productCode": "CAN365",
        "productName": "Canon Waterproof Camera",
        "productImage": "https://images-na.ssl-images-amazon.com/images/I/41I39mJtjAL.jpg",
        "vendor": "Supercomet",
        "category": "Camera",
        "Manufacturer": "CANON",
        "quantity": "20",
        "price": "500",
        "color": "black",
        "id": 2
      }]
    })
  })
  it('check for addprodocut text in allproducts component', () => {
    const { getAllByText } = render(
      <Router>
        <Provider store={reduxstore}>
          <AllProducts />
        </Provider>
      </Router>
    )
    getAllByText("Realme Mobile XT")
    getAllByText("CANON")
  }),
    it('renders product columns in product table', () => {
      const { getByText } = render(<Router>
        <Provider store={reduxstore}>
          <AllProducts />
        </Provider>
      </Router>);
      const img = getByText("Image");
      expect(img).toBeInTheDocument();
      const pcode = getByText("productCode");
      expect(pcode).toBeInTheDocument();
      const pname = getByText("ProductName");
      expect(pname).toBeInTheDocument();
      const pven = getByText("Vendor");
      expect(pven).toBeInTheDocument();
      const cat = getByText("category");
      expect(cat).toBeInTheDocument();
      const manf = getByText("Manufacturer");
      expect(manf).toBeInTheDocument();
      const price = getByText("price");
      expect(price).toBeInTheDocument();
      const qty = getByText("quantity");
      expect(qty).toBeInTheDocument();
      const clr = getByText("color");
      expect(clr).toBeInTheDocument();
    });
});