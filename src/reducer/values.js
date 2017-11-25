const defaultValues = () => ({
	aGenerators: 0,
	aGeneratorGenerators: 0,
});

export default (state, action) => {
	state = state || defaultValues();

	switch (action.type) {
		case "setValue":
			return {
				...state,
				[action.name]: action.value,
			};

		case "load":
			return action.data.values;

		case "restart":
			return defaultValues();

		default:
			return state;
	}
};