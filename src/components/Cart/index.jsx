import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg'
import CartItems from './CartItems'

const Cart = ({ items, onItemRemove }) => {
  return (
    <div className="cart d-flex flex-column">
      <CartItems items={items} onItemRemove={onItemRemove} />
      <footer className="cart__footer d-flex flex-column">
        <ul className="cart__info d-flex flex-column mb-25">
          <li className="cart__info-item d-flex">
            <span>Итого: </span>
            <b>21 498 руб. </b>
          </li>
          <li className="cart__info-item d-flex">
            <span>Налог 5%: </span>
            <b>1074 руб. </b>
          </li>
        </ul>
        <button className="button-color" type="button">
          <span>Оформить заказ</span>
          <ArrowRightIcon className="button-color__icon" width={16} height={14} />
        </button>
      </footer>
    </div>
  )
}

export default Cart
