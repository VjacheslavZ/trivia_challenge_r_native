import {
  RECEIVE_QUESTIONS_CONFIG,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAIL,
  SET_ANSWER,
  CLEAR_ANSWERS,
} from "../actions/game";

import { handleActions } from "../../utils/redux-utils";

export const getQuestions = state => state.game.questions;
export const getIsFetching = state => state.game.fetching;
export const getAnswers = state => state.game.answers;

const initialState = {
  fetching: true,
  questions: [],
  answers: [],
}

export const game = handleActions({
  [RECEIVE_QUESTIONS_CONFIG]: state => ({
    ...state,
    fetching: true,
  }),
  [RECEIVE_QUESTIONS_SUCCESS]: (state, { payload }) => ({
    ...state,
    fetching: false,
    questions: payload,
  }),
  [RECEIVE_QUESTIONS_FAIL]: state => ({
    ...state,
    fetching: false,
  }),
  [SET_ANSWER]: (state, { payload }) => ({
    ...state,
    answers: [
      ...state.answers,
      payload,
    ]
  }),
  [CLEAR_ANSWERS]: state => ({
    ...state,
    answers: [],
  })
}, initialState)
