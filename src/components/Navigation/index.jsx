import { Link } from 'react-router-dom'
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import styles from './Navigation.module.scss'

const Navigation = ({ onCartOpen }) => {
  return (
    <ul className={`${styles.navigation} d-flex flex-wrap justify-end`}>
      <li>
        <button className={`${styles['navigation-item']} d-flex align-center`} type="button" onClick={onCartOpen}>
          <CartIcon className={styles['navigation-item__icon']} width={20} height={20} />
          <span>1205 руб.</span>
        </button>
      </li>
      <li className={`${styles['navigation-item']} d-flex align-center`}>
        <Link className={`${styles['navigation-item']} d-flex align-center`} to="/favorites">
          <FavoriteIcon className={styles['navigation-item__icon']} width={19} height={17} />
          <span>Закладки</span>
        </Link>
      </li>
      <li className={`${styles['navigation-item']} d-flex align-center`}>
        <ProfileIcon className={styles['navigation-item__icon']} width={18} height={18} />
        <span>Профиль</span>
      </li>
    </ul>
  )
}

export default Navigation
