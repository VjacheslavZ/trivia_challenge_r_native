import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk'
import { configGame } from "./configGame";

const reducers = combineReducers({
  configGame
});
const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || ''
const initialState = {};

export const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunkMiddleware),
    // REDUX_DEVTOOLS
  ),
);
