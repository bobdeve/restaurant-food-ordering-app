import { createSlice } from "@reduxjs/toolkit"


const initialStateProgress ={progress:""}

const progressSlice = createSlice({
    name: 'progress',
    initialState:initialStateProgress,
    reducers: {
        showCart(state){
            state.progress ="cart"
        },
        showCheckout(state){
            state.progress ="checkout"

        },
        showSuccess(state){

            state.progress ="success"
        },
        showHistory(state){
            state.progress ="history"
        },
        hideModal(state){
            state.progress =""
        }
        
    }



})

export default progressSlice