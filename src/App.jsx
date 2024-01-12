import logo from '../src/assets/icons/logo.png'
import { ReactComponent as CartIcon } from '../src/assets/icons/cart.svg'
import { ReactComponent as FavoriteIcon } from '../src/assets/icons/favorite.svg'
import { ReactComponent as ProfileIcon } from '../src/assets/icons/profile.svg'
import { ReactComponent as SearchIcon } from '../src/assets/icons/search.svg'
import { ReactComponent as DeleteIcon } from '../src/assets/icons/delete.svg'
import { ReactComponent as ArrowRightIcon } from '../src/assets/icons/arrow-right.svg'
import sneakers1 from './assets/imgs/sneakers-1.jpg'
import sneakers2 from './assets/imgs/sneakers-2.jpg'
import sneakers3 from './assets/imgs/sneakers-3.jpg'
import sneakers4 from './assets/imgs/sneakers-4.jpg'
import sneakers5 from './assets/imgs/sneakers-5.jpg'
import sneakers6 from './assets/imgs/sneakers-6.jpg'
import sneakers7 from './assets/imgs/sneakers-7.jpg'
import sneakers8 from './assets/imgs/sneakers-8.jpg'
import sneakers9 from './assets/imgs/sneakers-9.jpg'
import sneakers10 from './assets/imgs/sneakers-10.jpg'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="wrapper clear">
      <div className="drawer" style={{ display: 'none' }}>
        <div className="drawer__overlay"></div>
        <div className="drawer__content d-flex flex-column">
          <div className="drawer__title d-flex justify-between align-center mb-30">
            <h2>Корзина</h2>
            <button className="drawer__title-btn button" aria-label="Remove">
              <DeleteIcon className="button__icon" width={32} height={32} aria-hidden={true} />
            </button>
          </div>

          <div className="cart d-flex flex-column">
            <article className="cart-item d-flex align-center mb-20">
              <img className="cart-item__img mr-20" width={70} height={70} src={sneakers1} alt="Sneakers" />
              <div className="cart-item__info mr-15">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button className="cart-item__btn button" aria-label="Remove">
                <DeleteIcon className="button__icon" width={32} height={32} aria-hidden={true} />
              </button>
            </article>
            <article className="cart-item d-flex align-center mb-20">
              <img className="cart-item__img mr-20" width={70} height={70} src={sneakers2} alt="Sneakers" />
              <div className="cart-item__info mr-15">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>8 499 руб.</b>
              </div>
              <button className="cart-item__btn button" aria-label="Remove">
                <DeleteIcon className="button__icon" width={32} height={32} aria-hidden={true} />
              </button>
            </article>
            <footer className="cart__footer d-flex flex-column">
              <ul className="cart__info d-flex flex-column mb-25">
                <li className="cart__info-item d-flex">
                  <span>Итого: </span>
                  <b>21 498 руб. </b>
                </li>
                <li className="cart__info-item d-flex">
                  <span>Налог 5%: </span>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button className="button-color" type="button">
                <span>Оформить заказ</span>
                <ArrowRightIcon className="button-color__icon" width={16} height={14} />
              </button>
            </footer>
          </div>
        </div>
      </div>
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
      <main className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <SearchIcon className="search__icon" width={15} height={16} />
            <input className="search__input" type="search" placeholder="Поиск..." />
          </div>
        </div>
        <div className="products d-flex flex-wrap justify-center">
          <Card imgSrc={sneakers1} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers2} isFavorite={true} isAdded={false} />
          <Card imgSrc={sneakers3} isFavorite={false} isAdded={true} />
          <Card imgSrc={sneakers4} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers5} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers6} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers7} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers8} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers9} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers1} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers4} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers10} isFavorite={false} isAdded={false} />
        </div>
      </main>
    </div>
  )
}

export default App
