import React from "react";

export default class GameLoop extends React.Component {
	render() {
		return null;
	}

	tick = () => {
		const now = performance.now();
		const dt = (now - this.lastFrame) / 1000;
		this.lastFrame = now;

		if (!this.running) {
			return;
		}

		if (this.props.onStep) {
			this.props.onStep(dt);
		}

		requestAnimationFrame(this.tick);
	};

	componentDidMount() {
		this.lastFrame = performance.now();
		this.running = true;
		requestAnimationFrame(this.tick);
	}

	componentWillUnmount() {
		this.running = false;
	}
}