import { combineReducers, createStore } from "redux";
import { configGame } from "./configGame";

const reducers = combineReducers({
  configGame
})
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
