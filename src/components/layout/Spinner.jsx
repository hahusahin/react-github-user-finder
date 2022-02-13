import React from 'react'
import loadingSpinner from './assets/loadingSpinner.gif'

function Spinner() {
  return (
    <div className='w-100'>
      <img className='text-center mx-auto' width='180' src={loadingSpinner} alt="Loading..."/>
    </div>
  )
}

export default Spinner