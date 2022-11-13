import { createContext, useState } from "react";

export const cartContext = createContext()



export default function CartProvider({children}) {

    const [cart,setCart] =useState([])

    const addToCart=(data)=>{
        setCart([data])
    }
    // console.log(cart)

  return (
    <cartContext.Provider value={{cart,addToCart}}>{children}</cartContext.Provider>
  )
}
