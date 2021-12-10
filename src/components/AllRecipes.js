import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LoadingIndicator from './LoadingIndicator'

const AllRecipes = () => {
  const [allRecipes, setAllRecipes] = useState([])
  const [pageInfo, setPageInfo] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  // custom hook - builds on useLocation to parse the query string
  const { search } = useLocation()
  // whenever we have a new url search params it will trigger the useEffect
  const params = new URLSearchParams(search)
  const author = params.get('author')

  useEffect(() => {
    setLoading(true)
    // empty the allRecipes array before fetching a new list of recipes
    setAllRecipes([])
    // console.log('params:', params)
    // console.log('author:', author)
    if (author) {
      fetch(
        `https://christmas-recipes.herokuapp.com/recipes/?author=${author}&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setAllRecipes(data.response.results)
            setPageInfo(data.response)
          } else {
            setErrorMessage(data.response)
            setIsEmpty(true)
          }
        })
        .catch(() => setIsEmpty(true))
        .finally(setLoading(false))
    } else {
      fetch(`https://christmas-recipes.herokuapp.com/recipes/?page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          setAllRecipes(data.response.results)
          setPageInfo(data.response)
        })
        .finally(setLoading(false))
    }
  }, [search, author, page])

  useEffect(() => {
    if (isEmpty) {
      // if there is no author found, navigate to page 404 and display the response message
      // pass data when navigating with state
      navigate('/404', { state: { message: errorMessage } })
    }
  }, [isEmpty, navigate, errorMessage])

  const handlePrevPageChange = () => {
    setPage(page - 1)
  }

  const handleNextPageChange = () => {
    setPage(page + 1)
  }

  return (
    <div className='all-recipes'>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <p className='page-title'>All Recipes</p>
          <div className='page-info-wrapper'>
            <p>current page no: {pageInfo.page}</p>
            <p>number of pages: {pageInfo.num_of_pages}</p>
          </div>
          <div className='page-info-wrapper'>
            <button
              type='button'
              onClick={() => handlePrevPageChange()}
              disabled={pageInfo.page < 2}
            >
              Previous page
            </button>
            <button
              type='button'
              onClick={() => handleNextPageChange()}
              disabled={pageInfo.page === pageInfo.num_of_pages}
            >
              Next page
            </button>
          </div>
          {/* if we have an author - display it in uppercase */}
          {author && <p>{author.toUpperCase()}</p>}
          <ul className='ul-recipes'>
            {allRecipes.map((recipe) => (
              <Link
                key={recipe.url}
                to={`${recipe.Name.replace(/\s/g, '_').toLowerCase()}`}
                style={{ color: '#799351' }}
              >
                <li>{recipe.Name}</li>
              </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default AllRecipes
