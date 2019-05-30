import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loginReducer from "./loginReducer";
import signupReducer from './signupReducer';
import createparcelsReducer from './createparcelReducer';
import getparcelReducer from './getparcelsReducer';

export default combineReducers({
    auth: authReducer,
    loginReducer: loginReducer,
    signupReducer,
    createparcelsReducer,
    getparcelReducer

});
