import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className='homepage'>
        <p>
          Website built in React using React Router to test my API with node.js
          Express.
        </p>
        <p>GitHub links:</p>
        <div className='homepage-links-container'>
          <a
            href='https://github.com/katiewu1/project-express-api'
            target='_blank'
            rel='noreferrer noopener'
          >
            project-express-api
          </a>
          <a
            href='https://github.com/katiewu1/christmas-recipes'
            target='_blank'
            rel='noreferrer noopener'
          >
            christmas-recipes
          </a>
        </div>
      </div>
    </>
  )
}

export default HomePage
