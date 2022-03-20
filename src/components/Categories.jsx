import React from 'react'
import PropTypes from 'prop-types'

export const Categories = React.memo(({sortCat, setCategory, categoryActive}) => {

	const selectCategory = (index) => {
		setCategory(index)
	}
	
  return (
    <div className="categories">
      <ul>
        <li className={categoryActive===null ? "active": ''}
		onClick={()=> selectCategory(null)}
		>Все</li>
		{sortCat && sortCat.map((item, index)=> <li 
		className={categoryActive===index ? 'active': ''}
			key={`${item}_${index}`}
			onClick={()=> selectCategory(index)}
		>{item}</li>)}
      </ul>
    </div>
  );
})

Categories.propTypes = {
	sortCat: PropTypes.arrayOf(PropTypes.string).isRequired, 
	setCategory: PropTypes.func, 
	categoryActive:  PropTypes.number
}
Categories.defaultProps = {
	sortCat: [], 
	categoryActive: null
}