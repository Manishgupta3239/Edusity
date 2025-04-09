import React from 'react'
import './title.css'
const Title = ({title , subtitle}) => {
  return (
    <div className='title'>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
