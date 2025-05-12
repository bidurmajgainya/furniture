import React from 'react'

const Image = ({imagePath ,imageInfo,imageCss}  ) => {
  return (
    <img className={imageCss}src={imagePath} alt={imageInfo} /> 
  )
}

export default Image