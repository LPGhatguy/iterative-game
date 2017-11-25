import { combineReducers } from "redux";

import resources from "./resources";
import version from "./version";
import values from "./values";

const reducer = combineReducers({
	resources,
	version,
	values,
});

export default reducer;