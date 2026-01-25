"use client"

import useCartItemsContext from "@/app/hooks/useCartItemsContext"

const AddToCartButton = ({ food }) => {
  const { cartItems, addCartItem } = useCartItemsContext()

  const handleAddToCart = (item) => {
    addCartItem(item)
  }

  return (
    <button disabled={cartItems.includes(food)} onClick={() => handleAddToCart(food)} className="btn bg-amber-400 text-black hover:bg-amber-500 disabled:bg-gray-400 disabled:text-gray-300">Add to Cart</button>
  )
}

export default AddToCartButton
