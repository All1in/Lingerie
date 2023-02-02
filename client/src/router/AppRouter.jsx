import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Page404 from '../pages/Page404'
import { privateRoutes, publicRoutes } from './Pages'

const AppRouter = () => {
  const token = useSelector(state => state.auth.token)

  return (
    <Routes>
      {(token ? privateRoutes : publicRoutes).map(route => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default AppRouter
