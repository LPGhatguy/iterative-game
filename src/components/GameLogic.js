import React from "react";
import { connect } from "react-redux";

import GameLoop from "./GameLoop";

import addResource from "../actions/addResource";
import setValue from "../actions/setValue";

class GameLogic extends React.Component {
	onStep = dt => {
		const aGenerators = this.props.values.aGenerators;
		this.props.addResource("resourceA", Math.floor(aGenerators) * dt);

		this.props.setValue("aGenerators", this.props.values.aGenerators + this.props.values.aGeneratorGenerators * dt * 0.1);
	};

	render() {
		return (
			<GameLoop onStep={ this.onStep } />
		);
	}
}

const mapStateToProps = ({ resources, values }) => ({ resources, values });
const mapDispatchToProps = (dispatch) => ({
	addResource: (resource, amount) => dispatch(addResource(resource, amount)),
	setValue: (name, value) => dispatch(setValue(name, value)),
});

GameLogic = connect(
	mapStateToProps,
	mapDispatchToProps,
)(GameLogic);

export default GameLogic;