import ContentLoader from 'react-content-loader'
import styles from './Card.module.scss'
import { formatCurrency } from '../../utils'
import CardFavoriteButton from './CardFavoriteButton'
import CardCartButton from './CardCartButton'

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
  isInteractive = true,
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
          {isInteractive && (
            <CardFavoriteButton
              isFavorite={isFavorite}
              onFavoriteAdd={onFavoriteAdd}
              onFavoriteRemove={onFavoriteRemove}
            />
          )}
          <img className={styles['card__img']} width={113} height={112} src={imgSrc} alt="Product" />
          <h3 className={styles['card__title']}>{title}</h3>
          <footer className={`${styles['card__footer']} d-flex justify-between align-center`}>
            <div className={`${styles['card__price']} d-flex flex-column`}>
              <span>Цена:</span>
              <b>{formatCurrency(price)}</b>
            </div>
            {isInteractive && <CardCartButton isAdded={isAdded} onCartAdd={onCartAdd} onCartRemove={onCartRemove} />}
          </footer>
        </>
      )}
    </article>
  )
}

export default Card
