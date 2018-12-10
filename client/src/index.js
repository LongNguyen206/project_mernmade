import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { composeWithDevTools } from "redux-devtools-extension";

<<<<<<< HEAD
import "./styling/Style.css";
import * as serviceWorker from "./serviceWorker";
import reducers from "./reducers";
import { setCurrentUser } from "./actions/authActions";
import authGuard from "./components/HOCs/authGuard";
=======
import './styling/Style.css';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { setCurrentUser, logout } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import { clearAllAccounts } from './actions/accountActions';
import authGuard from './components/HOCs/authGuard';
>>>>>>> 2d182b13f47850387fcedf171afef27a72b822de

import App from "./components/App";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile";
import Saved from "./components/Saved";
import SearchPage from "./components/SearchPage";
import Account from "./components/Account";
import About from "./FooterPages/About";
import TandC from "./FooterPages/TandC";
import Privacy from "./FooterPages/Privacy";

<<<<<<< HEAD
const jwToken = localStorage.getItem("JWTOKEN");
axios.defaults.headers.common["Authorization"] = jwToken;
let current_user = {};
// Get current user if token is valid
if (jwToken) {
  current_user = setCurrentUser(jwt_decode(jwToken)).payload;
=======
const jwToken = localStorage.getItem('JWTOKEN');
let current_user = {};
const store = createStore(
    reducers,
    {
      auth: {
          isAuthenticated: jwToken ? true : false,
          user: current_user
      }
  }, composeWithDevTools(applyMiddleware(reduxThunk)));
// Get current user if token is valid
if (localStorage.JWTOKEN) {
    axios.defaults.headers.common['Authorization'] = jwToken;
    current_user = setCurrentUser(jwt_decode(jwToken)).payload;
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (jwt_decode(jwToken).exp < currentTime) {
        // TODO: Clear current Profile
        store.dispatch(clearCurrentProfile());
        store.dispatch(clearAllAccounts());
        // Logout user
        store.dispatch(logout());
        // Redirect to login
        window.location.href = '/login';
    }
>>>>>>> 2d182b13f47850387fcedf171afef27a72b822de
}

ReactDOM.render(
  <Provider
<<<<<<< HEAD
    store={createStore(
      reducers,
      {
        auth: {
          isAuthenticated: jwToken ? true : false,
          user: current_user
        }
      },
      composeWithDevTools(applyMiddleware(reduxThunk))
    )}
  >
    <BrowserRouter>
      <App>
        {/* All Routes defined here  */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/myprofile" component={authGuard(MyProfile)} />
        <Route exact path="/search" component={authGuard(SearchPage)} />
        <Route exact path="/account/:handle" component={authGuard(Account)} />
        <Route exact path="/saved" component={authGuard(Saved)} />
        {/* footer pages */}
        <Route exact path="/about" component={About} />
        <Route exact path="/terms" component={TandC} />
        <Route exact path="/privacy" component={Privacy} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
=======
    store={ store }>
        <BrowserRouter>
            <App>
                {/* All Routes defined here  */}
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/myprofile" component={authGuard(MyProfile)} />
                <Route exact path="/search" component={authGuard(SearchPage)} />
                <Route exact path="/account/:handle" component={authGuard(Account)} />
                <Route exact path="/saved" component={authGuard(Saved)} />
                {/* footer pages */}
                <Route exact path="/about" component={About} />
                <Route exact path="/terms" component={TandC} />
                <Route exact path="/privacy" component={Privacy} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
>>>>>>> 2d182b13f47850387fcedf171afef27a72b822de

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
