export default (state, action) => {
	state = state || {};

	switch (action.type) {
		case "setFlag":
			return {
				...state,
				[action.name]: action.value,
			};

		case "load":
			return action.data.flags;

		default:
			return state;
	}
};