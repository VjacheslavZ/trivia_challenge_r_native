import { TriviaApi } from "../../api/TriviaApi";

export const RECEIVE_QUESTIONS_CONFIG = "RECEIVE_QUESTIONS_CONFIG";
export const RECEIVE_QUESTIONS_SUCCESS = "RECEIVE_QUESTIONS_SUCCESS";
export const RECEIVE_QUESTIONS_FAIL = "RECEIVE_QUESTIONS_FAIL";

export const SET_ANSWER = "SET_ANSWER";
export const CLEAR_ANSWERS = "CLEAR_ANSWERS";

const receiveQuestions = ({
  type: RECEIVE_QUESTIONS_CONFIG
})

const receiveQuestionsSuccess = payload => ({
  type: RECEIVE_QUESTIONS_SUCCESS,
  payload
})

const receiveQuestionsFail = payload => ({
  type: RECEIVE_QUESTIONS_FAIL,
  payload
})

export const setAnswer = payload => ({
  type: SET_ANSWER,
  payload
})

export const clearAnswers = () => ({
  type: CLEAR_ANSWERS,
})

export const fetchQuestions = query => dispatch => {
  dispatch(receiveQuestions)
  TriviaApi.getQuizQuestions(query)
    .then(res => dispatch(receiveQuestionsSuccess(res.data.results)))
    .catch(err => dispatch(receiveQuestionsFail(err)))
};
