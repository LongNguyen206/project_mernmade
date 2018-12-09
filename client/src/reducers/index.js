// Root Reducer - brings together all other reducers
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import profileReducer from './profile';
import accountsReducer from './account';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    profile: profileReducer,
    accounts: accountsReducer
});