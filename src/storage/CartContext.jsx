import React, { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItems: () => [],
    removeItems: () => [],
    resetItems: () => [],
});

const cartReducer =(state,action)=>{
    if(action.type ==="ADD_ITEM"){
        const indexOfExistingItem = state.items.findIndex((item) => item._id === action.item._id)
       
        const updatedItems = [...state.items]

           if(indexOfExistingItem > -1){
            const existingItem =  state.items[indexOfExistingItem]
            
            const updatedItem = {
              
                 ...existingItem,
                 quantity: existingItem.quantity +1
            }
            updatedItems[indexOfExistingItem]=updatedItem
           }
           else{
            updatedItems.push({...action.item, quantity:1})
           }
        return {...state, items: updatedItems}
    }
    if(action.type ==="REMOVE_ITEM"){
       
        const existingItemIndex = state.items.findIndex(item => item._id === action.id)
        
        const updatedItems = [...state.items]
        const exisitingItem = updatedItems[existingItemIndex]
        if(exisitingItem?.quantity === 1){
            updatedItems.splice(existingItemIndex,1)
            
        }else {
            const existingItem = state.items[existingItemIndex]
            const updatedItem = {
                ...existingItem,quantity: existingItem?.quantity -1
            }
            updatedItems[existingItemIndex] = updatedItem
        }
        return {...state,items:updatedItems}
    }
    if (action.type === "RESET_ITEM") {
        return {...state,items:[]}
    }
}


export const CartContextProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, { items:[]})
   
   
    const  addItems=(item)=>{
       
        dispatch({type:'ADD_ITEM', item})
    }
    const  removeItems=(id)=>{
        
        dispatch({type:'REMOVE_ITEM', id})
    }
    const resetItems=()=>{
        dispatch({type:'RESET_ITEM'})
    }

   const crtValue ={
    items: cartState.items,
    addItems,
    removeItems,
    resetItems

   }
  return <CartContext.Provider value={crtValue}>{children}</CartContext.Provider>;
};

export default CartContext;
