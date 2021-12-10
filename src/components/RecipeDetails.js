import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null)
  const [isEmpty, setIsEmpty] = useState(false)
  const { name } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://christmas-recipes.herokuapp.com/recipes/${name}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setRecipe(data)
        } else {
          setIsEmpty(true)
        }
      })
      .catch(() => setIsEmpty(true))
  }, [name])

  useEffect(() => {
    if (isEmpty) {
      navigate('*')
    }
  }, [isEmpty, navigate])

  return (
    <div>
      {recipe ? (
        <div className='recipe-details'>
          <Link to='/recipes'>Back to All Recipes</Link>
          <p>Author: {recipe.Author}</p>
          <p>{recipe.Description}</p>
          <p>Ingredients</p>
          <ul style={{ listStyleType: 'circle', columns: 2 }}>
            {recipe.Ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>Cooking instruction</p>
          {recipe.Method.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <p>
            Recipe link:{' '}
            <a href={`${recipe.url}`} target='_blank' rel='noreferrer noopener'>
              {recipe.url}
            </a>
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default RecipeDetails
