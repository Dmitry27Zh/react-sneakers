import logo from '../src/assets/icons/logo.png'
import { ReactComponent as CartIcon } from '../src/assets/icons/cart.svg'
import { ReactComponent as FavoriteIcon } from '../src/assets/icons/favorite.svg'
import { ReactComponent as ProfileIcon } from '../src/assets/icons/profile.svg'

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <a className="logo" href="/">
          <img width={40} height={40} src={logo} alt="Logo" />
          <div className="logo__info">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </a>
        <ul className="navigation">
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
      <main className="content">
        <h1>Все кроссовки</h1>
      </main>
    </div>
  )
}

export default App
