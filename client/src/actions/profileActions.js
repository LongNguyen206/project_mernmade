import axios from 'axios';

import {
    GET_PROFILE,
    PROFILE_LOADING,
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

export const clearCurrentProfile = () => {
    return {
        type: 'CLEAR_CURRENT_PROFILE'
    }
}