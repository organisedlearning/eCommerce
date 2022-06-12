import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};

export const selectedProducts = (products) => {
	return {
		type: ActionTypes.SELECTED_PRODUCTS,
		payload: products,
	};
};

export const removeSelectedProducts = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
	};
};
export const addToCart = (data) => {
	return {
		type: ActionTypes.ADD_TO_CART,
		payload: data,
	};
};
