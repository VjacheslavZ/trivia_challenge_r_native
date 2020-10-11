import { connect } from "react-redux";

import { ConfigGameScreenComponent } from "./ConfigGameScreen";
import { getConfigGame } from "../../store/actions/configGame";

const mapDispatchToProps = {
  getConfigGame
}

export const ConfigGameScreen =
  connect(null, mapDispatchToProps)(ConfigGameScreenComponent)
