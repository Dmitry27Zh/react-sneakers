import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'
import sneakers1 from '../../assets/imgs/sneakers-1.jpg'
import sneakers2 from '../../assets/imgs/sneakers-2.jpg'

const Cart = () => {
  return (
    <div className="cart d-flex flex-column">
      <article className="cart-item d-flex align-center mb-20">
        <img className="cart-item__img mr-20" width={70} height={70} src={sneakers1} alt="Sneakers" />
        <div className="cart-item__info mr-15">
          <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 руб.</b>
        </div>
        <button className="cart-item__btn button" aria-label="Remove">
          <DeleteIcon className="button__icon" width={32} height={32} aria-hidden={true} />
        </button>
      </article>
      <article className="cart-item d-flex align-center mb-20">
        <img className="cart-item__img mr-20" width={70} height={70} src={sneakers2} alt="Sneakers" />
        <div className="cart-item__info mr-15">
          <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
          <b>8 499 руб.</b>
        </div>
        <button className="cart-item__btn button" aria-label="Remove">
          <DeleteIcon className="button__icon" width={32} height={32} aria-hidden={true} />
        </button>
      </article>
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
