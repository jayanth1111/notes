import React from 'react'
import "../styles/Card.css"
const Card = ({emoji,heading,detail,grade}) => {
  return (
    <div className='card'>
        <img src={emoji} alt=""/>
        <span>{heading}</span>
        <span>{detail}</span>
        <span>score: {grade}</span>

    </div>
  )
}

export default Card