import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Progress from "./Progress";
import SaveLoad from "./SaveLoad";

import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />

			<SaveLoad />
			<Progress />
		</div>
	);
};

export default App;