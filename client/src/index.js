import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Landing from './components/Landing';
import Register from './components/Register';

ReactDOM.render(
    <BrowserRouter>
        <App>
            {/* All Routes defined here  */}
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/register" component={Register}></Route>
        </App>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
