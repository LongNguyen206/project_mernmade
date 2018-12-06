// actionCreators live here
// actionCreators create/return actions
// actions are then dispatched to different middlewares and then reducers
// every action has a Type
// reducers get HIT by the actions based on action's Type
// constants and variables for export
import axios from 'axios';

import { 
    AUTH_REGISTER, 
    AUTH_LOGIN, 
    AUTH_LOGOUT, 
    AUTH_ERROR,
    ACCOUNTS_GET_ALL 
    } from './types';

export const register = data => {
    // Step 1. Use the form data to make http request to our backend and send it along
    // Step 2. Take the BE's response (JWT)
    // Step 3. Dispatch (push to reducers) a msg that user just registered with jwt payload
    // Step 4. Save the jwToken into our local storage
    return async dispatch => {
        try {
            const res = await axios.post('/api/users/register', data);
            dispatch({
                type: 'AUTH_REGISTER',
                payload: res.data
            });
            localStorage.setItem('JWTOKEN', res.data.token);
        } catch(err) {
            dispatch({
                type: 'AUTH_ERROR',
                payload: err.response.data.errMsg
            });
        }
    }
};

export const login = data => {
    return async dispatch => {
        try {
            const res = await axios.post('/api/users/login', data);
            dispatch({
                type: 'AUTH_LOGIN',
                payload: res.data
            });
            console.log('res', res.data)
            localStorage.setItem('JWTOKEN', res.data.token);
        } catch(err) {
            console.log('-----------', err)
            dispatch({
                type: 'AUTH_ERROR',
                payload: err.response.data.errMsg
            });
        }
    }
};

export const oauthFacebook = data => {
    return async dispatch => {
        try {
            const res = await axios.post('/api/users/auth/facebook', {
                access_token: data });
                console.log('res', res)
            dispatch({
                type: 'AUTH_LOGIN',
                payload: res.data
            });
            console.log('res', res.data)
            localStorage.setItem('JWTOKEN', res.data.token);
            axios.defaults.headers.common['Authorization'] = res.data.token;
        } catch(err) {
            dispatch({
                type: 'AUTH_ERROR',
                payload: err.response.data.errMsg
            });
        }
        
    }
};

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('JWTOKEN');
        dispatch({
            type: 'AUTH_LOGOUT',
            payload: ''
        });
        axios.defaults.headers.common['Authorization'] = '';
    }
};

export const getAccounts = () => {
    return async dispatch => {
        try {
            const res = await axios.get('/api/accounts/all')
            console.log(typeof res.data)
            dispatch({
                type: 'ACCOUNTS_GET_ALL',
                payload: res.data
            });
        } catch(err) {
            console.log(err)
        }
    }
};