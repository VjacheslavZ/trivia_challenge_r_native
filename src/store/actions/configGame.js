export const RECEIVE_GAME_CONFIG = "RECEIVE_GAME_CONFIG";
export const RECEIVE_GAME_SUCCESS = "RECEIVE_GAME_SUCCESS";
export const RECEIVE_GAME_FAIL = "RECEIVE_GAME_FAIL";

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
