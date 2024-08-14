import React from 'react'
import { FaRegStar } from 'react-icons/fa6'

export default function StarScore({score}) {
  return (
    <div className=' flex items-center text-lg '>
      {
        Array(score).fill(0).map(star => <FaRegStar className='text-rose-500'/>)
      }
    </div>
  )
}
