import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'

const Navigation = () => {
  return (
    <ul className="navigation d-flex flex-wrap justify-end">
      <li className="navigation-item d-flex align-center">
        <CartIcon className="navigation-item__icon" width={20} height={20} />
        <span>1205 руб.</span>
      </li>
      <li className="navigation-item d-flex align-center">
        <FavoriteIcon className="navigation-item__icon" width={19} height={17} />
        <span>Закладки</span>
      </li>
      <li className="navigation-item d-flex align-center">
        <ProfileIcon className="navigation-item__icon" width={18} height={18} />
        <span>Профиль</span>
      </li>
    </ul>
  )
}

export default Navigation
