import axios from 'axios';

import {
    GET_PROFILE,
    GET_ALL_ACCOUNTS,
    PROFILE_LOADING,
    ACCOUNTS_LOADING,
    CLEAR_CURRENT_PROFILE,
    PROFILE_ERROR 
    } from './types';

// Get Current profile
export const getCurrentProfile = () => {
    return async dispatch => {
        try {
            dispatch(setProfileLoading());
            const res = await axios.get('/api/profile/');
            dispatch({
                type: 'GET_PROFILE',
                payload: res.data
            });
        } catch(err) {
            dispatch({
                type: 'GET_PROFILE',
                payload: {}
            });
        }
    }
};

// Get Current profile's shortlist
export const getShortlist = () => {
    return async dispatch => {
        try {
            dispatch(setAccountsLoading());
            const res = await axios.get('/api/profile/shortlist');
            dispatch({
                type: 'GET_ALL_ACCOUNTS',
                payload: res.data
            });
        } catch(err) {
            dispatch({
                type: 'PROFILE_ERRORS',
                payload: []
            });
        }
    }
};

// Create or Edit current profile
export const changeProfile = profileData => {
    return async dispatch => {
        try {
            dispatch(setProfileLoading());
            const res = await axios.post('/api/profile/', profileData);
            dispatch({
                type: 'GET_PROFILE',
                payload: res.data
            });
        } catch(err) {
            dispatch({
                type: 'PROFILE_ERROR',
                payload: err.response.data.errMsg
            });
        }
    }
};

export const setProfileLoading = () => {
    return {
        type: 'PROFILE_LOADING'
    }
}

export const setAccountsLoading = () => {
    return {
        type: 'ACCOUNTS_LOADING'
    }
}

export const clearCurrentProfile = () => {
    return {
        type: 'CLEAR_CURRENT_PROFILE'
    }
}