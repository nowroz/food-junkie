"use client"

import { useState } from "react"
import CartItemsContext from "../contexts/CartItemsContext"

const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartIems] = useState([])

  const addCartItem = (item) => {
    setCartIems([...cartItems, item])
  }

  const cart = {
    cartItems, addCartItem
  }

  return (
    <CartItemsContext value={cart} >
      {children}
    </CartItemsContext>
  )
}

export default CartItemsProvider
