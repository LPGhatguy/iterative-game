import React from "react";
import { connect } from "react-redux";

import Progress from "./Progress";
import SaveLoad from "./SaveLoad";

import "./App.css";

let App = ({ resources }) => {
	const children = [];

	for (const key in resources) {
		children.push(<div key={ key }>
			{ key }: { Math.floor(resources[key]) }
		</div>);
	}

	return (
		<div className="App">
			{ children }
			<SaveLoad />
			<Progress />
		</div>
	);
};

const mapStateToProps = x => x;

App = connect(mapStateToProps)(App);

export default App;