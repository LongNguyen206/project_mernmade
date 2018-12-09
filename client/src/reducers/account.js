import { GET_ALL_ACCOUNTS, GET_ACCOUNT, ACCOUNTS_LOADING, ACCOUNTS_ERROR, CLEAR_ALL_ACCOUNTS } from '../actions/types';

const DEFAULT_STATE = {
    accounts: null,
    account: null,
    loading: false,
    errorMessage: ''
}

// This is the Redux state depo, where the state is filled with json from actions (payloads) and later distributed to components as props
// return different states depending on action types provided
export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case ACCOUNTS_LOADING:
            return { ...state, loading: true };
        case GET_ALL_ACCOUNTS:
            return { ...state, accounts: action.payload, loading: false, errorMessage: '' };
        case GET_ACCOUNT:
            return { ...state, account: action.payload, accounts: null, loading: false, errorMessage: '' };
        case CLEAR_ALL_ACCOUNTS:
            return { ...state, accounts: null, errorMessage: '' };
        case ACCOUNTS_ERROR:
            return { ...state, loading: false, errorMessage: action.payload };
        default:
            return state;
    }
}