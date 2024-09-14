import React from 'react'
import { FaStar } from 'react-icons/fa6'

export default function StarScore({ score }) {
  return (
    <div className=' flex items-center text-lg '>
      {
        Array(score).fill(0).map(index => <FaStar key={index + 1} className='text-yellow-500' />)
      }
      {
        Array(5 - score).fill(0).map(index => <FaStar key={index + 1} className='text-zinc-300' />)
      }
    </div>
  )
}
