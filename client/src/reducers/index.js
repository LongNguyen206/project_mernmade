// Root Reducer - brings together all other reducers
import { combineReducers } from 'redux';
// import itemReducer from './itemReducer';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';

export default combineReducers({
    // item: itemReducer
    form: formReducer,
    auth: authReducer
});