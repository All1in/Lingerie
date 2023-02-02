import React, { useState } from 'react'
import './SortList.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setSortType } from '../../store/filter/filterSlice'

export const sortOptions = [
  { sortName: 'Price: Low to High', sortProperty: '+currentPrice' },
  { sortName: 'Price: High to Low', sortProperty: '-currentPrice' }
]

const SortList = () => {
  const [sortActive, setSortActive] = useState(false)
  const dispatch = useDispatch()
  const sort = useSelector(state => state.filter.sort)

  // const sortOption = sortOptions[selected].sortName;

  const onSelected = sort => {
    dispatch(setSortType(sort))
    setSortActive(false)
  }

  return (
    <>
      <p className='content-sort' onClick={() => setSortActive(!sortActive)}>
        Sort by <span></span>
      </p>
      {sortActive && (
        <ul className='content-sort-list '>
          {sortOptions.map((item, index) => (
            <li
              className={
                sort.sortProperty === item.sortProperty
                  ? 'content-sort-item active'
                  : 'content-sort-item'
              }
              key={index}
              onClick={() => onSelected(item)}
            >
              {item.sortName}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default SortList
