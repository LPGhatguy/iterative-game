import config from "../config";

export default (state=config.version, action) => {
	switch (action.type) {
		case "load":
			return action.data.version;

		default:
			return state;
	}
};