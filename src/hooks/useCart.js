import { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import { formatCurrency } from '../utils'

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext)
  const priceTotal = cartItems.reduce((result, item) => result + item.price, 0)
  const priceTotalOutput = formatCurrency(priceTotal)
  const priceFeeOutput = formatCurrency((priceTotal * 5) / 100)

  return { cartItems, setCartItems, priceTotal: priceTotalOutput, priceFee: priceFeeOutput }
}
