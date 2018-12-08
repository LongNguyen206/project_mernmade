import axios from 'axios';

import {
    GET_PROFILE,
    PROFILE_LOADING,
    PROFILE_ERROR 
    } from './types';

// Get Current profile
export const getCurrentProfile = () => {
    return async dispatch => {
        try {
            dispatch(setProfileLoading());
            const res = await axios.get('/api/profile/');
            console.log('res', res)
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





export const getCurrentUser = () => {
    return async dispatch => {
        try {
            const res = await axios.get('/api/users/current')
            console.log('current user', res)
            dispatch({
                type: 'GET_CURRENT_USER',
                payload: res.data
            });
        } catch(err) {
            console.log(err)
        }
    }
};