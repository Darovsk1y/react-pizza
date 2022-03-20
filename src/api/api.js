import axios from 'axios'

export const homeAPI = {
	setPizzas(category=null, sorting) {
		// категория може бути невибрана, а от сортінг приходе завжди
		
		//return axios.get(`http://localhost:3001/pizzas?${category!==null? `category=${category}`: ''}&_sort=${sorting}&_order=asc`)
		//! после добавления proxy в package.json
		return axios.get(`/pizzas?${category!==null? `category=${category}`: ''}&_sort=${sorting}&_order=asc`)
		.then(res => {
			return res.data
		} )
	}
}