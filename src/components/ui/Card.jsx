import React from 'react'

const Card = ({children ,title}) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <h1 className='mb-1 font-semibold text-xl'>{title}</h1>
      <div className='text-grey '>
        {children}
      </div>
</div>
  )
}

export default Card