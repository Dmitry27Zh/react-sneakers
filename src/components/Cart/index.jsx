import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg'
import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg'
import CartItems from './CartItems'
import boxEmptySrc from '../../assets/imgs/box-empty.png'
import styles from './Cart.module.scss'

const Cart = ({ items, onItemRemove, onClose }) => {
  return (
    <div className={`${styles.cart} d-flex flex-column`}>
      {items.length === 0 ? (
        <div className={`${styles['cart__empty']} d-flex flex-column justify-center align-center`}>
          <img src={boxEmptySrc} alt="Empty box" />
          <h2>Корзина пустая</h2>
          <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <button className="button-color" type="button" onClick={onClose}>
            <ArrowLeftIcon className="button-color__icon button-color__icon--left" width={16} height={14} />
            <span>Вернуться назад</span>
          </button>
        </div>
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
