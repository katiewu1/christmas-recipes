import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HeaderNavbar from './components/HeaderNavbar'
import HomePage from './components/HomePage'
import ListOfAuthors from './components/ListOfAuthors'
import AllRecipes from './components/AllRecipes'
import RecipeDetails from './components/RecipeDetails'
import NotFound from './components/NotFound'

export const App = () => {
  return (
    <BrowserRouter>
      <HeaderNavbar />
      <Routes>
        <Route path='/404' element={<NotFound />} />
        <Route path='/' element={<HomePage />} />
        <Route path='authors' element={<ListOfAuthors />} />
        <Route path='recipes' element={<AllRecipes />} />
        <Route path='recipes/:name' element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
