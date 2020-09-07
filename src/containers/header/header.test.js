import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom'
import Header from './header';


const mockStore = configureMockStore([])
describe('Header component', () => {
  let store
  beforeEach(() => {
    store = mockStore([])
  })
  it('header component renders ...', () => {
    const { getByText, getAllByPlaceholderText } = render(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
      )
  }),
  it('header component text renders ...', () => {
    const { getByText} = render(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
      )
      getByText("Product Inventory System")
      getByText("Logout")
  })
});