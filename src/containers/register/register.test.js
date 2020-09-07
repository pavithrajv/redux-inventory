import React from 'react';
import { mount, configure } from 'enzyme';
import RegisterComponent from './register';
import { render, getAllByLabelText} from '@testing-library/react';
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

const mockStore = configureMockStore([])
describe('Login', () => {
  let store
  beforeEach(() => {
    store = mockStore([])
  })
  it('register component renders with all the form elements...', () => {
    const { getByText, getAllByPlaceholderText } = render(
      <Router>
        <Provider store={store}>
          <RegisterComponent />
        </Provider>
      </Router>
      )
      getByText("REGISTER HERE.!!")
      getByText("Name")
      getByText("Emailid")
      getByText("UserName")
      getByText("Password")
      getByText("Mobile.No")
  })
});