import { createSlice } from "@reduxjs/toolkit"


const initialItems = {items:[]}

const itemSlice =createSlice({
    name: 'items',
    initialState: initialItems,
    reducers: {
        removeItems(state,action){
           
          const exisitingIndex = state.items.findIndex(item=> item._id === action.payload)
          
          
           if(state.items[exisitingIndex].quantity === 1){
              state.items.splice(exisitingIndex,1)

           }
           else {
            state.items[exisitingIndex] = {...state.items[exisitingIndex],quantity:state?.items[exisitingIndex]?.quantity - 1 }
           }
        },
        removeOneItem(state,action){
            const exisitingIndex = state.items.findIndex(item=> item._id === action.payload)
            state.items.splice(exisitingIndex,1)
              
        },
        addItems(state,action) {
           
            const exisitingIndex = state.items.findIndex(item=> item._id === action.payload._id)
            
           
             if(exisitingIndex > -1){
                
                state.items[exisitingIndex] = {...state.items[exisitingIndex], quantity: state.items[exisitingIndex].quantity + 1}
             }
             else {
                state.items.push({...action.payload,quantity:1})
                
             }
        },
        resetitems(state){
            state.items=[]
        }
    }
})

export default itemSlice