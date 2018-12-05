import { AUTH_REGISTER, AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR } from '../actions/types';

const DEFAULT_STATE = {
    isAuthenticated: false,
    token: '',
    errorMessage: ''
}

// return different states depending on action types provided
export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case AUTH_REGISTER:
        // do something:
            // modify and return state
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
        case AUTH_LOGIN:
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
        case AUTH_LOGOUT:
            return { ...state, token: action.payload, isAuthenticated: false, errorMessage: '' }
        case AUTH_ERROR:
            console.log("Error from auth reducer");
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}