import { GET_PROFILE, PROFILE_LOADING, PROFILE_ERROR } from '../actions/types';

const DEFAULT_STATE = {
    profile: null,
    profiles: null,
    loading: false,
    errorMessage: ''
}

// This is the Redux state depo, where the state is filled with json from actions (payloads) and later distributed to components as props
// return different states depending on action types provided
export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case PROFILE_LOADING:
            return { ...state, loading: true };
        case GET_PROFILE:
            return { ...state, profile: action.payload, loading: false };
        case PROFILE_ERROR:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}