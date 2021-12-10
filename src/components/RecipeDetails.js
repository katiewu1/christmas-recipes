import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null)
  const [isEmpty, setIsEmpty] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { name } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://christmas-recipes.herokuapp.com/recipes/${name}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('data: ', data)
        if (data.success) {
          // console.log('data.response: ', data.response)
          // console.log('data success true: ', data)
          setRecipe(data.response)
        } else {
          // console.log('data.response success false: ', data.response)
          setErrorMessage(data.response)
          setIsEmpty(true)
        }
      })
      .catch(() => setIsEmpty(true))
  }, [name])

  useEffect(() => {
    if (isEmpty) {
      console.log('errorMessage: ', errorMessage)
      // if there is no recipe found, navigate to page 404 and display the response message
      // pass data when navigating with state
      navigate('/404', { state: { message: errorMessage } })
    }
  }, [isEmpty, navigate, errorMessage])

  return (
    <div>
      {recipe ? (
        <div className='recipe-details'>
          <Link to='/recipes'>Back to All Recipes</Link>
          <p>Author: {recipe.Author}</p>
          <p>{recipe.Description}</p>
          <p>Ingredients</p>
          <ul style={{ listStyleType: 'circle', columns: 2 }}>
            {recipe.Ingredients.map((item, index) => (
              <li key={index}>{item}</li>
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
