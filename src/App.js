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
        {/* instead of Redirect we can use now Route with path of '*' */}
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<HomePage />} />
        <Route path='authors' element={<ListOfAuthors />} />
        <Route path='recipes' element={<AllRecipes />} />
        <Route path='recipes/:name' element={<RecipeDetails />} />
        {/* <Route path='/404' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
