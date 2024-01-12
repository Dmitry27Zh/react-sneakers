import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'
import { ReactComponent as TickIcon } from '../../assets/icons/tick.svg'
import { ReactComponent as HeartActiveIcon } from '../../assets/icons/heart-active.svg'
import { ReactComponent as HeartInactiveIcon } from '../../assets/icons/heart-inactive.svg'

const Card = ({ imgSrc, isFavorite, isAdded }) => {
  return (
    <article className="card p-20">
      {isFavorite ? (
        <button className="button card__favorite-btn" aria-label="Not favorite">
          <HeartActiveIcon className="button__icon" width={32} height={32} aria-hidden={true} />
        </button>
      ) : (
        <button className="button card__favorite-btn" aria-label="To favorite">
          <HeartInactiveIcon className="button__icon" width={32} height={32} aria-hidden={true} />
        </button>
      )}
      <img width={113} height={112} src={imgSrc} alt="Product" />
      <h3 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h3>
      <footer className="d-flex justify-between align-center">
        <div className="card__price d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        {isAdded ? (
          <button className="button" aria-label="Remove">
            <TickIcon className="button__icon" width={32} height={32} aria-hidden={true} />
          </button>
        ) : (
          <button className="button" aria-label="Add">
            <PlusIcon className="button__icon" width={32} height={32} aria-hidden={true} />
          </button>
        )}
      </footer>
    </article>
  )
}

export default Card
