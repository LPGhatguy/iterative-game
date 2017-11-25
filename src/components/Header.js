import React from "react";
import { connect } from "react-redux";

import "./Header.css";

let Header = ({ version }) => (
	<div className="Header">
		Iterative Game v{ version }
	</div>
);

const mapStateToProps = ({ version }) => ({ version });

Header = connect(mapStateToProps)(Header);

export default Header;