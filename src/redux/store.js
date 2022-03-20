import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { cartReducer } from './reducers/cart_reducer';
import { homeReducer } from './reducers/home_reducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
	homePage: homeReducer,
	cartPage: cartReducer
})
// второй параметр нужен для плагина REDUX_DEVTOOLS
//const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//todo після підкл redux-thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window._store_= store;
export default store;