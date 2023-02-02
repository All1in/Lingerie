import React, { useEffect, useState } from 'react'
import Checkbox from '../Checkbox'
import './index.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setColor, setstartPage } from '../../store/filter/filterSlice'

const Colors = ({ contentActive }) => {
  const products = useSelector(state => state.products)
  const colorName = useSelector(state => state.filter.color)
  const [colorsFilters, setColorsFilters] = useState([])
  const dispatch = useDispatch()

  const handleColorCheckbox = label => {
    const currentIndex = colorName.indexOf(label)
    const newChecked = [...colorName]
    if (currentIndex === -1) {
      newChecked.push(label)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    dispatch(setstartPage(1))
    dispatch(setColor(newChecked))
  }

  useEffect(() => {
    const colorsArray = products.products.map(item => item.color)
    const uniqueColors = new Set(colorsArray)
    setColorsFilters(Array.from(uniqueColors))
  }, [products, setColorsFilters])

  return (
    <ul className='page-colors_list'>
      {contentActive &&
        colorsFilters &&
        colorsFilters.map((item, index) => {
          return (
            <li className='page-colors_item' key={index}>
              <Checkbox
                label={item}
                id='flexCheckDefault'
                colorSquare
                classForSquare={item.toLowerCase()}
                isActive={colorName.includes(item)}
                onChangeCheckbox={() => handleColorCheckbox(item)}
              />
            </li>
          )
        })}
    </ul>
  )
}
export default Colors
