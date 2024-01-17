import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'
import { ReactComponent as TickIcon } from '../../assets/icons/tick.svg'
import { ReactComponent as HeartActiveIcon } from '../../assets/icons/heart-active.svg'
import { ReactComponent as HeartInactiveIcon } from '../../assets/icons/heart-inactive.svg'
import styles from './Card.module.scss'

const currency = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
})

const Card = ({
  title,
  price,
  imgSrc,
  isFavorite,
  isAdded,
  onCartAdd,
  onCartRemove,
  onFavoriteAdd,
  onFavoriteRemove,
}) => {
  return (
    <article className={`${styles.card} p-20`}>
      {isFavorite ? (
        <button
          className={`button ${styles['card__favorite-btn']}`}
          aria-label="Not favorite"
          onClick={onFavoriteRemove}
        >
          <HeartActiveIcon className="button__icon" width={32} height={32} aria-hidden={true} />
        </button>
      ) : (
        <button className={`button ${styles['card__favorite-btn']}`} aria-label="To favorite" onClick={onFavoriteAdd}>
          <HeartInactiveIcon className="button__icon" width={32} height={32} aria-hidden={true} />
        </button>
      )}
      <img width={113} height={112} src={imgSrc} alt="Product" />
      <h3 className={styles['card__title']}>{title}</h3>
      <footer className="d-flex justify-between align-center">
        <div className={`${styles['card__price']} d-flex flex-column`}>
          <span>Цена:</span>
          <b>{currency.format(price)}</b>
        </div>
        {isAdded ? (
          <button className="button" aria-label="Remove" onClick={onCartRemove}>
            <TickIcon className="button__icon" width={32} height={32} aria-hidden={true} />
          </button>
        ) : (
          <button className="button" aria-label="Add" onClick={onCartAdd}>
            <PlusIcon className="button__icon" width={32} height={32} aria-hidden={true} />
          </button>
        )}
      </footer>
    </article>
  )
}

export default Card
