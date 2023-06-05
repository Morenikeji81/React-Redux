import counterReducer from "./Counter";
import loggedReducer from "./IsLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    Counter: counterReducer,
    IsLogged: loggedReducer
});


export default allReducers;
