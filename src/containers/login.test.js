import React from 'react';
import LoginComponent from './login';
import { render } from '@testing-library/react';
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom'


const mockStore = configureMockStore([])
describe('Login', () => {
  let store
  beforeEach(() => {
    store = mockStore([])
  })
  it('login component renders with all the form elements...', () => {
    const { getByText, getAllByPlaceholderText } = render(
      <Router>
        <Provider store={store}>
          <LoginComponent />
        </Provider>
      </Router>
      )
      getByText("LOGIN HERE.!!")
      getAllByPlaceholderText("Enter username")
      getAllByPlaceholderText("enter password")
  
  })
});