import React from 'react'

const Item = ({icon,content}) => {
  return (
    <div className='flex justify-between '>
        {icon}{content}
        </div>
  )
}

export default Item