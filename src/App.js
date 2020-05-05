import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './Styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)
