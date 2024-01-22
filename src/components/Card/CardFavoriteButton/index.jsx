import { ReactComponent as HeartActiveIcon } from '../../../assets/icons/heart-active.svg'
import { ReactComponent as HeartInactiveIcon } from '../../../assets/icons/heart-inactive.svg'
import styles from './CardFavoriteButton.module.scss'

const CardFavoriteButton = ({ isFavorite, onFavoriteAdd, onFavoriteRemove }) => {
  return isFavorite ? (
    <button className={`button ${styles['card-favorite-btn']}`} aria-label="Not favorite" onClick={onFavoriteRemove}>
      <HeartActiveIcon className="button__icon" width={32} height={32} aria-hidden={true} />
    </button>
  ) : (
    <button className={`button ${styles['card-favorite-btn']}`} aria-label="To favorite" onClick={onFavoriteAdd}>
      <HeartInactiveIcon className="button__icon" width={32} height={32} aria-hidden={true} />
    </button>
  )
}

export default CardFavoriteButton
