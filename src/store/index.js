import { configureStore, createSlice } from '@reduxjs/toolkit'


const initialItems = {items:[]}

const itemSlice =createSlice({
    name: 'items',
    initialState: initialItems,
    reducers: {
        removeItems(state,action){
          const exisitingIndex = state.items.indexOf(item=> item._id === action.payload)
          const exisitingItem = state.items[exisitingIndex]
          const updatedItems = state.items
           if(exisitingIndex === 1){
              state.items.splice(exisitingIndex,1)

           }
           else {
            state.items[exisitingIndex].quantity = state.items[exisitingIndex].quantity -1
           }
        },
        addItems(state,action) {
            const exisitingIndex = state.items.indexOf(item=> item._id === action.payload._id)
            console.log(exisitingIndex)
             if(exisitingIndex > -1){
                state.items[exisitingIndex].quantity = state.items[exisitingIndex].quantity + 1
             }
             else {
                state.items.push(action.payload)
             }
        }
    }
})


const store = configureStore({
    reducer : { items : itemSlice.reducer}
})

export const itemAction = itemSlice.actions

export default store