import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types'
import React from "react";

export const Sorting = React.memo(({sortFilters, sortActive, setActiveSort}) => {
	const targetClick =(event)=>{
		//todo если то место куда кликнули содержит нужный реф
		const path = (event.composedPath && event.composedPath()) || event.path
		if (!path.includes(sortRef.current)){
			setOpenPopap(false)
		}
	}
	const sortRef = useRef()
	useEffect(()=>{
		document.body.addEventListener('click', targetClick)
		return ()=>{
			document.body.removeEventListener('click', targetClick)
		}
	},[])

	const [openPopap, setOpenPopap] = useState(false);

	const activeFilter = sortFilters.find(obj => obj.type === sortActive).name;

	const clickCat = (obj) =>{
		setOpenPopap(!openPopap)
		setActiveSort(obj.type)
	}
	const clickOpenPopap = () =>{
		setOpenPopap(!openPopap)
	}

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg className={openPopap? "sort__icon _open": "sort__icon"}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={clickOpenPopap}>{activeFilter}</span>
      </div>
      <div className={openPopap? "sort__popup _open": "sort__popup"}>
        <ul>
			{sortFilters && sortFilters.map((obj, i)=> (
				<li key={`${obj.type}_${i}`} onClick={() => clickCat(obj)} 
				className={sortActive===obj.type ? 'active': ''}>{obj.name}</li>
				)
			)}
        </ul>
      </div>
    </div>
  );
})

Sorting.propTypes = {
	sortFilters: PropTypes.arrayOf(PropTypes.object).isRequired, 
	setActiveSort: PropTypes.func.isRequired, 
	sortActive: PropTypes.string.isRequired
}
Sorting.defaultProps = {
	sortFilters:[]
}