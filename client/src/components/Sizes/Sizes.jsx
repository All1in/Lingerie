import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSize, setstartPage } from '../../store/filter/filterSlice'
import Checkbox from '../Checkbox'
import './index.scss'

const Sizes = ({ sizesActive }) => {
  const sizesArray = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const dispatch = useDispatch()
  const sizeName = useSelector(state => state.filter.size)

  const handleSizeCheckbox = label => {
    const currentIndex = sizeName.indexOf(label)
    const newChecked = [...sizeName]
    if (currentIndex === -1) {
      newChecked.push(label)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    dispatch(setstartPage(1))
    dispatch(setSize(newChecked))
  }

  return (
    <ul className='page-sizes_list'>
      {sizesActive &&
        sizesArray &&
        sizesArray.map((item, index) => {
          return (
            <li className='page-sizes_item' key={index}>
              <Checkbox
                label={item}
                id='flexCheckDefault'
                onChangeCheckbox={() => handleSizeCheckbox(item)}
                isActive={sizeName.includes(item)}
              />
            </li>
          )
        })}
    </ul>
  )
}
export default Sizes
