import React from 'react'
import { PacmanLoader } from 'react-spinners'
import './style.css'

const LoadingScreen = () => {

  return (
    <div className="loading-screen d-flex flex-column">
      <PacmanLoader color="#36d7b7" />
      <p>Loading...</p>
    </div>
  )
}

export default LoadingScreen