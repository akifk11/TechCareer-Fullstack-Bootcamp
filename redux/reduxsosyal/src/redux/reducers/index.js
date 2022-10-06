import countReducer from "./counterReducers";
import temaReducer from "./themesReducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    countReducer, temaReducer
})

export default reducers