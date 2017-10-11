import React from "react";
import { connect } from "react-redux";

import addResource from "../actions/addResource";

class Progress extends React.Component {
	render() {
		return null;
	}

	step = () => {
		const now = performance.now();
		const dt = (now - this.lastFrame) / 1000;
		this.lastFrame = now;

		if (!this.running) {
			return;
		}

		this.props.addResource("glarbs", 2 * dt);

		requestAnimationFrame(this.step);
	};

	componentDidMount() {
		this.lastFrame = performance.now();
		this.running = true;
		requestAnimationFrame(this.step);
	}

	componentWillUnmount() {
		this.running = false;
	}
}

const mapStateToProps = ({ resources }) => ({ resources });
const mapDispatchToProps = (dispatch) => ({
	addResource: (resource, amount) => dispatch(addResource(resource, amount)),
});

Progress = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Progress);

export default Progress;