import { combineReducers } from "redux";

import resources from "./resources";
import version from "./version";
import flags from "./flags";

const reducer = combineReducers({
	resources,
	version,
	flags,
});

export default reducer;