import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const jwToken = localStorage.getItem('JWTOKEN');
if (jwToken) {
    current_user = setCurrentUser(jwt_decode(jwToken)).payload;
    // Check for expired token
}
const store = createStore(
    reducers,
    {
      auth: {
          isAuthenticated: jwToken ? true : false,
          user: current_user
      }
  }, composeWithDevTools(applyMiddleware(reduxThunk)))

export default store;