
export const initialState = {
	sortActive: 'rating',
	categoryActive: null,
	pizzas: [],
	isLoading: false
}

export const homeReducer = (state =initialState, action) =>{
	switch(action.type) {
		case 'SET_SORTING': {
			return {
				...state,
				sortActive: action.payload
			}
		}
		//это дублирование логики локального стейта нужно для того
		//что бы обратиться к локал.серверу и сделать сортировку пицц
		case 'SET_CATEGORY': {
			return {
				...state,
				categoryActive: action.payload
			}
		}
		case 'SET_PIZZAS': {
			return {
				...state,
				pizzas: [...action.payload],				
			}
		}
		case 'SET_LOADING': {
			return {
				...state,
				isLoading: action.loading
			}
		}

		default: return state
	}
}