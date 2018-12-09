import axios from 'axios';

import {
    GET_ALL_ACCOUNTS,
    ACCOUNTS_LOADING,
    GET_PROFILE,
    ACCOUNTS_ERROR,
    CLEAR_ALL_ACCOUNTS 
    } from './types';

// Get current profile
export const getAllAccounts = () => {
    return async dispatch => {
        try {
            dispatch(setAccountsLoading());
            const res = await axios.get('/api/accounts/all');
            dispatch({
                type: 'GET_ALL_ACCOUNTS',
                payload: res.data
            });
        } catch(err) {
            dispatch({
                type: 'GET_ALL_ACCOUNTS',
                payload: "Could not load accounts"
            });
        }
    }
};

// Add or remove account from current profile's shortlist
export const shortlist = handle => {
    return async dispatch => {
        try {
            const res = await axios.post(`/api/accounts/handle/${handle}/shortlist`, handle);
            dispatch({
                type: 'GET_PROFILE',
                payload: res.data
            });
        } catch(err) {
            dispatch({
                type: 'ACCOUNTS_ERROR',
                payload: err.response.data.errMsg
            });
        }
    }
};

// Loader
export const setAccountsLoading = () => {
    return {
        type: 'PROFILE_LOADING'
    }
}

export const clearAllAccounts = () => {
    return {
        type: 'CLEAR_ALL_ACCOUNTS'
    }
}