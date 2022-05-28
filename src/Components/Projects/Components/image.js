import React from 'react'

function Image({img, classCss, alt}) {
  return (
    <img src={img} className={classCss} alt={alt} />
  )
}

export default Image