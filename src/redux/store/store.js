import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import getAllMovies from "../reducers/getMovie";

const rootReducer = combineReducers({
    getAllMovies
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store