import Info from '../../Info'
import orderSuccess from '../../../assets/imgs/order-success.png'

const CartOrder = ({ id, onClose }) => {
  return (
    <Info
      imgSrc={orderSuccess}
      title="Заказ оформлен!"
      text={`Ваш заказ #${id} скоро будет передан курьерской доставке`}
      onClose={onClose}
    />
  )
}

export default CartOrder
