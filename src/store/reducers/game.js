import {
  RECEIVE_QUESTIONS_CONFIG,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAIL,
} from "../actions/game";

import { handleActions } from "../../utils/redux-utils";

export const getQuestions = state => state.game.questions
export const getIsFetching = state => state.game.fetching

const initialState = {
  fetching: true,
  questions: [],
  answers: [],
}

export const game = handleActions({
  [RECEIVE_QUESTIONS_CONFIG]: (state) => {
    return {
      ...state,
      fetching: true
    }
  },
  [RECEIVE_QUESTIONS_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      fetching: false,
      questions: payload
    }
  },
  [RECEIVE_QUESTIONS_FAIL]: (state) => {
    return {
      ...state,
      fetching: false
    }
  },
}, initialState)
