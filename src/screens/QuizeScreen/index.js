import { connect } from "react-redux";

import { QuizScreenComponent } from "./QuizeScreen";
import {
  getDiifficulty,
  getCategory,
  getCategories,
} from "../../store/reducers/configGame";
import { getQuestions, getIsFetching } from "../../store/reducers/game";
import { fetchQuestions } from "../../store/actions/game";

const mapStateToProps = state => ({
  diifficulty: getDiifficulty(state),
  category: getCategory(state),
  questions: getQuestions(state),
  isFetching: getIsFetching(state),
  categories: getCategories(state),
});

const mapDispatchToProps = {
  fetchQuestions,
}

export const QuizScreen = connect(mapStateToProps, mapDispatchToProps)(QuizScreenComponent)
