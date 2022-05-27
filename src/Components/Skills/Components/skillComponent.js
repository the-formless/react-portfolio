import React from 'react'

function Skill({img, title}) {
  return (
    <div className='skill'>
      <img 
        src={img} alt={title}/>
      <h2>{title}</h2>
    </div>
  )
}

export default Skill