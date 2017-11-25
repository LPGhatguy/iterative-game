import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";
import reducer from "./reducer";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const element = (
	<Provider store={ store }>
		<App />
	</Provider>
);

ReactDOM.render(element, document.getElementById("root"));
registerServiceWorker();
