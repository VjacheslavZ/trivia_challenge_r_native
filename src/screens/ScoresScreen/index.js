import { connect } from "react-redux";

import { ScoreScreenComponent } from "./ScoreScreen";
import { getAnswers } from "../../store/reducers/game";

const mapStateToProps = state => ({
  answers: getAnswers(state)
})

export const ScoreScreen = connect(mapStateToProps)(ScoreScreenComponent)
