import { useContext, useState } from 'react'
import axios from 'axios'
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg'
import CartItems from './CartItems'
import styles from './Cart.module.scss'
import AppContext from '../../contexts/AppContext'
import CartEmpty from './CartEmpty'
import CartOrder from './CartOrder'

const Cart = ({ onItemRemove }) => {
  const { cartItems, setCartItems, handleCartClose } = useContext(AppContext)
  const [orderId, setOrderId] = useState()
  const [isOrderLoading, setIsOrderLoading] = useState(false)
  const isOrderComplete = orderId != null
  const isEmpty = cartItems.length === 0
  const isInfo = isOrderComplete || isEmpty
  const onOrder = async () => {
    try {
      setIsOrderLoading(true)
      const { data } = await axios.post('https://65a7e40e94c2c5762da7d713.mockapi.io/orders', {
        items: cartItems,
      })
      setOrderId(data.id)
      setCartItems([])
    } catch (e) {
      alert('Не удалось создать заказ')
    } finally {
      setIsOrderLoading(false)
    }
  }
  const handleClose = () => {
    setOrderId(null)
    handleCartClose()
  }
  const renderInfo = () => {
    if (isOrderComplete) {
      return <CartOrder id={orderId} onClose={handleClose} />
    } else if (isEmpty) {
      return <CartEmpty onClose={handleClose} />
    }
  }
  return (
    <div className={`${styles.cart} d-flex flex-column`}>
      {isInfo ? (
        renderInfo()
      ) : (
        <>
          <CartItems items={cartItems} onItemRemove={onItemRemove} />
          <footer className={`${styles['cart__footer']} d-flex flex-column`}>
            <ul className={`${styles['cart__info']} d-flex flex-column mb-25`}>
              <li className={`${styles['cart__info-item']} d-flex`}>
                <span>Итого: </span>
                <b>21 498 руб. </b>
              </li>
              <li className={`${styles['cart__info-item']} d-flex`}>
                <span>Налог 5%: </span>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="button-color" type="button" onClick={onOrder} disabled={isOrderLoading}>
              <span>Оформить заказ</span>
              <ArrowRightIcon className="button-color__icon" width={16} height={14} />
            </button>
          </footer>
        </>
      )}
    </div>
  )
}

export default Cart
