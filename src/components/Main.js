import React from "react";
import { connect } from "react-redux";

import bignum from "../bignum";

import "./Main.css";

let Main = ({ resources }) => {
	const children = [];

	for (const key in resources) {
		children.push(<div key={ key }>
			{ key }: { bignum.displaySimple(bignum.floor(resources[key])) }
		</div>);
	}

	return (
		<main className="Main">
			{ children }
		</main>
	);
};

const mapStateToProps = x => x;

Main = connect(mapStateToProps)(Main);

export default Main;