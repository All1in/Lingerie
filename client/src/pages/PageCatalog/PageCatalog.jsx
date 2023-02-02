import React, { useState, useLayoutEffect, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Title from '../../components/Title/Title'
import Category from '../../components/Category'
import Colors from '../../components/Colors'
import Sizes from '../../components/Sizes'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import Button from '../../components/Button'
import Galery from '../../components/Galery'
import SortList from '../../components/SortList'
import {
  setstartPage,
  setperPage,
  setMinPrice,
  setMaxPrice
} from '../../store/filter/filterSlice'
import Pagination from '../../components/Pagination'
import './PageCatalog.scss'
import MinMaxFilter from '../../components/MinMaxFilter'

const PageCatalog = () => {
  const { products, startPage, perPage, minPrice, maxPrice } = useSelector(
    state => state.filter
  )
  const pagesCount = Math.ceil(products.productsQuantity / perPage)
  const currentWidth = useWindowSize()

  const [sizesActive, setsizesActive] = useState(true)
  const [colorActive, setcolorActive] = useState(true)
  const [categoryActive, setcategoryActive] = useState(true)
  const [filtersIsOpen, setfiltersIsOpen] = useState(true)

  function useWindowSize() {
    const [displayWidth, setdisplayWidth] = useState(0)
    useLayoutEffect(() => {
      function updateSize() {
        setdisplayWidth(window.innerWidth)
      }
      window.addEventListener('resize', updateSize)
      updateSize()
      return () => window.removeEventListener('resize', updateSize)
    }, [])
    return displayWidth
  }

  const showColor = () => setcolorActive(!colorActive)
  const showSizes = () => setsizesActive(!sizesActive)
  const showCategory = () => setcategoryActive(!categoryActive)
  const showFilters = () => setfiltersIsOpen(filtersIsOpen => !filtersIsOpen)

  const dispatch = useDispatch()
  useEffect(() => {
    currentWidth < 768 ? dispatch(setperPage(2)) : dispatch(setperPage(6))
    currentWidth < 768 ? setfiltersIsOpen(false) : setfiltersIsOpen(true)
  }, [currentWidth, dispatch])

  const handleChangeMin = event => {
    dispatch(setMinPrice(event.target.value))
  }
  const handleChangeMax = event => {
    dispatch(setMaxPrice(event.target.value))
  }

  const handleInput = event => {
    dispatch(setMinPrice(event[0]))
    dispatch(setMaxPrice(event[1]))
    dispatch(setstartPage(1))
  }

  const LoadMore = () => {
    dispatch(setstartPage(1))
    dispatch(setperPage(+perPage + 3))
  }

  return (
    <div className='container page'>
      <BreadCrumbs startFrom='Home' />
      <Title subtitle='Catalogue' />
      <div className='page-wrapper'>
        <Title
          title='Filters box'
          showContent={showFilters}
          className={'filtering'}
        />
        {filtersIsOpen && (
          <aside className='page-sidebar'>
            <Title
              title='Category'
              showContent={showCategory}
              className={'active'}
            />
            <Category
              categoryActive={
                currentWidth < 768 ? !categoryActive : categoryActive
              }
            />
            <Title
              title='Colors'
              showContent={showColor}
              className={'active'}
            />
            <Colors
              contentActive={currentWidth < 768 ? !colorActive : colorActive}
            />
            <Title title='Sizes' showContent={showSizes} className={'active'} />
            <Sizes
              sizesActive={currentWidth < 768 ? !sizesActive : sizesActive}
            />
            <MinMaxFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              onChange={event => handleInput(event)}
              onChangeInputMin={event => handleChangeMin(event)}
              onChangeInputMax={event => handleChangeMax(event)}
            />
          </aside>
        )}
        <section className='content cards'>
          <SortList />
          <Galery />
        </section>
        <section className='page-controls'>
          {startPage < pagesCount && (
            <Button
              text='Load more beauty'
              className='page__button content-button'
              onClick={LoadMore}
            />
          )}
          {pagesCount !== 1 && <Pagination />}
        </section>
      </div>
    </div>
  )
}

export default PageCatalog
