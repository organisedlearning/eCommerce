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
export const searchProduct = (data) => {
	console.log("data", data);
	return {
		type: ActionTypes.SEARCH_ITEMS,
		payload: data,
	};
};
export const sortProduct2 = (cart) => {
	return {
		type: ActionTypes.LOW_TO_HIGH,

		payload: cart,
	};
};
export const sortProduct = (cart) => {
	console.log("allData", cart);
	return {
		type: ActionTypes.HIGH_TO_LOW,

		payload: cart,
	};
};
