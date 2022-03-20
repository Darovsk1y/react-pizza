import { homeAPI } from './../../api/api';
const SET_CATEGORY = "SET_CATEGORY";
const SET_SORTING = "SET_SORTING";
const SET_PIZZAS = "SET_PIZZAS";
const SET_LOADING = "SET_LOADING";

// home_reducers AC
export const setCategoryAC = (category) =>({
	type: SET_CATEGORY,
	payload: category
})
export const setSortingAC = (sort) =>({
	type: SET_SORTING,
	payload: sort
})
export const setPizzas = (pizzas) =>({
	type: SET_PIZZAS,
	payload: pizzas
})
export const setLoading = (param) => ({
	type: SET_LOADING,
	loading: param
})

//Thunks
export const setPizzasThunk = (category, sorting) => async (dispatch) => {
	//! работает фейк server на 3001 порте
	dispatch(setLoading(true))
	const data = await homeAPI.setPizzas(category, sorting)
	if(data) {
		dispatch(setPizzas(data))
		dispatch(setLoading(false))
	}
	
}
