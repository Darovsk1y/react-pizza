import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ButtonUnivers } from './Header/Button';

export const Pizza = ({id, name, price, imageUrl, types, sizes, addPizza, pizzaAdded}) => {

	const [typesActive, setTypesActive]=useState(types[0])
	const [sizeActive, setSizeActive]=useState(sizes[0])
	//доступні розміри по улочанию
	const typesDefault = [
		'тонкое',
		'традиционное'
	]
	const sizesDafault = [26, 30, 40]
	//обробники кліку
	const onSelectType = (i) =>{
		setTypesActive(i)
	}
	const onSelectSize = (size) =>{
		setSizeActive(size)
	}
	const onAddPizza = () => {
		//формируем нужные пар.пиццы
		const obj = {
			id, name, price, imageUrl, 
			size: sizeActive,
			type: typesDefault[typesActive]
		}
		addPizza(obj);
	}
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
			{typesDefault && typesDefault.map((type, i)=> <li key={i} className={classNames({
				//todo назва класу : та умова
				active: typesActive===i,
				disabled: !types.includes(i)
			})}
			onClick={()=> onSelectType(i)}>{type}</li>)}
        </ul>
        <ul>
			{sizesDafault.map((size, i)=>  <li key={i}
			onClick={()=>onSelectSize(size)}
			className={classNames({
				active: sizeActive===size,
				disabled: !sizes.includes(size)
			})}
			>{`${size} см.`}</li>)}
          {/* <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li> */}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{`от ${price} ₽`}</div>
        <ButtonUnivers className="button--add" outline onClick={onAddPizza}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {pizzaAdded && <i>{pizzaAdded}</i>}
        </ButtonUnivers>
      </div>
    </div>
  );
};

//типізація
Pizza.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	imageUrl: PropTypes.string.isRequired,
	types: PropTypes.arrayOf(PropTypes.number).isRequired,
	sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
	addPizza: PropTypes.func.isRequired,
	pizzaAdded: PropTypes.number
}
//по умолчанию можно писать не в верстке условием а тут
Pizza.defaultProps = {
	name: "----",
	types: [],
	sizes: [],
	price: 300,
	imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
}