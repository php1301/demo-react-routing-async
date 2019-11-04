import {combineReducers} from "redux";
// import userReducer from "../reducers/userReducers";
import movieReducer from '../reducer/movieReducer';
const rootReducer = combineReducers ({
    movieReducer
})
export default rootReducer;