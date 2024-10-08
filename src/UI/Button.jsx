import React from 'react'

export const Button = ({label,children,...props}) => {
    const cssClass = label === "main"?' cursor-pointer text-[#FFC404] px-4 py-6 self-center text-[35px]':'bg-[#FFC404] px-6 py-2 rounded-sm text-[#000] cursor-pointer w-80 self-center'  
  return (
<button  className={cssClass} {...props}>{children}</button>
  )
}
