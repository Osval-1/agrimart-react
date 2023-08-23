import React from 'react'
import PlaceHolder from '../../assets/PlaceHolder.png'



const Image = ({src,alt,width,height}) => {
  return (
    <div className='w-full' >
        <img src={src}
         alt={alt} className='w-full' />
    </div>

   
  )
}

export default Image