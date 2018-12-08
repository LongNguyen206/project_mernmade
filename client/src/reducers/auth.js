import isEmpty from '../validation/isEmpty';
import { SET_CURRENT_USER, AUTH_ERROR } from '../actions/types';

const DEFAULT_STATE = {
    isAuthenticated: false,
    user: '',
    errorMessage: ''
};

// return different states depending on action types provided
export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
        // do something:
            // modify and return state
            return { ...state, user: action.payload, isAuthenticated: !isEmpty(action.payload), errorMessage: '' };
        case AUTH_ERROR:
            console.log("Error from auth reducer");
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    };
};