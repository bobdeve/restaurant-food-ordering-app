import React, { useContext } from 'react'
import logoPic from '../../src/assets/logo.jpg'
import { Button } from '../UI/Button'
import CartContext from '../storage/CartContext'
import UserProgressContext from '../storage/UserProgressContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import {  progressAction } from '../store'




export const Header = () => {

 
 
  const userItems= useSelector((state)=> state.items.items)
  const progressU= useSelector((state)=> state.progress.progress)
  console.log(progressU)
  const dispatch= useDispatch()
  const totalNumberOfItems = userItems.reduce((total, item) => total + item.quantity,0)

  const showUserCart =()=>{
   
     dispatch(progressAction.showCart())
    
  }
  
  return (
    <div className='flex flex-col md:flex-row justify-between mx-4 md:mx-24 my-10 items-center'>
        <div className='flex gap-4 items-center mb-4 md:mb-0'>
            <img className='w-24 rounded-[50%] border-[3px] border-[#FFC404]' src={logoPic} alt="Logo of the food application" />
            <h1 className='text-center md:text-left text-lg md:text-xl'>Food ordering App</h1>
        </div>
        
        {/* <Button onClick={showUserCart} label="main">Cart({totalNumberOfItems})</Button> */}
        <Button onClick={showUserCart} label="main">
    <FontAwesomeIcon icon={faShoppingCart} /> {totalNumberOfItems}
</Button>
    </div>
  )
}
