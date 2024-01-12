import logo from '../../assets/icons/logo.png'
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'

const Header = () => {
  return (
    <header className="header d-flex justify-between align-center p-40">
      <a className="logo d-flex align-center" href="/">
        <img className="logo__icon" width={40} height={40} src={logo} alt="Logo" />
        <div className="logo__info">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </a>
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
    </header>
  )
}

export default Header
