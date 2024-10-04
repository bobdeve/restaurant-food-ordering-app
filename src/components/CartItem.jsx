import React, { useContext } from "react";
import mockPic from "../../src/assets/logo.jpg";
import { Button } from "../UI/Button";
import { currencyFormatter } from "../utils/formatting";
import CartContext from "../storage/CartContext";
import UserProgressContext from "../storage/UserProgressContext";
import { Modal } from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const CartItem = ({ item }) => {
  const { items, addItems,removeItems } = useContext(CartContext);
  //const { progress, hideCart, showCart,showCheckOut } = useContext(UserProgressContext);
  const dispatch = useDispatch()
  const totalNumberOfItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  
 
  const additemToCart = () => {
    addItems(item);
    dispatch(itemAction.addItems(item))
    toast.success("Food added successfully", {
      position: "top-center", // Toast position
      autoClose: 2000, // Ensure the toast has a timeout (shows progress bar)
      hideProgressBar: false, // Ensure progress bar is visible
      progressClassName: '#FFC404', // Tailwind class for progress bar color
    });
    
    
  };
  
 
  return (
    <>
      

      <div className=" max-w-[350px] rounded-[20px] mb-10  flex flex-col justify-center items-center gap-4 bg-[#1D1A16] pb-3">
        <img
          className=" rounded-[20px]"
          src={item.image}
          alt="Picture of food items"
        />
        <h1 className=" text-center text-[25px]">{item.name}</h1>
        <p className=" px-2 py-1 bg-[#312C1D]">
          {currencyFormatter.format(item.price)}
        </p>
        <p className=" self-center text-center px-3">
          {item.description}
        </p>
        <Button onClick={additemToCart}>Add Food</Button>
        <ToastContainer />
      </div>
    </>
  );
};
