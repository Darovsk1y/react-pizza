import './scss/app.scss'
/* import { Header } from './components/Header/Header';
import { Categories } from './components/Categories'; 
import { Sorting } from './components/Sorting'; */
//todo Теперь єто труппі импорта
import {Header} from './components'
import { Home,Cart } from './pages';
import { Routes,Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<div className="wrapper">
				<Header />
				<div className="content">
					<Routes>
						<Route path='/' element={<Home />}/>
						<Route path='/cart' element={<Cart/>}/> 
					</Routes>
				</div>
			</div>
		</div>
	);
}
export default App;
