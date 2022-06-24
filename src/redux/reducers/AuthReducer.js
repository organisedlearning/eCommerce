import { ActionTypes } from "../constants/action-types";
const initialState = {
	email: "",
	password: "",
};
export const AuthReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.LOG_IN:
			return {
				...state,
				email: payload,
				password: payload,
			};
		default:
			return state;
	}
};
