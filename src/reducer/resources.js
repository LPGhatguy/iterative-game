const defaultValues = () => ({
	resourceA: 10,
});

export default function resources(state, action) {
	state = state || defaultValues();

	switch (action.type) {
		case "addResource":
			return {
				...state,
				[action.resource]: state[action.resource] + action.amount,
			};

		case "load":
			return action.data.resources;

		case "restart":
			return defaultValues();

		default:
			return state;
	}
};