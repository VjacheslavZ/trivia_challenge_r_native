import { TriviaApi } from "../../api/TriviaApi";

export const RECEIVE_QUESTIONS_CONFIG = "RECEIVE_QUESTIONS_CONFIG";
export const RECEIVE_QUESTIONS_SUCCESS = "RECEIVE_QUESTIONS_SUCCESS";
export const RECEIVE_QUESTIONS_FAIL = "RECEIVE_QUESTIONS_FAIL";

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

export const fetchQuestions = (query) => (dispatch) => {
  dispatch(receiveQuestions)
  TriviaApi.getQuizQuestions(query)
    .then(res => dispatch(receiveQuestionsSuccess(res.data.results)))
    .catch(err => dispatch(receiveQuestionsFail(err)))
}
