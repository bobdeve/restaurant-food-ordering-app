import { configureStore, createSlice } from '@reduxjs/toolkit'
import itemSlice from './itemSlice'
import progressSlice from './progressSlice'





const store = configureStore({
    reducer : { items : itemSlice.reducer, progress : progressSlice.reducer}
})

export const itemAction = itemSlice.actions
export const progressAction = progressSlice.actions

export default store