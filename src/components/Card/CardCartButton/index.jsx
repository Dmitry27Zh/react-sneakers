import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg'
import { ReactComponent as TickIcon } from '../../../assets/icons/tick.svg'

const CardCartButton = ({ isAdded, onCartAdd, onCartRemove }) => {
  return isAdded ? (
    <button className="button" aria-label="Remove" onClick={onCartRemove}>
      <TickIcon className="button__icon" width={32} height={32} aria-hidden={true} />
    </button>
  ) : (
    <button className="button" aria-label="Add" onClick={onCartAdd}>
      <PlusIcon className="button__icon" width={32} height={32} aria-hidden={true} />
    </button>
  )
}

export default CardCartButton
