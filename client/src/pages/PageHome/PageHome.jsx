import React from 'react'
import Banner from '../../components/Banner'
import PerfectSet from './PerfectSet'
import Sales from './Sales'
import AboutUs from './AboutUs'
import Instagram from './Instagram'
import Menu from './Menu'

const PageHome = () => {
  return (
    <>
      <Menu />
      <Banner />
      <PerfectSet />
      <Sales />
      <AboutUs />
      <Instagram />
    </>
  )
}

export default PageHome
