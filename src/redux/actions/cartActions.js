import { ActionTypes } from "../constants/action-types";
export const addToCart = ({ data }) => {
	return {
		type: ActionTypes.ADD_TO_CART,
		payload: data,
	};
};
// export const setProducts = (products) => {
// 	return {
// 		type: ActionTypes.SET_PRODUCTS,
// 		payload: products,
// 	};
// };

export const removeFromCart = ({ currentData, allData }) => {
	console.log("kdfkkdfk", currentData, allData);
	const dd = allData?.filter((ee) => ee.id !== currentData?.id);
	console.log("kkk", dd);
	return {
		type: ActionTypes.REMOVE_FROM_CART,
		payload: dd,
	};
};
