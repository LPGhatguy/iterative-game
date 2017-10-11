import { version } from "../config";

export default (state=version, action) => {
	switch (action.type) {
		case "load":
			return action.data.version;

		default:
			return state;
	}
};