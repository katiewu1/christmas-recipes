import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingIndicator from './LoadingIndicator'

const ListOfAuthors = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://christmas-recipes.herokuapp.com/authors')
      .then((res) => res.json())
      .then((data) => {
        setList(data.response)
      })
      .finally(setLoading(false))
  }, [])

  return (
    <div className='list-of-authors'>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <p className='page-title'>List of Authors!</p>
          <ul className='ul-authors'>
            {list.map((author) => (
              <Link
                key={author}
                to={`/recipes/?author=${author.toLowerCase()}`} // &page=${page}
                style={{ color: '#A20A0A' }}
              >
                <li>{author}</li>
              </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default ListOfAuthors
