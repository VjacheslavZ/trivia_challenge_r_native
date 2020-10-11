import {
  RECEIVE_GAME_CONFIG,
  RECEIVE_GAME_SUCCESS,
  RECEIVE_GAME_FAIL,
} from "../actions/configGame";

const initialState = {
  isFetching: false,
  trivia_categories: []
}

import { handleActions } from "../../utils/redux-utils";


export const configGame = handleActions({
  [RECEIVE_GAME_CONFIG]: (state) => {
    return {
      ...state,
      isFetching: true,
    }
  },
  [RECEIVE_GAME_SUCCESS]: (state, { payload }) => {
    console.log("trivia_categories", payload)
    return {
      ...state,
      isFetching: false,
      trivia_categories: payload.trivia_categories
    }
  },
  [RECEIVE_GAME_FAIL]: (state) => {
    return {
      ...state,
      isFetching: false,
    }
  }
}, initialState)
