import './scss/app.scss'
/* import { Header } from './components/Header/Header';
import { Categories } from './components/Categories'; 
import { Sorting } from './components/Sorting'; */
//todo Теперь єто труппі импорта
import {Header} from './components'
import { Home,Cart } from './pages';
import { Routes,Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { setPizzas } from './redux/actions/home_ac';
import { connect } from 'react-redux';

class App extends React.Component {
	
	/* fetch("http://localhost:3000/db.json")
		.then(resp=> resp.json())
		.then(res=>{
			setPizzas(res.pizzas)
		}) */
		/* axios.get("http://localhost:3000/db.json")
		.then(res=> res.data)
		.then(data=> setPizzas(data.pizzas)) */
	componentDidMount(){
		axios.get("http://localhost:3000/db.json")
		.then(({data})=> this.props.setPizzas(data.pizzas))
	}
	
	render() {

		return (
			<div>
				<div className="wrapper">
					<Header />
					<div className="content">
						<Routes>
							<Route path='/' element={<Home pizzas={this.props.pizzas}/>}/>
							<Route path='/cart' element={<Cart/>}/> 
						</Routes>
					</div>
				</div>
			</div>
		);
	}
	
}
const mapStateToProps = (state) =>{
	return {
		pizzas: state.homePage.pizzas
	}
	
}
export default connect(mapStateToProps, {setPizzas})(App);
