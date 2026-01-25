import { useContext } from "react"
import CartItemsContext from "../contexts/CartItemsContext"

const useCartItemsContext = () => {
  const cartItemsContext = useContext(CartItemsContext)

  return cartItemsContext
}

export default useCartItemsContext
