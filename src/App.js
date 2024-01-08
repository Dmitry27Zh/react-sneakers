import logo from '../src/assets/icons/logo.png'
import { ReactComponent as CartIcon } from '../src/assets/icons/cart.svg'
import { ReactComponent as FavoriteIcon } from '../src/assets/icons/favorite.svg'
import { ReactComponent as ProfileIcon } from '../src/assets/icons/profile.svg'

function App() {
  return (
    <div className="wrapper clear">
      <header className="header d-flex justify-between align-center p-40">
        <a className="logo d-flex align-center" href="/">
          <img className="logo__icon" width={40} height={40} src={logo} alt="Logo" />
          <div className="logo__info">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </a>
        <ul className="navigation d-flex flex-wrap">
          <li className="navigation__item">
            <CartIcon />
            <span>1205 руб.</span>
          </li>
          <li className="navigation__item">
            <FavoriteIcon />
            <span>Закладки</span>
          </li>
          <li className="navigation__item">
            <ProfileIcon />
            <span>Профиль</span>
          </li>
        </ul>
      </header>
      <main className="content p-40">
        <h1>Все кроссовки</h1>
      </main>
    </div>
  )
}

export default App
