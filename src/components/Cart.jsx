import React, { useContext } from 'react'
import { useHttp } from '../custom/useHttp'
import { CartItem } from './CartItem'
import UserProgressContext from '../storage/UserProgressContext'
import { Modal } from '../UI/Modal'
import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
import { CheckOut } from './CheckOut'
import useFetchFoods from '../custom/useFetchFoods'


const config = {}
export const Cart = () => {
    // const {data} = useHttp('http://localhost:3000/meals',config,[])
    // const {data} = useHttp('https://demo-foodorder-3.onrender.com/foods',config,[])
    const { data, loading, error } = useFetchFoods('https://demo-foodorder-3.onrender.com/foods');
    
    const {progress,hideCart} = useContext(UserProgressContext)
   

    const hideuserCart = () => {
        hideCart()
    }

    return (
        <>
        <div className='mx-6 md:mx-2'>  
            <ul className='flex justify-around flex-wrap'>
                {data?.map((item) => (
                  // Changed from key={index} to key={item.id}
                    <li key={item._id}>  
                        <CartItem item={item}/>
                    </li>
                ))}
            </ul>
        </div>
    </>
    )
}