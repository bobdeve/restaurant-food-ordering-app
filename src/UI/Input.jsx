import React from 'react'

export const Input = ({label,id,children,...props}) => {
  return (
    <div className='flex flex-col w-[300px] '>
  <label htmlFor={id}>{label}</label>
  <input className='border-2 w-max-[300px] p-2 rounded-sm' name={id} id={id}  required {...props}/>
    </div>
  )
}
