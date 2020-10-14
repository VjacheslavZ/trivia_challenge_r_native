import { connect } from "react-redux";

import { ScoreScreenComponent } from "./ScoreScreen";
import { getAnswers } from "../../store/reducers/game";
import { clearAnswers } from "../../store/actions/game";

const mapStateToProps = state => ({
  answers: getAnswers(state)
})

const mapDispatchToProps = ({
  clearAnswers,
})

export const ScoreScreen = connect(mapStateToProps, mapDispatchToProps)(ScoreScreenComponent)
