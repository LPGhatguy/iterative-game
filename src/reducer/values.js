export default (state, action) => {
	state = state || {};

	switch (action.type) {
		case "setValue":
			return {
				...state,
				[action.name]: action.value,
			};

		case "load":
			return action.data.values;

		default:
			return state;
	}
};