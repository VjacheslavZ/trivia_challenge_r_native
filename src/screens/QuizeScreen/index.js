import { connect } from "react-redux";

import {QuizScreenComponent} from "./QuizeScreen";
import { getDiifficulty, getCategory } from "../../store/reducers/configGame";

const mapStateToProps = state => console.log("state", state) || ({
  diifficulty: getDiifficulty(state),
  category: getCategory(state)
});


export const QuizScreen = connect(mapStateToProps)(QuizScreenComponent)
