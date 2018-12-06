import { ACCOUNTS_GET_ALL } from '../actions/types';

const DEFAULT_STATE = {
    accounts: ''
}

// return different states depending on action types provided
export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case ACCOUNTS_GET_ALL:
        // do something:
            // modify and return state
            return { ...state, accounts: action.payload }
        default:
            return state
    }
}