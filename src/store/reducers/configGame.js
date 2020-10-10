import {
  RECEIVE_GAME_CONFIG,
  RECEIVE_GAME_SUCCESS,
  RECEIVE_GAME_FAIL,
} from "../actions/configGame";

const initialState = {
  isFetching: true,
}

import { handleActions } from "../../utils/redux-utils";


export const configGame = handleActions({
  [RECEIVE_GAME_CONFIG]: (action) => {
    console.groupCollapsed("reducer handleActions");
    console.log("action", action)
    console.groupEnd();
  }
}, initialState)
