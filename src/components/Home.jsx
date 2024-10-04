import React from 'react'
import { Header } from './Header'
import { Success } from './Success'
import { Cart } from './Cart'
import { CheckOut } from './CheckOut'


export const Home = () => {
  return (
    <div>

      <Header/>
      <Cart/>
      <CheckOut/>
      </div>
  )
}
