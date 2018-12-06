import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import { Container } from 'react-materialize';

import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import authGuard from './components/HOCs/authGuard';

import App from './components/App';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
import SearchPage from "./components/SearchPage";
import ListingsPage from "./components/ListingsPage";

const jwToken = localStorage.getItem('JWTOKEN');
axios.defaults.headers.common['Authorization'] = jwToken;

ReactDOM.render(
    <Provider store={ createStore(reducers, {
        auth: {
            token: jwToken,
            isAuthenticated: jwToken ? true : false
        }
    }, applyMiddleware(reduxThunk)) }>
        <BrowserRouter>
            <App>
                    {/* All Routes defined here  */}
                    <Route exact path="/" component={Landing} />
                <Container>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </Container>
                    <Route exact path="/search" component={authGuard(SearchPage)} />
                    <Route exact path="/search_result" component={authGuard(ListingsPage)} />
                    <Route exact path="/home" component={authGuard(Homepage)} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
