import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg'
import CartItems from './CartItems'
import boxEmptySrc from '../../assets/imgs/box-empty.png'
import styles from './Cart.module.scss'
import Info from '../Info'

const Cart = ({ items, onItemRemove, onClose }) => {
  return (
    <div className={`${styles.cart} d-flex flex-column`}>
      {items.length === 0 ? (
        <Info
          imgSrc={boxEmptySrc}
          title="Корзина пустая"
          text="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
          onClose={onClose}
        />
      ) : (
        <>
          <CartItems items={items} onItemRemove={onItemRemove} />
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
            <button className="button-color" type="button">
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
