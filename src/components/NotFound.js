import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/notFound'

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className='lottie'>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        style={{ backgroundColor: '#ffa36c', borderRadius: '50%' }}
      />
      <p>NOT FOUND...</p>
    </div>
  )
}

export default NotFound
