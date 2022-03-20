
const ADD_PIZZA_CART = "ADD_PIZZA_CART";
const PLUS_PIZZA_CART = "PLUS_PIZZA_CART";
const MINUS_PIZZA_CART = "MINUS_PIZZA_CART";
const REMOVE_LINE_PIZZA = "REMOVE_LINE_PIZZA";
const CLEARE_CART = "CLEARE_CART";


export const addPizzaCartAC = (payload) => {
	return ({
		type: ADD_PIZZA_CART,
		payload
	})
}
export const plusPizzaCartAC = (id) => {
	return ({
		type: PLUS_PIZZA_CART,
		id
	})
}
export const minusPizzaCartAC = (id) => {
	return ({
		type: MINUS_PIZZA_CART,
		id
	})
}
export const removeLinePizzaAC = (id) => {
	return ({
		type: REMOVE_LINE_PIZZA,
		id
	})
}
export const cleareCartAC = () => {
	return ({
		type: CLEARE_CART
	})
}
