export const RECEIVE_GAME_CONFIG = "RECEIVE_GAME_CONFIG";
export const RECEIVE_GAME_SUCCESS = "RECEIVE_GAME_SUCCESS";
export const RECEIVE_GAME_FAIL = "RECEIVE_GAME_FAIL";

export const SET_DIFFICULTY = "SET_DIFFICULTY";
export const SET_CATEGORY = "SET_CATEGORY";

import { TriviaApi } from "../../api/TriviaApi";

const receiveConfig = ({
  type: RECEIVE_GAME_CONFIG
})
const receiveConfigSuccess = payload => ({
  type: RECEIVE_GAME_SUCCESS,
  payload
})

const receiveConfigFail = payload => ({
  type: RECEIVE_GAME_FAIL,
  payload
})

export const getConfigGame = () => (dispatch) => {
  dispatch(receiveConfig)
  TriviaApi.getCategoryList()
    .then(({ data }) => dispatch(receiveConfigSuccess(data)))
    .catch(err => dispatch(receiveConfigFail(err)))
};

export const setDifficulty = payload => ({
  type: SET_DIFFICULTY,
  payload
})

export const setCategory = payload => ({
  type: SET_CATEGORY,
  payload
})
