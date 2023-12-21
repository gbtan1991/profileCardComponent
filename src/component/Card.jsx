import React from 'react'

const Card = ({ profile }) => {

  const bgColor = 'bg-' + profile.backgroundColor

  return (
    <div className={`${bgColor}`}>
      
      
      <h1>{profile.name}</h1>
      
      
    </div>
  )
}

export default Card
