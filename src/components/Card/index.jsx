import ContentLoader from 'react-content-loader'
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
  isLoading,
}) => {
  return (
    <article className={`${styles.card} d-flex flex-column p-20`}>
      {isLoading ? (
        <ContentLoader
          className="w100p"
          speed={2}
          width={150}
          height={200}
          viewBox="0 0 150 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="64" y="58" rx="0" ry="0" width="0" height="1" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="106" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="135" rx="3" ry="3" width="90" height="15" />
          <rect x="0" y="170" rx="8" ry="8" width="80" height="25" />
          <rect x="118" y="165" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {isFavorite ? (
            <button
              className={`button ${styles['card__favorite-btn']}`}
              aria-label="Not favorite"
              onClick={onFavoriteRemove}
            >
              <HeartActiveIcon className="button__icon" width={32} height={32} aria-hidden={true} />
            </button>
          ) : (
            <button
              className={`button ${styles['card__favorite-btn']}`}
              aria-label="To favorite"
              onClick={onFavoriteAdd}
            >
              <HeartInactiveIcon className="button__icon" width={32} height={32} aria-hidden={true} />
            </button>
          )}
          <img className={styles['card__img']} width={113} height={112} src={imgSrc} alt="Product" />
          <h3 className={styles['card__title']}>{title}</h3>
          <footer className={`${styles['card__footer']} d-flex justify-between align-center`}>
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
        </>
      )}
    </article>
  )
}

export default Card
