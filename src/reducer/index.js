import { combineReducers } from "redux";

import resources from "./resources";
import version from "./version";

const reducer = combineReducers({
	resources,
	version,
});

export default reducer;