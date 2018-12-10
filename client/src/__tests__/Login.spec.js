import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Login } from '../components/Login';
Enzyme.configure({ adapter: new Adapter() });

// mount rendering is used for full DOM rendering where you have components that requrie the full lifecycle such as component didmount
// shallow rendering tests components in isolation, without child components

// behaviour test
// testing if it is authenticated once they log in, the should be redirected to search
describe('Login', () => {
  // we have used a mock function here to tell us whether that function was called
  // combined with enzyme to test user actions                                     
  const pushFn = jest.fn();
  const handleSubmitFn = jest.fn();

  const props = {
    auth: { isAuthenticated: true },
    errorMessage: '',
    history: { push: pushFn },
    handleSubmit: handleSubmitFn
  }
  // here we actually wrtie the test
  // we describe ti then import shallow with login
  it('should go to the search route if authenticated', () => {
    const wrapper = shallow(<Login {...props} />);
    wrapper.instance().componentDidMount();
    expect(pushFn).toBeCalled();
    expect(pushFn).toBeCalledWith('/search');
  })
})