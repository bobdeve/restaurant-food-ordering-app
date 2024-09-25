import React, { createContext, useState } from 'react'


export const UserProgressContext = createContext({
    progress :"",
    hideCart: () => {},
    showCart: () => {},
    hideCheckOut: () => {},
    showCheckOut: () => {},
    showSucesss: () => {},
    showHistories: () => {},
})

export const UserProgressContextProvider = ({children}) => {
    const [progress,setProgress]= useState("")
    const showCart =()=>{
        setProgress("cart")
    }
    const showCheckOut =()=>{
        setProgress("checkout")
    }
    const showSucesss =()=>{
        setProgress("success")
    }
    const showHistories =()=>{ 
        setProgress("history") // This is correct
    }
    const hideCart =()=>{
        setProgress()
    }
    const hideCheckOut =()=>{
        setProgress()
    }
    const progressValue ={progress,showCart,hideCart,showCheckOut,hideCheckOut,showSucesss,showHistories}
  return (
    <UserProgressContext.Provider value={progressValue}>{children}</UserProgressContext.Provider>
  )
}
export default UserProgressContext