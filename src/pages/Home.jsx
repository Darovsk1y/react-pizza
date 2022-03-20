import { Categories, Sorting, Pizza } from "./../components";
import { useSelector,useDispatch } from 'react-redux';
import { setCategoryAC, setPizzasThunk, setSortingAC } from './../redux/actions/home_ac';
import { useCallback } from "react";
import { useEffect } from 'react';
import PizzaPreloader from './../components/dop/PizzaPreloader';
import { addPizzaCartAC } from './../redux/actions/cart_ac';

//todo данные вынесены из обьекта что бы избежать ререндэра
const sortCat = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  const sortFilters = [
    { name: "популярности", type: "rating" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "name" },
  ]; 

export const Home = () => {
const dispatch = useDispatch()
const pizzas = useSelector((state)=> state.homePage.pizzas)
const cartItems = useSelector((state)=> state.cartPage.items)
const isLoading = useSelector(state => state.homePage.isLoading)
const {sortActive, categoryActive} = useSelector(state => state.homePage)

useEffect(()=>{
	/* fetch("http://localhost:3000/db.json")
	.then(resp=> resp.json())
	.then(res=>{
		setPizzas(res.pizzas)
	}) */

	/* axios.get("http://localhost:3000/db.json")
	.then(({data})=> dispatch(setPizzas(data.pizzas))) */

	//! работает фейк server на 3001 порте
	/* axios.get("http://localhost:3001/pizzas")
	.then(({data})=> dispatch(setPizzas(data))) */
	dispatch(setPizzasThunk(categoryActive, sortActive))
	/* axios.get("http://localhost:3000/db.json")
	.then(res=> res.data)
	.then(data=> setPizzas(data.pizzas)) */
}, [sortActive, categoryActive])


	//вернет мемоизированный кулбек, ссылка на ф=ию не будет меняться
  const clickSetCat = useCallback((index)=>{
	dispatch(setCategoryAC(index))
  }, [])
  const setActiveSort = useCallback((param)=>{
	dispatch(setSortingAC(param))
  }, [])
  const onAddPizza = useCallback((obj)=>{
	dispatch(addPizzaCartAC(obj))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories sortCat={sortCat} setCategory={clickSetCat} categoryActive={categoryActive}/>
        <Sorting sortFilters={sortFilters} sortActive={sortActive} setActiveSort={setActiveSort}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
		{isLoading ? Array(10).fill(0).map((el, index)=> <PizzaPreloader key={index}/>) : 
		pizzas && pizzas.map((pizza) => <Pizza key={`${pizza.id}`} 
			{...pizza} 
			addPizza={onAddPizza}
			pizzaAdded={cartItems[pizza.id] && cartItems[pizza.id].items.length}
		/>)}
      </div>
    </div>
  );
};
