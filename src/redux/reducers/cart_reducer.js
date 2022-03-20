const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0
}
const getTotalPrice = (arr) => arr.reduce((sum,obj)=> sum+obj.price, 0)

export const cartReducer = (state = initialState, action) => {
	switch(action.type) {
		
		case 'ADD_PIZZA_CART': {
			/* const newItems = {
				...state.items,
				[action.payload.id]: state.items[action.payload.id] ? [
					...state.items[action.payload.id],
					action.payload 
				] : 
				[action.payload]
			} */
			const currentPizzaItems = state.items[action.payload.id] ? [
					...state.items[action.payload.id].items,
					action.payload 
				] : 
					[action.payload]
			const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currentPizzaItems,
					itemsPrice: currentPizzaItems.reduce((sum,obj)=> sum+obj.price, 0)
				}
				
			}
			/* const qualObj = Object.values(newItems) */
			//todo второй вариант посчитать длину
			/* const qualObj = Object.values(newItems).map(obj=> obj.items)
			const allPizzas = [].concat.apply([], qualObj) */
			return {
				...state,
				items: newItems,
				/* totalCount: allPizzas.length,
				totalPrice: allPizzas.reduce((sum,obj)=> sum+obj.price, 0) */
				totalCount: Object.keys(newItems).reduce((sum, key)=>sum+ newItems[key].items.length, 0),
				totalPrice: Object.keys(newItems).reduce((sum, key)=>sum+ newItems[key].itemsPrice, 0)
			}
		}
		case 'PLUS_PIZZA_CART': {
			const currentPizzaItems = [...state.items[action.id].items,
				state.items[action.id].items[0]
			]
			const newItems = {
				...state.items,
				[action.id]: {
					items: currentPizzaItems,
					itemsPrice: currentPizzaItems.reduce((sum,obj)=> sum+obj.price, 0)
				}
			}
			return {
				...state,
				items: newItems,
				totalCount: Object.keys(newItems).reduce((sum, key)=>sum+ newItems[key].items.length, 0),
				totalPrice: Object.keys(newItems).reduce((sum, key)=>sum+ newItems[key].itemsPrice, 0)
			}
		}
		case 'MINUS_PIZZA_CART': {
			const currentPizzaItems = [...state.items[action.id].items]
			currentPizzaItems.pop()
			const newItems = {
				...state.items,
				[action.id]: {
					items: currentPizzaItems,
					itemsPrice: currentPizzaItems.reduce((sum,obj)=> sum+obj.price, 0)
				}
			}
			return {
				...state,
				items: newItems,
				totalCount: Object.keys(newItems).reduce((sum, key)=>sum+ newItems[key].items.length, 0),
				totalPrice: Object.keys(newItems).reduce((sum, key)=>sum+ newItems[key].itemsPrice, 0)
			}
		}
		case 'REMOVE_LINE_PIZZA':{
			const newItems = {
				...state.items
			}
			// запоминаем значения для оптимизации расчета нових значений
			const currentTotalPrice = newItems[action.id].itemsPrice
			const currentTotalCount = newItems[action.id].items.length
			// удаляем линию пицц
			delete newItems[action.id]
			return {
				...state,
				items: newItems,
				totalCount: state.totalCount - currentTotalCount,
				totalPrice: state.totalPrice - currentTotalPrice
			}
		}
		case 'CLEARE_CART': {
			return {
				...state,
				items: {},
				totalPrice: 0,
				totalCount: 0
			}
		}
		
		default: return state
	}
}