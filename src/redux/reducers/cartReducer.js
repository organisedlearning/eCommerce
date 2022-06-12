import { ActionTypes } from "../constants/action-types";

const initialState = {
	cart: [],
};
export const cartReducer = (state = initialState, { type, payload }) => {
	console.log("cart Reducer", payload);
	switch (type) {
		case ActionTypes.ADD_TO_CART:
			return { ...state, cart: [...state.cart, payload] };
		default:
			return state;
		case ActionTypes.REMOVE_FROM_CART:
			return { ...state, cart: payload };
	}
};
