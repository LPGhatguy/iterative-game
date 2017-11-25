import bignum from "../bignum";

export default function resources(state, action) {
	state = state || {
		glarbs: bignum.from(10000),
		foobs: bignum.from(16),
		meps: bignum.from(0),
	};

	switch (action.type) {
		case "addResource":
			return {
				...state,
				[action.resource]: bignum.add(state[action.resource], bignum.from(action.amount)),
			};

		case "load":
			return action.data.resources;

		default:
			return state;
	}
};