import React from 'react';
import Notification from './notification';
import { render, getByText } from '@testing-library/react';
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom'


const mockStore = configureMockStore([])
describe('notification component renders', () => {
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
  it('check for notification component text..', () => {
    const { getAllByText,getByText } = render(
      <Router>
        <Provider store={reduxstore}>
          <Notification />
        </Provider>
      </Router>
    )
    getAllByText("Product Inventory")
    getByText("Products:2")
    getByText("Logout")
  })
});