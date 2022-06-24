import { ActionTypes } from "../constants/action-types";
export const login = (data) => {
	return {
		type: ActionTypes.LOG_IN,
		payload: data,
	};
};
export const logout = (data) => {
	return {
		type: ActionTypes.LOG_OUT,
		payload: data,
	};
};
