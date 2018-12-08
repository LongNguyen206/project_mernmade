// actionCreators live here
// actionCreators create/return actions
// actions are then dispatched to different middlewares and then reducers
// every action has a Type
// reducers get HIT by the actions based on action's Type
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { 
    SET_CURRENT_USER,
    AUTH_ERROR
    } from './types';

export const register = data => {
    // Step 1. Use the form data to make http request to our backend and send it along
    // Step 2. Take the BE's response (JWT)
    // Step 3. Dispatch (push to reducers) a msg that user just registered with jwt payload
    // Step 4. Save the jwToken into our local storage
    return async dispatch => {
        try {
            const res = await axios.post('/api/users/register', data);
            localStorage.setItem('JWTOKEN', res.data.token);
            // Set token to Authorization header (passed with each request)
            axios.defaults.headers.common['Authorization'] = res.data.token;
            // Decode token to get user
            const decoded = jwt_decode(res.data.token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        } catch(err) {
            dispatch({
                type: 'AUTH_ERROR',
                payload: err.response.data.errMsg
            });
        };
    };
};

export const login = data => {
    return async dispatch => {
        try {
            const res = await axios.post('/api/users/login', data);
            localStorage.setItem('JWTOKEN', res.data.token);
            // Set token to Authorization header (passed with each request)
            axios.defaults.headers.common['Authorization'] = res.data.token;
            // Decode token to get user
            const decoded = jwt_decode(res.data.token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        } catch(err) {
            dispatch({
                type: 'AUTH_ERROR',
                payload: err.response.data.errMsg
            });
        };
    };
};

export const oauthFacebook = data => {
    return async dispatch => {
        try {
            const res = await axios.post('/api/users/auth/facebook', {
                access_token: data 
            });
            localStorage.setItem('JWTOKEN', res.data.token);
            // Set token to Authorization header (passed with each request)
            axios.defaults.headers.common['Authorization'] = res.data.token;
            // Decode token to get user
            const decoded = jwt_decode(res.data.token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        } catch(err) {
            dispatch({
                type: 'AUTH_ERROR',
                payload: err.response.data.errMsg
            });
        };
    };
};

export const logout = () => {
    return dispatch => {
        // Remove token from local storage
        localStorage.removeItem('JWTOKEN');
        // Set current user to {}, which also sets isAuthenticated to 'false'
        dispatch(setCurrentUser({}));
        // Remove Authorization header for future requests
        delete axios.defaults.headers.common['Authorization'];
    };
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: 'SET_CURRENT_USER',
        payload: decoded
    };
};