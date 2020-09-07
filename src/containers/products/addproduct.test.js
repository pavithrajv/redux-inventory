import React from 'react';
import AddProduct from './addproduct';
import { render } from '@testing-library/react';
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom'


const mockStore = configureMockStore([])
describe('add product component renders', () => {
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
  it('check for addprodocut text in addproduct component', () => {
    const { getAllByText } = render(
      <Router>
        <Provider store={reduxstore}>
          <AddProduct />
        </Provider>
      </Router>
    )
    getAllByText("Save Product")
  }),
  it('check for addproduct placeholders in addpoduct component', () => {
    const {getByPlaceholderText} = render(
      <Router>
        <Provider store={reduxstore}>
          <AddProduct />
        </Provider>
      </Router>
    )
    getByPlaceholderText("enter productCode")
    getByPlaceholderText("enter productName")
    getByPlaceholderText("enter image address")
    getByPlaceholderText("enter vendor details")
    getByPlaceholderText("enter manufacturer")
    getByPlaceholderText("enter Price")
    getByPlaceholderText("enter quantity")
    getByPlaceholderText("enter productColor")
  })
});