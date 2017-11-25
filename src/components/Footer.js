import React from "react";
import { connect } from "react-redux";

import restart from "../actions/restart";

import "./Footer.css";

let Footer = ({ onRestart }) => (
	<div className="Footer">
		<a className="Footer-credit" href="https://lpg.space">
			Lucien Greathouse
		</a>

		<button type="button" className="Footer-restart" onClick={ onRestart }>
			Restart Game
		</button>
	</div>
);

const mapDispatchToProps = dispatch => ({
	onRestart: () => dispatch(restart()),
});

Footer = connect(undefined, mapDispatchToProps)(Footer);

export default Footer;