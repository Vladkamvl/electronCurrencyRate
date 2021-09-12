import {combineReducers} from "redux";
import {courses as coursesReducers} from "./courses";
import {symbols as symbolsReducers} from "./symbols";

const rootReducer = combineReducers({
    courses: coursesReducers,
    symbols: symbolsReducers,
});

export default rootReducer;