import React, { useContext } from "react";
import UserProgressContext from "../storage/UserProgressContext";
import { Modal } from "../UI/Modal";
import { Input } from "../UI/Input";

import { Button } from "../UI/Button";

import CartContext from "../storage/CartContext";
import { currencyFormatter } from "../utils/formatting";
import { useHttp } from "../custom/useHttp";
import useFetchFoods from "../custom/useFetchFoods";

const requestConfig = {
  method: "POST",

  headers: { "Content-Type": "application/json" },
};

// ... existing imports ...

export const CheckOut = () => {
  const { progress, hideCart, hideCheckOut, showCheckOut, showSucesss,showHistories } =useContext(UserProgressContext);

  const { items, addItems, removeItems, resetItems } = useContext(CartContext);
  const { loading: isLoading, error, postData } = useFetchFoods("https://demo-foodorder-3.onrender.com/foods");
  const { data:historyData, loading,  } = useFetchFoods('https://demo-foodorder-3.onrender.com/history');

  const hideUserCart = () => hideCart();
  console.log(progress)
  const resetCartItems = () => {
    
    resetItems();
    hideCart();
    window.location.reload();
    
  };

  const totalprice = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalIems ={items,totalprice}
  const handleSubmit = async (event) => {
    event.preventDefault();
    const customerData = Object.fromEntries(new FormData(event.target).entries());
    const sampleitem = { ...customerData, totalIems, date: new Date().toISOString() }; // Added date and time
    postData(sampleitem);
    showSucesss();
    event.target.reset();
  };

  const renderCartModal = () => {
    if (items.length === 0) return <h1 className="p-10">No items in the cart</h1>;

    return (
      <div className="flex flex-col w-full max-w-[700px] px-5 py-8 gap-5 sm:px-12 sm:py-12">
        <h1 className="text-cyan-950 text-lg sm:text-2xl">Your Cart</h1>
        <ul className="flex flex-col gap-3">
          {items.map((item, index) => (
            <li key={index + 1}>
              <div className="flex gap-3 items-center">
                <span>{item.name} &nbsp;-&nbsp; {item.quantity} &nbsp;X&nbsp; {currencyFormatter.format(item.price)}</span>
                <div className="flex justify-end ml-auto items-center">
                  <button onClick={() => removeItems(item._id)} className="bg-[#1D1A16] text-[#e5b004] w-8 h-8 rounded-full">-</button>
                  <span className="mx-3">{item.quantity}</span>
                  <button onClick={() => addItems(item)} className="bg-[#1D1A16] text-[#e5b004] w-8 h-8 rounded-full">+</button>
                </div>
              </div>
            </li>
          ))}
          <h1 className="text-[#000] text-[20px] ml-auto mt-5">{currencyFormatter.format(totalprice)}</h1>
        </ul>
      </div>
    );
  };

  if (progress === "success") {
    return (
      <Modal onCancel={progress === "success" ? hideUserCart : null} open={progress === 'success'}>
      <div className="p-16 flex flex-col gap-3">
        <h1 className="text-[20px]">Your Order has been completed. Order again?</h1>
        <div className="flex flex-col sm:flex-row gap-2 justify-end">
          <button className="self-end bg-[#FFC404] px-5 py-3 rounded shadow-md hover:bg-[#e5b004] transition duration-200" onClick={() => showHistories()}>Go to order history</button>
          <Button onClick={resetCartItems} className="w-full sm:w-auto">Order Again</Button>
        </div>
      </div>
    </Modal>
    );
  }
  if(progress === "history"){
    return (
      <Modal onClose={progress === "history" ? hideUserCart : null} open={progress === "history"}>
        <div className="flex flex-col p-5">
          <h1 className="text-2xl font-bold mb-4">Order History</h1>
          {historyData.length === 0 ? (
            <p className="text-gray-500">No order history available.</p>
          ) : (
            historyData.map(data => (
              <div key={data?._id} className="flex flex-col bg-gray-100 p-4 rounded-lg mb-3 shadow">
                <h2 className="font-semibold">Client's Name: {data?.name}</h2>
                <h4 className="text-gray-700">Address: {data?.street}</h4>
                <p className="text-gray-600">Order Date: {new Date(data?.date).toLocaleDateString()}</p>
                <p className="text-gray-600">Total: {currencyFormatter.format(data?.totalIems?.totalprice)}</p>
              </div>
            ))
          )}
        </div>
        <div className=" flex justify-end p-3">
         <Button onClick={resetCartItems}>Order Again</Button>
        </div>
      </Modal>
    );
  }

  return (
    <>
      <Modal onCancel={progress === "checkout" ? hideUserCart : null} open={progress === "checkout"}>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col py-8 px-4 sm:px-8 gap-4 w-full sm:w-[800px]">
            <Input label="Full Name" id="name" type="text" required />
            <Input label="Email" id="email" type="email" required />
            <Input label="Street" id="street" type="text" required />
            <div className="flex flex-col sm:flex-row gap-5">
              <Input label="Postal-Code" id="postal-code" required />
              <Input label="City" id="city" required />
            </div>
            <div className="flex gap-3 justify-end">
              <button type="button" onClick={hideCheckOut} className="bg-gray-300 px-4 py-2 rounded">Close</button>
              <Button type="submit">Check Out</Button>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-600">Error: {error}</p>}
          </div>
        </form>
      </Modal>

      <Modal onClose={progress === "cart" ? hideUserCart : null} open={progress === "cart"}>
        {renderCartModal()}
        <div className="flex gap-3 justify-end ml-auto mt-4 p-10">
          { items.length !== 0 ?
            <>
            <button onClick={hideUserCart}>Close</button>
          <Button onClick={showCheckOut}>Submit Order</Button>
            </>:  <Button onClick={hideUserCart}>Close</Button>
          }
          
        </div>
      </Modal>
     
    </>
  );
};