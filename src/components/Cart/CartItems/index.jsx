import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg'

const CartItems = ({ items, onItemRemove }) => {
  return items.map((item) => {
    const { _id, title, price, imgSrc } = item

    return (
      <article className="cart-item d-flex align-center mb-20" key={_id}>
        <img className="cart-item__img mr-20" width={70} height={70} src={imgSrc} alt="Sneakers" />
        <div className="cart-item__info mr-15">
          <p className="mb-5">{title}</p>
          <b>{price}</b>
        </div>
        <button className="cart-item__btn button" aria-label="Remove" onClick={() => onItemRemove(item)}>
          <DeleteIcon className="button__icon" width={32} height={32} aria-hidden={true} />
        </button>
      </article>
    )
  })
}

export default CartItems
