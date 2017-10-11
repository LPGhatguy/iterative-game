export default function resources(state, action) {
	state = state || {
		glarbs: 10000,
		foobs: 16,
		meps: 0,
	};

	switch (action.type) {
		case "addResource":
			return {
				...state,
				[action.resource]: state[action.resource] + action.amount,
			};

		case "load":
			return action.data.resources;

		default:
			return state;
	}
};