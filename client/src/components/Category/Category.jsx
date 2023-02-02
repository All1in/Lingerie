import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setstartPage } from '../../store/filter/filterSlice'
import PropTypes from 'prop-types'
import Checkbox from '../Checkbox'
import './index.scss'

const Category = ({ categoryActive }) => {
  const products = useSelector(state => state.products)
  const categories = useSelector(state => state.filter.categories)
  const [categoryArr, setCategoryArr] = useState([])
  const dispatch = useDispatch()

  const handleCategoryCheckbox = label => {
    const currentIndex = categories.indexOf(label)
    const newChecked = [...categories]
    if (currentIndex === -1) {
      newChecked.push(label)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    dispatch(setstartPage(1))
    dispatch(setCategory(newChecked))
  }

  useEffect(() => {
    const categoryArr = products.products.map(item => item.categories)
    const existingCategory = new Set(categoryArr)
    setCategoryArr(Array.from(existingCategory))
  }, [products])

  return (
    <ul className='page-filter_list'>
      {categoryActive &&
        categoryArr &&
        categoryArr.map((item, index) => {
          return (
            <li className='page-filter_item' key={index}>
              <Checkbox
                label={item}
                id='flexCheckDefault'
                isActive={categories.includes(item)}
                onChangeCheckbox={() => handleCategoryCheckbox(item)}
              />
            </li>
          )
        })}
    </ul>
  )
}

Category.propTypes = {
  categoryActive: PropTypes.bool
}

export default Category
