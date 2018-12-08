import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { setCurrentUser } from './actions/authActions';
import authGuard from './components/HOCs/authGuard';

import App from './components/App';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import MyProfile from './components/MyProfile';
import SearchPage from "./components/SearchPage";
import ListingsPage from "./components/ListingsPage";
import ListingsProfile from "./components/ListingsProfile";

const jwToken = localStorage.getItem('JWTOKEN');
axios.defaults.headers.common['Authorization'] = jwToken;
let current_user = {}
// Get current user if token is valid
if (jwToken) {
    current_user = setCurrentUser(jwt_decode(jwToken)).payload
}

ReactDOM.render(
    <Provider store={ createStore(reducers,
    {
        auth: {
            isAuthenticated: jwToken ? true : false,
            user: current_user
        }
    }, composeWithDevTools(applyMiddleware(reduxThunk)))}>
        <BrowserRouter>
            <App>
                {/* All Routes defined here  */}
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/search" component={authGuard(SearchPage)} />
                <Route exact path="/search_result" component={authGuard(ListingsPage)} />
                <Route exact path="/myprofile" component={authGuard(MyProfile)} />
                <Route exact path="/profile/:id" component={authGuard(ListingsProfile)} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
