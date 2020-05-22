/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'
// import { Favs } from './Pages/Favs'
import { User } from './Pages/User'
import { NotRegisteredUser } from './Pages/NotRegisteredUser'
import { NotFound } from './Pages/NotFound'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

const Favs = React.lazy(() => import('./Pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
