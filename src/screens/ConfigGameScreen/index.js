import { connect } from "react-redux";

import { ConfigGameScreenComponent } from "./ConfigGameScreen";

import { getConfigGame } from "../../store/actions/configGame";
import { getIsFetching, getCategories } from "../../store/reducers/configGame";

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  categories: getCategories(state),
})

const mapDispatchToProps = {
  getConfigGame
}

export const ConfigGameScreen =
  connect(mapStateToProps, mapDispatchToProps)(ConfigGameScreenComponent)
