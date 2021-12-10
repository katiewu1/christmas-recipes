import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNavbar = () => {
  return (
    <>
      <header>
        <h1>Christmas Recipes</h1>
        <h2>1600 christmas recipes</h2>
        <p>dataset by Gary Broughton from kaggle</p>
      </header>
      <div className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/authors'>Recipes by Author</NavLink>
        <NavLink to='/recipes'>See all recipes</NavLink>
      </div>
    </>
  )
}

export default HeaderNavbar
