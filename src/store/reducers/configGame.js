import {
  RECEIVE_GAME_CONFIG,
  RECEIVE_GAME_SUCCESS,
  RECEIVE_GAME_FAIL,
  SET_DIFFICULTY,
  SET_CATEGORY,
} from "../actions/configGame";

const initialState = {
  isFetching: false,
  trivia_categories: [],
  category: "",
  difficulty: "",
}

import { handleActions } from "../../utils/redux-utils";

export const getIsFetching = state => state.configGame.isFetching;
export const getCategories = state => state.configGame.trivia_categories;
export const getDiifficulty = state => state.configGame.difficulty;
export const getCategory = state => state.configGame.category;

export const configGame = handleActions({
  [RECEIVE_GAME_CONFIG]: (state) => {
    return {
      ...state,
      isFetching: true,
    }
  },
  [RECEIVE_GAME_SUCCESS]: (state, { payload }) => {
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
  },
  [SET_DIFFICULTY]: (state, { payload }) => {
    return {
      ...state,
      difficulty: payload
    }
  },
  [SET_CATEGORY]: (state, { payload }) => {
    return {
      ...state,
      category: payload
    }
  }
}, initialState)
