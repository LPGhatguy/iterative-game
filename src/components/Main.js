import React from "react";
import { connect } from "react-redux";

import addResource from "../actions/addResource";
import setValue from "../actions/setValue";

import "./Main.css";

let Main = ({ dispatch, resources, values }) => {
	const children = [];

	for (const key in resources) {
		children.push(<div key={ key }>
			{ key }: { Math.floor(resources[key]) }
		</div>);
	}

	const buyA = () => {
		if (resources.resourceA >= 10) {
			dispatch(addResource("resourceA", -10));
			dispatch(setValue("aGenerators", values.aGenerators + 1));
		}
	};

	const buyA2 = () => {
		if (resources.resourceA >= 100) {
			dispatch(addResource("resourceA", -100));
			dispatch(setValue("aGeneratorGenerators", values.aGeneratorGenerators + 1));
		}
	};

	return (
		<main className="Main">
			<div className="Main-buttons">
				<button onClick={ buyA }>Buy A Generator</button>
				<button onClick={ buyA2 }>Buy A Generator Generator</button>
			</div>

			<div>
				{ children }
			</div>
		</main>
	);
};

const mapStateToProps = x => x;
const mapDispatchToProps = dispatch => ({ dispatch });

Main = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Main;