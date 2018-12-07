// Root Reducer - brings together all other reducers
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import homepageReducer from './homepage';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    home: homepageReducer
});