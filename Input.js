import React from 'react'
import './Input.css'

const input = ({result, text}) => {
  return (
    <div className='Input-wrapper'>
      <div className='text'>
        <h3>{text} </h3> </div>
      <div className='result'>
        <h1>{result} </h1>
      </div>
      
      
      </div>
  )
}

export default input