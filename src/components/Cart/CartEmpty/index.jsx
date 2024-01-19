import Info from '../../Info'
import boxEmptySrc from '../../../assets/imgs/box-empty.png'

const CartEmpty = ({ onClose }) => {
  return (
    <Info
      imgSrc={boxEmptySrc}
      title="Корзина пустая"
      text="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
      onClose={onClose}
    />
  )
}

export default CartEmpty
