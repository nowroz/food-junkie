"use client"

import useCartItemsContext from "@/app/hooks/useCartItemsContext"

const CartItems = () => {
  const { cartItems } = useCartItemsContext()
  console.log(cartItems)

  return (
    <div className="min-h-screen p-4 border rounded-2xl">
      <h3 className="text-3xl font-bold mb-4">Cart Items</h3>
      <hr className="mb-4" />
      <ul className="flex flex-col gap-3">
        {
          cartItems.map(item => (
            <li key={item.id}>{item.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default CartItems
